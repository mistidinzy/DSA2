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

   // 4. Can successfully ***pop*** off the stack
  test('CC10-S.04: Can successfully pop values off of the stack.', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let result = stack.pop();

    expect(result).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);

    stack.push(7);
    stack.push(8);

    let result2 = stack.pop();
    expect(result2).toEqual(8);
  });

   // 5. Can successfully ***empty*** a stack after multiple ***pops***
   test('CC10-S.05: Can empty a stack after multiple pops.', () => {
    let stack = new Stack().fromArray([5,4,3,2,1]);

    stack.popUntilEmpty();

    let result = stack.toString();

    expect(result).toEqual('T -> -> N');
    expect(stack.top).toBeNull();

    expect(() => {stack.popUntilEmpty()}).toThrow(Error);
  });

  // 6. Can successfully ***peek*** at the top of the stack.
  test('CC10-S.06: Peek returns value at top of the stack.', () => {
    let stack = new Stack().fromArray([0,9,8,7,6]);
    let result = stack.peek();
    expect(result).toEqual(stack.top.value);
    expect(result).toEqual(0);

    stack.clear();
    expect(() => {stack.peek()}).toThrow(Error);
  });

  // 7. Calling pop or peek on empty stack raises ***exception***
  test('CC10-S.07: Throws error if stack is already empty.', () => {
    let stack = new Stack();
    expect(() => {stack.pop()}).toThrow(Error);
  });

  //-----ADDITIONAL TESTS-----//

  test('CC10-S.08: isEmpty returns true if stack is empty.', () => {
    let stack = new Stack().fromArray([3,4,5,6]);

    let result = stack.isEmpty();
    expect(result).toBeFalsy();

    stack.clear();
    let result2 = stack.isEmpty();
    expect(result2).toBeTruthy();
  });


})
