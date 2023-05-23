import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";


export default class IapauInput extends LitElement {
  static styles = css`
    input {
      border: none;
      box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
      border-radius: 15px;
      padding: 14px;
      overflow: hidden;
      font-family: var(--iapau-font-family-default);
    }

  `;

  @property({ type: String })
  placeholder = 'texte';

  @property({ type: String })
  typeInput = 'text';

  _onChange = () => {
    this.onchange();
  };

  render() {

    return html`
      <input type=${this.typeInput}
             @change="${this._onChange}"
                placeholder=${this.placeholder}
      />
    `;
  }
}

window.customElements.define('iapau-input', IapauInput);
