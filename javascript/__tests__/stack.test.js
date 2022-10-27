'use strict';

let Stack = require('../stack-and-queue/stack');

describe('Stack Tests', () => {
  // 1. Can successfully instantiate an ***empty*** stack
  test('CC10-S.01: Can successfully instantiate an empty stack.', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack.count).toEqual(0);
  });
})
