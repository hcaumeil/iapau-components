import { html, TemplateResult } from "lit";
import "./iapau-textarea";

import { makeStory } from "../../stories/lib.js";

export default {
  title: "<iapau-textarea>",
  component: "iapau-textarea",
  argTypes: {
    placeholder: { control: "text" },
    cols: { control: "number" },
    rows: { control: "number" },
  },
};

const baseItems = [{ placeholder: "Test clique", cols: 40, rows: 1 }];

const conf = {
  component: "iapau-textarea",
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
