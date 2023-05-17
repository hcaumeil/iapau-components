import { html, TemplateResult } from 'lit';
import './iapau-button.js';

export default {
  title: '<iapau-button>',
  component: 'iapau-button',
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderSolid: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  borderSolid?: boolean;
}

const Template: Story<ArgTypes> = ({
  title = 'Test clique',
  backgroundColor,
  textColor,
  borderSolid,
}: ArgTypes) => html`
  <iapau-button
    .label=${title}
    .textColor=${textColor}
    .backgroundColor=${backgroundColor}
    .borderSolid="${borderSolid}"
  >
  </iapau-button>
`;

export const Basic = Template.bind({});
