import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export enum Size {
  SM = "sm",
  MD = "md",
  LG = "LG",
}

export default class IapauButton extends LitElement {
  @property({ type: Size })
  size = Size.MD;

  @property({ type: Boolean })
  borderSolid = false;

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("borderSolid")) {
      this.style.setProperty(
        "--button-border",
        this.borderSolid ? "1px solid" : "none",
      );
    }
  }

  static styles = css`
    button {
      display: flex;
      justify-content: center; /* Align horizontal */
      align-items: center;      border: var(--button-border);
      color: var(--iapau-color-bg-default);
      background-color: var(--iapau-color-bg-primary);
      border-radius: 0.5rem;
      transition: color 0.8s;
      font-family: var(--iapau-font-family-text);
      font-weight: bold;
    }

    button:hover{
      box-shadow: 0 1px 5px rgb(0 0 0 / 40%);    
    }

    .sm {
      font-size: .875rem;      
      min-height: 2rem; 
      height: 2rem; 
      padding: .25rem .75rem;    
    }

    .md {
      font-size: 1rem;      
      min-height: 2.5rem; 
      height: 2.5rem; 
      padding: .5rem 1.25rem;
    }
  `;

  render() {
    const size = {
      sm: this.size as Size === Size.SM,
      md: this.size as Size === Size.MD,
    };
    console.log(this.size as Size === Size.MD);

    return html`
      <button
        class=${classMap(size)}
      >
        <slot/>
      </button>
    `;
  }
}

window.customElements.define("iapau-button", IapauButton);
