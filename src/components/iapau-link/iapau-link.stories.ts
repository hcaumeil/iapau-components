import { html, TemplateResult } from 'lit';
import './iapau-link.js';

import type { Story } from "../../stories/lib.js";

export default {
  title: '<iapau-link>',
  component: 'iapau-link',
  argTypes: {
    href: { control: 'text' },
    textColor: { control: 'color' },
    title: { control: 'text' },
  },
};

interface ArgTypes {
  href?: string;
  title?: string;
  textColor?: string;
}

const Template: Story<ArgTypes> = ({
  href = 'Test clique',
  title = 'Test clique',
  textColor ='black'
  }: ArgTypes) => html`
  <iapau-link
    .href=${href}
    .label=${title}
    .textColor=${textColor}
  >

  </iapau-link>
`;

export const Basic = Template.bind({});
