import { html, LitElement } from 'lit-element';

import './language-choice.js';

class LanguageChoices extends LitElement {
  static get properties() {
    return {
      choices: { type: Array },
    };
  }

  constructor() {
    super();
    this.choices = ['javascript', 'java', 'go'];
  }

  render() {
    return html`
      <ul>
        ${this.choices.map(
          i =>
            html`
              <li>
                <language-choice @click="${this.clickHandler}" language="${i}"></language-choice>
              </li>
            `,
        )}
      </ul>
    `;
  }

  clickHandler = ({ target }) => {
    const event = new CustomEvent('language-chosen', {
      detail: target.dataset.language,
    });
    this.dispatchEvent(event);
  };
}

customElements.define('language-choices', LanguageChoices);
