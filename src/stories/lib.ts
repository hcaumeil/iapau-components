import { TemplateResult } from "lit";
import customElementsManifest from "../../custom-elements.json" assert {
  type: "json",
};

export interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

function normalize(text: string) {
  return text.toLowerCase().replace(/[-:]/g, "");
}

export function makeStory(...configs: any) {
  const {
    name,
    docs,
    css,
    component,
    dom,
    items: rawItems = [{}],
    simulations = [],
    argTypes,
    displayMode,
    cssCustomProperties,
  } = Object.assign({}, ...configs);
  const items = (typeof rawItems === "function") ? rawItems() : rawItems;

  const storyFn = (storyArgs: any) => {
    const container = document.createElement("div");
    container.classList.add("story-shadow-container");
    container.setAttribute("display-mode", displayMode);
    const shadow = container.attachShadow({ mode: "open" });

    if (css != null) {
      const styles = document.createElement("style");
      styles.innerHTML = css;
      shadow.appendChild(styles);
    }

    if (dom != null) {
      const wrapper = document.createElement("div");
      shadow.appendChild(wrapper);
      dom(wrapper);
      return container;
    }

    //   // Setup the components and inject args
    const components = items.map((props: {} | undefined, i: number) => {
      let element = document.createElement(component);
      if (i === 0) {
        element = assignPropsToElement(element, { ...props, ...storyArgs });
      } else {
        element = assignPropsToElement(element, { ...props });
      }
      return element;
    });
    components.forEach((c: any) => shadow.appendChild(c));

    return container;
  };

  // We use the values of the first item for the args
  storyFn.args = { ...items[0] };

  storyFn.parameters = {
    docs: {
      description: {
        story: (docs ?? "").trim(),
      },
      source: {
        code: getSourceCode(component, items, dom),
      },
    },
  };

  storyFn.argTypes = argTypes;
  storyFn.docs = docs;
  storyFn.css = css;
  storyFn.component = component;
  storyFn.items = items;
  storyFn.cssCustomProperties = cssCustomProperties;

  if (name != null) {
    storyFn.storyName = name;
  }

  return storyFn;
}

function assignPropsToElement(
  element: {
    [x: string]: unknown;
    setAttribute: (arg0: string, arg1: unknown) => void;
    appendChild: (arg0: any) => void;
  },
  props = {},
) {
  Object.entries(props).forEach(([name, value]: [string, any]) => {
    if (name === "style" || name === "class") {
      element.setAttribute(name, value);
    }
    if (name === "children") {
      value()
        .map((child: any) => {
          if (typeof child === "string") {
            const template = document.createElement("template");
            template.innerHTML = child;
            return template.content.cloneNode(true);
          }
          return child;
        })
        .forEach((child: any) => {
          element.appendChild(child);
        });
    } else {
      element[name] = value;
    }
  });
  return element;
}

function getSourceCode(
  component: any,
  items: { [x: string]: any; innerHTML?: string | undefined }[],
  dom: ((arg0: any) => void) | null,
) {
  if (dom != null) {
    const container = document.createElement("div");
    dom(container);
    return container.innerHTML
      .replace(/<!---->/g, "")
      .trim();
  }

  return items
    .map(({ innerHTML = "", ...props }) => {
      const attributes = Object.entries(props)
        .map(([name, value]) => {
          const attrName = name.replace(/[A-Z]/g, (a) => "-" + a.toLowerCase());
          if (value === true) {
            return `${attrName}`;
          }
          if (typeof value === "string" || typeof value === "number") {
            return `${attrName}=${JSON.stringify(String(value))}`;
          }
          if (typeof value === "object") {
            return `${attrName}='${JSON.stringify(value)}'`;
          }
          return null;
        })
        .filter((a) => a != null);

      return `<${component}${
        formatAttributes(attributes)
      }>${innerHTML}</${component}>`;
    })
    .join("\n");
}

function formatAttributes(attributes: any[]) {
  if (attributes.length === 0) {
    return "";
  }

  const isTooLong = attributes.join(" ").length > 80;
  if (isTooLong) {
    return "\n" + attributes.map((a) => `  ${a}`).join("\n") + "\n";
  } else {
    return " " + attributes.join(" ");
  }
}
