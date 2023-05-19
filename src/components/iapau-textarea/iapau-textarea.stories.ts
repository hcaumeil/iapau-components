import { html, TemplateResult } from "lit";
import "./iapau-textarea";

import type { Story } from "../../stories/lib.js";

export default {
  title: "<iapau-textarea>",
  component: "iapau-textarea",
  argTypes: {
    placeholder: { control: "text" },
    cols: { control: "number" },
    rows: { control: "number" },
  },
};

interface ArgTypes {
  placeholder?: string;
  cols?: number;
  rows?: number;
}

const Template: Story<ArgTypes> = ({
  placeholder = "Test clique",
  cols = 40,
  rows = 1,
}: ArgTypes) =>
  html`
  <iapau-textarea
    .placeholder=${placeholder}
    .cols=${cols}
    .rows=${rows}
  >
  </iapau-textarea>
`;

export const Basic = Template.bind({});
