import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export default class IapauModal extends LitElement {
  static styles = css`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
    }

    .hidden {
      display: none;
    }
  `;

  @property({ type: Boolean })
  isOpen = false;

  @property({ type: Boolean })
  modalB = false;

  @property({ type: String })
  title = "test";

  @property({ type: Function })
  oninput: (e: any) => void = () => {};

  _onInput(event: any) {
    this.oninput(event.target.value);
  }

  render() {
    const cssClass = {
      modal: this.modalB,
      hidden: !this.modalB,
    };

    return html`
      <div class=${classMap(cssClass)}>
        <div class="modal-content">
          <h2>${this.title}</h2>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("iapau-modal", IapauModal);
