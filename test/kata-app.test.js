/* eslint-disable no-unused-expressions */
import { fixture, expect } from '@open-wc/testing';

import '../src/kata-app.js';

describe('Kata app', () => {
  it('display app name !', async () => {
    const el = await fixture('<kata-app></kata-app>');
    expect(el).shadowDom.to.equal(`<p>Kata shaker app !</p>`);
  });
});
