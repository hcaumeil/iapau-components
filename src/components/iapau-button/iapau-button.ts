import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export default class IapauButton extends LitElement {
  @property({ type: ButtonSize })
  size = ButtonSize.MD;

  @property({ type: Boolean })
  borderSolid = false;

  @property({ type: Function })
  onClick = () => {};

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("borderSolid")) {
      this.style.setProperty(
        "--button-border",
        this.borderSolid ? "1px solid" : "none",
      );
    }
  }

  _onClick = () => {
    this.onClick();
  };

  static styles = css`
    button {
      display: flex;
      justify-content: center; /* Align horizontal */
      align-items: center;      
      border: var(--button-border);
      color: var(--iapau-color-bg-default);
      background-color: var(--iapau-color-bg-primary);
      border-radius: 0.5rem;
      transition: color 0.8s;
      font-family: var(--iapau-font-family-default);
      font-weight: 600;
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

    .lg {
      font-size: 1.125rem;
      min-height: 3rem;
      height: 3rem;
      padding: .5rem 1.5rem;
    }
  `;

  render() {
    const size = {
      sm: this.size as ButtonSize === ButtonSize.SM,
      md: this.size as ButtonSize === ButtonSize.MD,
      lg: this.size as ButtonSize === ButtonSize.LG,
    };
    console.log(this.size as ButtonSize === ButtonSize.MD);

    return html`
      <button
      @click="${this._onClick}"         
      class=${classMap(size)}
      >
      <slot/>
      </button>
    `;
  }
}

window.customElements.define("iapau-button", IapauButton);
