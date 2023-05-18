import { html, TemplateResult } from 'lit';
import './iapau-textarea';


export default {
  title: '<iapau-textarea>',
  component: 'iapau-textarea',
  argTypes: {
    placeholder: { control: 'text' },
    cols: { control: 'number' },
    rows: { control: 'number' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}


interface ArgTypes {
  placeholder?: string;
  cols?: number;
  rows?: number;

}

const Template: Story<ArgTypes> = ({
  placeholder = 'Test clique',
  cols = 40,
  rows = 1,

  }: ArgTypes) => html`
  <iapau-textarea
    .placeholder=${placeholder}
    .cols=${cols}
    .rows=${rows}
  >
  </iapau-textarea>
`;

export const Basic = Template.bind({});

