import { html, TemplateResult } from 'lit';
import './iapau-select.js';

import type { Story } from "../../stories/lib.js";

export default {
  title: '<iapau-select>',
  component: 'iapau-select',
  argTypes: {
    options : {control : 'array'}
  },
};

interface ArgTypes {
  options?: object;
}


const Template: Story<ArgTypes> = ({options}) => html`
  <iapau-select .options=${options}></iapau-select>
`;

export const Basic = Template.bind({});
Basic.args = {
  options: ["option1", "option2", "option3"],
};


