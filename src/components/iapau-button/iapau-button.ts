import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class IapauButton extends LitElement {
  static styles = css`
    button {
      display: block;
      padding: 10px;
      border: var(--button-border);
      color: var(--button-text-color, #000);
      background-color: var(--button-background-color, #fff);
      border-radius: 8px;
    }
  `;

  @property({ type: Boolean })
  borderSolid = true;

  @property({ type: String })
  label = 'Cliquez ici';

  @property({ type: String })
  textColor = '#000';

  @property({ type: String })
  backgroundColor = '#000';

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('borderSolid')) {
      this.style.setProperty(
        '--button-border',
        this.borderSolid ? '1px solid' : 'none'
      );
    }
  }

  render() {
    return html`
      <button
        style="--button-text-color: ${this.textColor};
        --button-background-color: ${this.backgroundColor}"
      >
        ${this.label}
      </button>
    `;
  }
}

window.customElements.define('iapau-button', IapauButton);
