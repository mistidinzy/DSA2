"use strict";

let PseudoQueue = require("../stack-and-queue/pseudo-queue");

describe("Pseudo Queue Tests", () => {
  test("CC11-01: It can create an empty Pseudo Queue.", () => {
    let pQ = new PseudoQueue();

    expect(pQ.inbox.top).toBeNull();
    expect(pQ.outbox.top).toBeNull();
    expect(pQ.inbox.count).toEqual(0);
    expect(pQ.outbox.count).toEqual(0);
  });

  test('CC11-02: PseudoQueue can "enqueue" a value.', () => {
    let pQ = new PseudoQueue();
    pQ.enqueue(2);
    expect(pQ.inbox.top.value).toEqual(2);
  });

  test('CC11-03: "dequeue" on empty PseudoQueue will throw error.', () => {
    let pseudoQ = new PseudoQueue();
    expect(() => {
      pseudoQ.dequeue();
    }).toThrow(Error);
  });

  test('CC11-04: PseudoQueue can "dequeue" a value.', () => {
    let pseudoQ = new PseudoQueue();

    pseudoQ.enqueue(1);
    pseudoQ.enqueue(2);
    pseudoQ.enqueue(3);

    console.log(pseudoQ);

    let result = pseudoQ.dequeue();

    console.log(pseudoQ);
    console.log(result);
  });
});
