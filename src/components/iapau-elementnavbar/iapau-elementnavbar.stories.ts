import "./iapau-elementnavbar.js";
import { makeStory } from "../../stories/lib.js";


export default {
  title: "<iapau-elementnavbar>",
  component: "iapau-elementnavbar",
  argTypes: {
    showMenu: {
      control: "boolean",
      table: {
        defaultValue: { summary: true },
      },
    },

    src: {
      control: "text",
      table: {
        defaultValue: { summary: "." },
      },
    },

  },
};

const baseItems = [{ innerHTML: "Link", src: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png" }];

const conf = {
  component: "iapau-elementnavbar",
  displayMode: "flex-wrap",
  css: `
    :host {
      align-items: center;
    }
  `,
};

export const Default = makeStory(conf, {
  items: baseItems.map((e) => ({...e , showMenu:true})),
});
