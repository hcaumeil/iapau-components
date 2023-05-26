import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class IapauSelect extends LitElement {
  static styles = css`
    select {
      border-radius: 15px;
      box-shadow: 0 12px 18px -10px rgba(0, 0, 0, 0.3);
      padding: 16px 20px 16px 16px;
      border: none;
      background-color: #ffffff;
      outline: 0;
    }
  `;


  @property({ type: Array })
  options = [];


  render() {
    return html`
      <select>
        <option value='' hidden> Choix d'option </option>
        ${this.options.map((option) => html`<option>${option}</option>`)}
      </select>
    `;
  }
}

window.customElements.define('iapau-select', IapauSelect);
