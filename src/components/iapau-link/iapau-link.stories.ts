import "./iapau-link.js";
import { makeStory } from "../../stories/lib.js";

export default {
  title: "<iapau-link>",
  component: "iapau-link",
  argTypes: {
    href: {
      control: "text",
      table: {
        defaultValue: { summary: "." },
      },
    },
    newTab: {
      control: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    active: {
      control: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

const baseItems = [{ innerHTML: "Link", href: "." }];

const conf = {
  component: "iapau-link",
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

export const active = makeStory(conf, {
  docs: `Draws the user's eye to the active nature of this link`,
  items: baseItems.map((e) => ({ ...e, active: true })),
});

export const newTab = makeStory(conf, {
  docs: `Open link in a new tab`,
  items: baseItems.map((e) => ({ ...e, newTab: true })),
});
