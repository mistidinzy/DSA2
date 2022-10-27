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
  });

  // 4. Can successfully ***dequeue*** value out of a queue
  test('CC10-Q.04: Can dequeue a value from the front of the queue.', () => {
    let queue = new Queue();

    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);

    queue.dequeue();

    expect(queue.front.value).toEqual(6);
  });

  // 5. Can successfully ***peek*** into a queue, seeing the expected value
  test('CC10-Q.05: Can get correct value from front of queue with peek().', () => {
    let queue = new Queue();

    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);

    let result = queue.peek();
    expect(result).toEqual(4);
  });

  // 6. Can successfully ***empty*** a queue after multiple ***dequeues***
  test('CC10-Q.06: Can dequeue until empty.', () => {
    let queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);
    queue.enqueue(5);

    queue.dequeueUntilEmpty();

    expect(queue.front).toBeNull();
    expect(queue.length).toEqual(0);
  });

  // 7. Calling dequeue or peek on empty queue raises ***exception***
  test('CC10-Q.07: Calling dequeue or peek on empty queue throws error.', () => {
    let queue = new Queue();

    expect(() => {queue.peek()}).toThrow(Error);

    expect(() => {queue.dequeue()}).toThrow(Error);

    expect(() => {queue.dequeueUntilEmpty()}).toThrow(Error);
  });

  //-----ADDITIONAL TESTS-----//

  test('CC10-Q.08: Correctly updates/returns length of queue.', () => {
    let queue = new Queue();

    queue.enqueue(4);
    expect(queue.length).toEqual(1);

    queue.enqueue(6);
    expect(queue.length).toEqual(2);

    queue.enqueue(8);
    expect(queue.length).toEqual(3);

    queue.dequeue();
    expect(queue.length).toEqual(2);

    queue.dequeue();
    expect(queue.length).toEqual(1);
  });

  test('CC10-Q.09: Can clear current queue.', () => {
    let queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);
    queue.enqueue(5);

    queue.clear();

    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue.length).toEqual(0);

    queue.enqueue(8);

    expect(queue.front.value).toEqual(8);
  });

  test('CC10-Q.10: isEmpty returns TRUE if queue IS empty.', () => {

  });

  test('CC10-Q.11: isEmpty returns FALSE if queue is NOT empty.', () => {

  });
})
