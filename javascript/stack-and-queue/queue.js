"use strict";

let Node = require("../linked-list/node");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
    this.length = this.length + 1;
  }

  dequeue() {
    if (!this.front) {
      throw new Error("Queue is already empty!");
    } else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;

      this.length = this.length - 1;
      return temp;
    }
  }

  dequeueUntilEmpty() {
    if (!this.front) {
      throw new Error("Queue is already empty!");
    } else {
      let count = this.length;
      for (let i = 0; i < count; i++) {
        this.dequeue();
      }
    }
  }

  clear() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  qToString() {
    if (!this.front) {
      return 'This queue is empty.';
    } else {
      let bk = "NULL <- (BACK)";
      let fr = "(FRONT)";
      let arr = [];
      let current = this.front;

      for (let i = 0; i < this.length; i++) {
        arr.push(current.value);
        current = current.next;
      }

      arr.reverse();
      let strung = arr.join(" <- ");

      let final = `${bk} ${strung} ${fr}`;
      return final;
    }
  }
}

module.exports = Queue;
