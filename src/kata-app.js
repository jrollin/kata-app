import { html, LitElement } from 'lit-element';

class KataApp extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
    };
  }

  render() {
    return html`
      <p>Kata shaker app !</p>
    `;
  }
}

customElements.define('kata-app', KataApp);
