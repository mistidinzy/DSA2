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

  // 3. Can successfully ***enqueue multiple*** values into a queue
  test('CC10-Q.03: Can enqueue multiple values.', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);
  })

  // 4. Can successfully ***dequeue*** value out of a queue

  // 5. Can successfully ***peek*** into a queue, seeing the expected value

  // 6. Can successfully ***empty*** a queue after multiple ***dequeues***

  // 7. Calling dequeue or peek on empty queue raises ***exception***

  //-----ADDITIONAL TESTS-----//
})
