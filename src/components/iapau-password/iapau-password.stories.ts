import "./iapau-password.js";
import { makeStory } from "../../stories/lib.js";



export default {
  title: "<iapau-password>",
  component: "iapau-password",
};

const conf = {
  component: "iapau-password",
  displayMode: "flex-wrap",
  css: `
    :host {
      align-items: center;
    }
  `,
};

export const Default = makeStory(conf);
