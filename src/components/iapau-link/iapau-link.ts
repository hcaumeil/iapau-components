import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class IapauLink extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      color: var(--cc-color-text-primary);
      transition: color 0.5s;
      font-family: var(--cc-font-family-text);
    }
    a:hover{
      color: grey;
    }
  `;

  @property({ type: String })
  textColor = '--cc-color-bg-default';

  @property({ type: String })
  href = 'Cliquez ici';

  @property({ type: String })
  label = 'Cliquez ici';


  render() {
    return html`
      <a href='${this.href}' style="--cc-color-bg-default: ${this.textColor}">
        ${this.label}
      </a>
    `;
  }
}

window.customElements.define('iapau-link', IapauLink);
