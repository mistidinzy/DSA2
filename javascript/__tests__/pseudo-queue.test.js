'use strict';

let PseudoQueue = require('../stack-and-queue/pseudo-queue');

describe('Pseudo Queue Tests', () => {
  test('It can create an empty Pseudo Queue', () => {
    let pQ = new PseudoQueue();

    expect(pQ.top).toBeNull();
  })
});