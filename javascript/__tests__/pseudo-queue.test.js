'use strict';

let PseudoQueue = require('../stack-and-queue/pseudo-queue');

describe('Pseudo Queue Tests', () => {
  test('It can create an empty Pseudo Queue', () => {
    let pQ = new PseudoQueue();

    expect(pQ.inStack.top).toBeNull();
    expect(pQ.outStack.top).toBeNull();
    expect(pQ.inStack.count).toEqual(0);
    expect(pQ.outStack.count).toEqual(0);
  })
});