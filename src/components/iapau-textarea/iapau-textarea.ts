import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from "lit/directives/class-map.js";


export default class IapauTextarea extends LitElement {
  static styles = css`
    textarea {
      border: none;
      box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
      border-radius: 15px;
      padding: 14px;
      overflow: hidden;
      font-family: var(--iapau-font-family-default);
      resize: none;
    }

    .textarea_resizable{
      resize: both;
    }
  `;

  @property({ type: Number })
  rows = 1;

  @property({ type: Number })
  cols = 10;

  @property({ type: String })
  placeholder = 'Cliquez ici';

  @property({ type: Boolean })
  resize = false;

  @property({ type: Function })
  oninput: (e: any) => void = () => {};

  _onInput(event: any) {
    this.oninput(event.target.value);
  }

  render() {
    const classes = {
      textarea_resizable :this.resize,
    };

    return html`
      <textarea
                placeholder='${this.placeholder}'
                rows="${this.rows}"
                cols="${this.cols}"
                @input="${this._onInput}"
                class=${classMap(classes)}
      ></textarea>
    `;
  }
}

window.customElements.define('iapau-textarea', IapauTextarea);
