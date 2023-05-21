import { makeStory } from "../../stories/lib.js";
import "./iapau-card.js"

export default {
  title: "<iapau-card>",
  component: "iapau-card",
  argTypes: {
    hoverBorder: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    hoverUpAnimation: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

const conf = {
  component: "iapau-card",
  css: `
    iapau-card {
      padding: 10px;
    }
  `,
};

export const Default = makeStory(conf, {
  items: [{ innerHTML: "A nice card !" }],
});

export const hover_border = makeStory(conf, {
  items: [{ innerHTML: "A nice card !", hoverBorder: true }],
});

export const hover_up_animation = makeStory(conf, {
  items: [{ innerHTML: "A nice animated card !", hoverUpAnimation: true }],
});