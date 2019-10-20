/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';

import '../src/language-choices.js';

describe('Language choices', () => {
  let element;

  beforeEach(async () => {
    element = await fixture('<language-choices></language-choices>');
  });

  afterEach(() => {});

  it('init with default languages', async () => {
    expect(element.choices).to.eql(['javascript', 'java', 'go']);
  });

  it('display list of languages', async () => {
    expect(element).shadowDom.to.equal(`
    <ul>
      <li><language-choice language="javascript"></language-choice></li>
      <li><language-choice language="java"></language-choice></li>
      <li><language-choice language="go"></language-choice></li>
    </ul>
    `);
  });

  it('dispatches a custom event on click language', async done => {
    element.addEventListener('language-chosen', event => {
      expect(event.detail).to.eq('foo');
      done();
    });
    element.clickHandler({ target: { dataset: { language: 'foo' } } });
  });
});
