import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class IapauLink extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      color: var(--iapau-color-text-primary);
      transition: color 0.5s;
      font-family: var(--iapau-font-family-text);
    }
    a:hover{
      color: grey;
    }
  `;

  @property({ type: String })
  textColor = '--iapau-color-bg-default';

  @property({ type: String })
  href = 'Cliquez ici';

  @property({ type: String })
  label = 'Cliquez ici';


  render() {
    return html`
      <a href='${this.href}' style="--iapau-color-bg-default: ${this.textColor}">
        ${this.label}
      </a>
    `;
  }
}

window.customElements.define('iapau-link', IapauLink);
