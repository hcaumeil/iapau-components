import { html, TemplateResult } from "lit";
import "./iapau-button.js";

import { makeStory } from "../../stories/lib.js";

export default {
  title: "<iapau-button>",
  component: "iapau-button",
  argTypes: {
    borderSolid: { control: "boolean" },
    size: {
      control: "text",
      table: { defaultValue: { summary: "md" } },
      description: "Button size",
    },
  },
};

const baseItems = [
  { innerHTML: "Click here" },
];

const conf = {
  component: "iapau-button",
  displayMode: "flex-wrap",
  css: `
    :host {
      align-items: center;
    }
  `,
};

export const button = makeStory(conf, {
  items: baseItems
});


export const size = makeStory(conf, {
  docs:
    `Use the \`size\` parameter to switch button size`,
  items: [
    { innerHTML: "Small", size: "sm" },
    { innerHTML: "Medium" },
  ],
});
