import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export default class IapauSelect extends LitElement {
  static styles = css`
    select {
      border-radius: 15px;
      color: rgba(0,0,0,0.5);
      box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
      padding: 16px 20px 16px 16px;
      border: none;
      background-color: var(--iapau-color-bg-default);
      font-family: var(--iapau-font-family-default);
      flex: 1;
      outline: 0;
    }  
  `;

  @property({ type: Array })
  options = [];

  @property({ type: String})
  label = "Options"

  @property({ type: Function })
  oninput: (e: any) => void = () => {};

  _onInput(event: any) {
    this.oninput(event.target.value);
  }

  render() {
    return html`
      <div style="margin: 5px; padding: 5px;  display: flex; width: 100%; border-radius: 15px;">
              
      <select @input="${this._onInput}" >
        <option value='' hidden> ${this.label} </option>
        ${this.options.map((option) => html`<option>${option}</option>`)}
      </select>
      </div>
    `;
  }
}

window.customElements.define("iapau-select", IapauSelect);
