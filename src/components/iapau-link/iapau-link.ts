import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export default class IapauLink extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      color: var(--iapau-color-link);
      transition: color 0.5s;
      font-family: var(--iapau-font-family-link);
      font-size: 0.875rem;
      font-weight: 500;
    }
    a:hover{
      opacity: 0.7;
    }

    .active {
      color: var(--iapau-color-link-active)  
    }
  `;

  @property({ type: String })
  href = ".";

  @property({ type: Boolean })
  newTab = false;

  @property({ type: Boolean })
  active = false;

  target = () => (this.newTab ? "_blank" : "")

  render() {
    const cssClass = {
      active : this.active
    }

    return html`
      <a href='${this.href}' target=${this.target()} class=${classMap(cssClass)}>
        <slot/>
      </a>
    `;
  }
}

window.customElements.define("iapau-link", IapauLink);
