import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "../iapau-link/iapau-link.js";
import { classMap } from "lit/directives/class-map.js";




export default class IapauElementnavbar extends LitElement {

  @property({ type: String })
  src = "icon";

  @property({ type: Boolean })
  showMenu = false;


  static styles = css`
    .element {
      line-height: 1;
    }

    .icon {
      display: inline-block;
      vertical-align: middle;
    }

    .title{
      display: none;
    }

    .show_menu{
      display: inline-block;
      vertical-align: middle;
    }


  `;

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
            <slot style="width: 1vw">
            </slot>
          </iapau-link>

        </div>

      </div>
    `;
  }
}

window.customElements.define('iapau-elementnavbar', IapauElementnavbar);


