/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';

import '../src/language-choice.js';

describe('Language choice', () => {
  let element;

  beforeEach(async () => {
    element = await fixture('<language-choice language="foo"></language-choice>');
  });

  it('have choice attribute', async () => {
    expect(element.language).to.eql('foo');
  });

  it('display button with language', async () => {
    expect(element).shadowDom.to.equal(`
    <button>foo</button>
    `);
  });
});
