import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";



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


  render() {
    return html`

      <div class='element'>

        <div class='icon'>
            <img style="width: 1vw" src="${this.src}" alt="Icon">
        </div>

        <div class='title'>
            <slot name='title' style="width: 1vw" >
            </slot>
        </div>

      </div>
    `;
  }
}

window.customElements.define('iapau-elementnavbar', IapauElementnavbar);


