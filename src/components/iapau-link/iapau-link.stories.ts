import { html, TemplateResult } from 'lit';
import './iapau-link.js';

export default {
  title: '<iapau-link>',
  component: 'iapau-link',
  argTypes: {
    href: { control: 'text' },
    textColor: { control: 'color' },
    title: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}


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
