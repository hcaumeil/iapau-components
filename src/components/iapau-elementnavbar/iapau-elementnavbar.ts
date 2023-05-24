import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "../iapau-link/iapau-link.js";
import { classMap } from "lit/directives/class-map.js";




export default class IapauElementnavbar extends LitElement {
  static styles = css`
    .element {
      line-height: 1;
    }

    .icon, .title {
      display: inline-block;
      vertical-align: middle;
    }

    .show_menu{
      display: none;
    }
  `;


  @property({ type: String })
  src = "icon";

  @property({ type: Boolean })
  showMenu = false;


  render() {
    const classes = {
      show_menu : this.showMenu
    }

    return html`

      <div class='element'>

        <div class='icon'>
          <img style="width: 1vw" src="${this.src}" alt="Icon">
        </div>

        <div class='title ${classMap(classes)}'>
          <iapau-link>
            <slot class  style="width: 1vw">
            </slot>
          </iapau-link>

        </div>

      </div>
    `;
  }
}

window.customElements.define('iapau-elementnavbar', IapauElementnavbar);


