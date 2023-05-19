import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class IapauButton extends LitElement {
  static styles = css`
    button {
      display: block;
      padding: 10px;
      border: var(--button-border);
      color: var(--iapau-color-bg-default);
      background-color: var(--iapau-color-bg-primary);
      border-radius: 8px;
      transition: color 0.8s;
      font-family: var(--iapau-font-family-text);
    }

    button:hover{
      color: grey;
    }
  `;

  @property({ type: Boolean })
  borderSolid = true;

  @property({ type: String })
  label = 'Cliquez ici';

  @property({ type: String })
  textColor = '--iapau-color-text-primary';

  @property({ type: String })
  backgroundColor = '--iapau-color-bg-primary';

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
        style="--iapau-color-bg-default: ${this.textColor};
        --iapau-color-bg-primary: ${this.backgroundColor}"
      >
        ${this.label}
      </button>
    `;
  }
}

window.customElements.define('iapau-button', IapauButton);
