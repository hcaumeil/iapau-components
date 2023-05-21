import { ButtonMode, ButtonSize } from "./iapau-button.js";

import { makeStory } from "../../stories/lib.js";

export default {
  title: "<iapau-button>",
  component: "iapau-button",
  argTypes: {
    borderSolid: {
      control: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    hoverColors: {
      control: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    mode: {
      mapping: Object.values(ButtonMode),
      options: Object.values(ButtonMode),
      control: {
        type: "select",
      },
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      mapping: Object.values(ButtonSize),
      options: Object.values(ButtonSize),
      control: {
        type: "select",
      },
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
};

const baseItems = [{ innerHTML: "Primary", mode: "primary" }, {
  innerHTML: "Secondary",
  mode: "secondary",
}];

const conf = {
  component: "iapau-button",
  displayMode: "flex-wrap",
  css: `
    :host {
      align-items: center;
    }
  `,
};

export const Default = makeStory(conf, {
  items: [{ innerHTML: "Click here" }],
});

export const solid_border = makeStory(conf, {
  docs: `Use the \`solidBorder\` parameter to outline the button`,
  items: baseItems.map((e) => ({...e , borderSolid:true})),
});

export const hover_colors = makeStory(conf, {
  docs: `Use the \`hoverColors\` parameter to activate color reversion on hover`,
  items: baseItems.map((e) => ({...e , hoverColors:true})),
});

export const mode = makeStory(conf, {
  docs: `Use the \`mode\` parameter to switch button mode`,
  items: baseItems,
});

export const size = makeStory(conf, {
  docs: `Use the \`size\` parameter to switch button size`,
  items: [{ innerHTML: "Small", size: "sm" }, { innerHTML: "Medium" }, {
    innerHTML: "Large",
    size: "lg",
  }],
});
