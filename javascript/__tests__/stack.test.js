'use strict';

let Stack = require('../stack-and-queue/stack');

describe('Stack Tests', () => {
  // 1. Can successfully instantiate an ***empty*** stack
  test('CC10-S.01: Can successfully instantiate an empty stack.', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack.count).toEqual(0);
  });

  // 2. Can successfully ***push*** onto a stack
  test('CC10-S.02: Can push onto a stack.', () => {
    let stack = new Stack();
    stack.push(2);
    let result = stack.top.value;
    expect(result).toEqual(2);
  });

   // 3. Can successfully ***push multiple*** values onto a stack
   test('CC10-S.03: Can push multiple values onto a stack.', () => {
    let stack = new Stack();
    stack.push(5);
    expect(stack.top.value).toEqual(5);
   });
})
