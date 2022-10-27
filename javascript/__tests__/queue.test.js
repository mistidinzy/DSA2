'use strict';

let Queue = require('../stack-and-queue/queue')

describe('Queue Tests', () => {
  // 1. Can successfully instantiate an ***empty*** queue
  test('CC10-Q.01: Can instantiate an empty queue.', () => {
    let queue = new Queue();
    expect(queue.back).toBeNull();
    expect(queue.front).toBeNull();
    expect(queue.length).toEqual(0);
  });
})
