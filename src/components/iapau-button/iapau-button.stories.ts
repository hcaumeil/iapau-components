import { html, TemplateResult } from "lit";
import "./iapau-button.js";

import type { Story } from "../../stories/lib.js";

export default {
  title: "<iapau-button>",
  component: "iapau-button",
  argTypes: {
    title: { control: "text" },
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
    borderSolid: { control: "boolean" },
  },
};

interface ArgTypes {
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  borderSolid?: boolean;
}

const Template: Story<ArgTypes> = ({
  title = "Test clique",
  backgroundColor = "rgba(14, 135, 105, 1)",
  textColor = "rgba(255, 255, 255, 1)",
  borderSolid,
}: ArgTypes) =>
  html`
  <iapau-button
    .label=${title}
    .textColor=${textColor}
    .backgroundColor=${backgroundColor}
    .borderSolid="${borderSolid}"
  >
  </iapau-button>
`;

export const Basic = Template.bind({});
