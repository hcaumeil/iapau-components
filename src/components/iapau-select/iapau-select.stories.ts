import './iapau-select.js';

import { makeStory } from "../../stories/lib.js";

export default {
  title: '<iapau-select>',
  component: 'iapau-select',
  argTypes: {
    options : {control : 'array'}
  },
};

const baseItems = [{ options: ["option 1", "option 2", "option 3"]}];

const conf = {
  component: "iapau-select",
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
