'use strict';

let PseudoQueue = require('../stack-and-queue/pseudo-queue');

describe('Pseudo Queue Tests', () => {
  test('CC11-01: It can create an empty Pseudo Queue', () => {
    let pQ = new PseudoQueue();

    expect(pQ.inStack.top).toBeNull();
    expect(pQ.outStack.top).toBeNull();
    expect(pQ.inStack.count).toEqual(0);
    expect(pQ.outStack.count).toEqual(0);
  });

  test('CC11-02: PseudoQueue can "enqueue" a value', () => {
    let pQ = new PseudoQueue();
    pQ.enqueue(2);

    expect(pQ.inStack.top.value).toEqual(2);
  })
});