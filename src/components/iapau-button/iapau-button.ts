import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class IapauButton extends LitElement {
  static styles = css`
    button {
      display: block;
      padding: 10px;
      border: var(--button-border);
      color: var(--cc-color-bg-default);
      background-color: var(--cc-color-bg-primary);
      border-radius: 8px;
    }
  `;

  @property({ type: Boolean })
  borderSolid = true;

  @property({ type: String })
  label = 'Cliquez ici';

  @property({ type: String })
  textColor = '--cc-color-bg-default';

  @property({ type: String })
  backgroundColor = '--cc-color-bg-primary';

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
        style="--cc-color-bg-default: ${this.textColor};
        --cc-color-bg-primary: ${this.backgroundColor}"
      >
        ${this.label}
      </button>
    `;
  }
}

window.customElements.define('iapau-button', IapauButton);
