import { html, LitElement } from 'lit-element';

class LanguageChoice extends LitElement {
  static get properties() {
    return {
      language: { type: String },
    };
  }

  render() {
    return html`
      <button>${this.language}</button>
    `;
  }
}

customElements.define('language-choice', LanguageChoice);
