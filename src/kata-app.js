import { html, LitElement } from 'lit-element';

import './language-choices.js';

class KataApp extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
    };
  }

  render() {
    return html`
      <p>Kata shaker app !</p>
      <language-choices></language-choices>
    `;
  }
}

customElements.define('kata-app', KataApp);
