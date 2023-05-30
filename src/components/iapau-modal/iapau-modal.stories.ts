import "./iapau-modal.js";
import { makeStory } from '../../stories/lib.js';

export default {
  title: "iapau-modal",
  component: "iapau-modal",
  argTypes: {
    title: { control: "text" },
  },
};

const conf = {
  component: "iapau-modal",
  displayMode: "flex-wrap",
  css: `
    :host {
      align-items: center;
    }
  `,
};

const baseItems = [{ title: "Test"}];

export const Default = makeStory(conf, {
  items: baseItems
});

