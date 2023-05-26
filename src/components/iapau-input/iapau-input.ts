import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";


export default class IapauInput extends LitElement {
  _onChange = () => {
    this.onChange();
  };

  static styles = css`
    input {
      border: none;
      box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
      border-radius: 15px;
      padding: 14px;
      overflow: hidden;
      font-family: var(--iapau-font-family-default);
      flex: 1;
    }

    .red {
     border : 1px solid red;
    }

    p {
      font-size: 0.875rem;
      font-family: var(--iapau-font-family-default);
      margin : 5px 15px;
    }
  `;

  @property({ type: String })
  label = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  error = "";

  @property({ type: String })
  typeInput = "text";

  @property({ type: Function })
  onChange = () => {};

  _label() {
    if (this.label) {
      return html`
      <p>${this.label}</p>
    `;
    } else {
      return html``;
    }
  }

  _error() {
    if (this.error) {
      return html`
      <p style="color: red;">${this.error}</p>
    `;
    } else {
      return html``;
    }
  }

  render() {
    const classes = {
      red: this.error
    }

    
    return html`
      ${this._label()}
      <div style="margin: 5px; padding: 5px;  display: flex; width: 100%; border-radius: 15px;" class=${classMap(classes)}>
      <input type=${this.typeInput}
             @change="${this._onChange}"
                placeholder=${this.placeholder}
      />
      </div>
      ${this._error()}
    `;
  }
}

window.customElements.define("iapau-input", IapauInput);
