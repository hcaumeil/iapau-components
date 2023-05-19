import { ButtonSize } from "./iapau-button.js";

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

const baseItems = [{ innerHTML: "Click here" }];

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
  items: baseItems,
});

export const size = makeStory(conf, {
  docs: `Use the \`size\` parameter to switch button size`,
  items: [{ innerHTML: "Small", size: "sm" }, { innerHTML: "Medium" }, {
    innerHTML: "Large",
    size: "lg",
  }],
});
