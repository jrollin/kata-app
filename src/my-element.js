import {html, LitElement, property} from 'lit-element';

class MyElement extends LitElement {
  @property({type: String}) myProp = '@todo';
  render() {
    return html`
      <p>Hello Kata</p>
      ${this.myProp}
    `;
  }
}

customElements.define('my-element', MyElement);
