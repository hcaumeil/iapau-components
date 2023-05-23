import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "../iapau-link/iapau-link.js";




export default class IapauElementnavbar extends LitElement {
  static styles = css`
    .element {
      line-height: 1;
    }

    .icon, .title {
      display: inline-block;
      vertical-align: middle;
    }
  `;


  @property({ type: String })
  src = "icon";

  @property({ type: Boolean })
  showMenu = true;


  render() {

    const title = this.showMenu ? '' : 'title';

    return html`

      <div class='element'>

        <div class='icon'>
          <img style="width: 1vw" src="${this.src}" alt="Icon">
        </div>

        <div class='title'>
          <iapau-link>
            <slot name='${title}' style="width: 1vw">
            </slot>
          </iapau-link>

        </div>

      </div>
    `;
  }
}

window.customElements.define('iapau-elementnavbar', IapauElementnavbar);


