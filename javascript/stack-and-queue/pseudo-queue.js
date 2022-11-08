"use strict";

const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    this.inbox.push(value);
  }

  dequeue() {
    if (this.inbox.isEmpty() && this.outbox.isEmpty()) {
      throw new Error("The queue is already empty!");
    } else {
      while (!this.inbox.isEmpty()) {
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }
}

module.exports = PseudoQueue;
