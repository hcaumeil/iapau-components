import { makeStory } from "../../stories/lib.js";
import "./iapau-input.js"

export default {
  title: "<iapau-input>",
  component: "iapau-input",
  argTypes: {
    placeholder: { control: "text" },
    label: { control: "text" },
    typeInput: { control: "text" },
    error: { control: "text" },
  },
};

const baseItems = [{ placeholder: "Test", typeInput:"text"}];

const conf = {
  component: "iapau-input",
  displayMode: "flex-wrap",
  css: `
    :host {
      align-items: center;
    }
  `,
};

export const Default = makeStory(conf, {
  items: baseItems
});
