import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export default class IapauCard extends LitElement {
  @property({ type: Boolean })
  hoverBorder = false;

  @property({ type: Boolean })
  hoverUpAnimation = false;

  _hoverBorder = () => {
    if (this.hoverBorder) {
      return css`var(--iapau-color-bg-primary) 8px solid`;
    } else {
      return css`none`;
    }
  };

  _hoverUpAnimation = () => {
    if (this.hoverUpAnimation) {
      return css`-10px`;
    } else {
      return css`0px`;
    }
  };

  static styles = css`
    :host {
      width: auto;
      height: auto;
      color: --iapau-color-bg-default;
      box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
      border-radius: 0.5rem;
      transition: 0.4s ease;
      position: relative;
      top: 0;
    }
  `;

  render() {
    return html`
      <style>
        :host(:hover) {
          border-bottom : ${this._hoverBorder()};
          top : ${this._hoverUpAnimation()};
        }
      </style>
      <slot/>
    `;
  }
}

window.customElements.define("iapau-card", IapauCard);
