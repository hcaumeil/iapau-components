import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum ButtonMode {
  primary = "primary",
  secondary = "secondary",
}

export default class IapauButton extends LitElement {
  @property({ type: ButtonSize })
  size = ButtonSize.MD;

  @property({ type: ButtonMode })
  mode = ButtonMode.primary;

  @property({ type: Boolean })
  borderSolid = false;

  @property({ type: Boolean })
  hoverColors = false;

  @property({ type: Function })
  onclick = () => {};

  _onClick = () => {
    this.onclick();
  };

  static styles = css`
    button {
      display: flex;
      justify-content: center; /* Align horizontal */
      align-items: center;      
      border-radius: 0.5rem;
      border: none;
      transition: 0.6s;
      font-family: var(--iapau-font-family-default);
      font-weight: 600;
    }

    button:hover{
      box-shadow: 0 1px 5px rgb(0 0 0 / 40%);    
    }

    .border_solid {
      border : 3px solid;
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

    .primary {
      color: var(--iapau-color-bg-default);
      background-color: var(--iapau-color-bg-primary);
    }

    .primary_hover:hover {
      color: var(--iapau-color-bg-primary);
      background-color: var(--iapau-color-bg-default);
    }

    .secondary {
      color: var(--iapau-color-bg-primary);
      background-color: var(--iapau-color-bg-default);
    }

    .secondary_hover:hover {
      color: var(--iapau-color-bg-default);
      background-color: var(--iapau-color-bg-primary);
    }
  
  `;

  render() {
    const classes = {
      border_solid: this.borderSolid,
      sm: this.size as ButtonSize === ButtonSize.SM,
      md: this.size as ButtonSize === ButtonSize.MD,
      lg: this.size as ButtonSize === ButtonSize.LG,
      primary: this.mode as ButtonMode == ButtonMode.primary,
      primary_hover: this.mode as ButtonMode == ButtonMode.primary && this.hoverColors,
      secondary: this.mode as ButtonMode == ButtonMode.secondary,
      secondary_hover: this.mode as ButtonMode == ButtonMode.secondary && this.hoverColors,
    };

    return html`
      <button
      @click="${this._onClick}"         
      class=${classMap(classes)}
      >
      <slot/>
      </button>
    `;
  }
}

window.customElements.define("iapau-button", IapauButton);
