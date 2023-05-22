import { css, html, LitElement } from 'lit';



export default class IapauPassword extends LitElement {
  static styles = css`
    input {
      border: none;
      box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
      border-radius: 15px;
      padding: 14px;
      overflow: hidden;
      font-family: var(--iapau-font-family-default);
      resize: none;
    }
    ` ;

      render() {

      return html`
    <input type="password" placeholder='Mot de passe'></input>
`;
  }
}

window.customElements.define('iapau-password', IapauPassword);
