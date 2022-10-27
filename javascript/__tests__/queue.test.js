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

  // 2. Can successfully ***enqueue*** into a queue
  test('CC10-Q.02: Can enqueue a value into the queue.', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(1);
    expect(queue.back.next).toBeNull();

    queue.enqueue(3);
    expect(queue.back.value).toEqual(3);
    expect(queue.front.value).toEqual(1);
  });
})
