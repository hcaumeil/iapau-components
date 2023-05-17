import { html, TemplateResult } from 'lit';
import './button.js';

export default {
  title: '<button>',
  component: 'button',
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderSolid : {control : 'boolean'}
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
  title ='Test clique',
  backgroundColor,
  textColor,
  borderSolid,
}: ArgTypes) => html`

  <custom-button
    .label=${title}
    .textColor=${textColor}
    .backgroundColor=${backgroundColor}
    .borderSolid='${borderSolid}'>

  </custom-button>
`;

export const Basic = Template.bind({});
