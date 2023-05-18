import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';


export default class IapauTextarea extends LitElement {
  static styles = css`
    textarea {
      border: none;
      box-shadow: 0 12px 18px -10px rgba(0,0,0,0.3);
      border-radius: 15px;
      padding: 14px;
      overflow: hidden;
    }
  `;

  @property({ type: Number })
  rows = 1;

  @property({ type: Number })
  cols = 10;

  @property({ type: String })
  placeholder = 'Cliquez ici';

  render() {
    return html`
      <textarea placeholder='${this.placeholder}' rows="${this.rows}" cols="${this.cols}"></textarea>
    `;
  }
}

window.customElements.define('iapau-textarea', IapauTextarea);
