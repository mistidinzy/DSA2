'use strict';

let Node = require('../linked-list/node');

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  fromArray(arr) {
    let stack = new Stack();
    for (let i = arr.length - 1; i >= 0; i--) {
      stack.push(arr[i]);
    }
    return stack;
  }

  reverseFromArray(arr) {
    let stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
      stack.push(arr[i]);
    }
    return stack;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  peek() {
    if (!this.top) {
      throw new Error('There is nothing here!');
    } else {
      return this.top.value;
    }
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack is already empty!');
    } else {
      let popped = this.top.value;
      this.top = this.top.next;
      this.count--;
      return popped;
    }
  }

  popUntilEmpty() {
    if (!this.top) {
      throw new Error('Stack is already empty!');
    } else {
      let length = this.count;
      for (let i = 0; i < length; i++) {
        this.pop();
      }
    }
  }

  clear() {
    this.top = null;
    this.count = 0;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let tp = 'T -> ';
    let str = '';
    let current = this.top;
    while (current != null) {
      str += `${current.value}| `;
      current = current.next;
    }
    let strung = (tp += str += '-> N');
    return strung;
  }

  getLast() {
    if (!this.top) {
      throw new Error('This stack is empty!');
    } else {
      let length = this.count;

      for (let i = 0; i < length - 1; i++) {
        this.pop();
      }
      return this.top.value;
    }
  }
}

module.exports = Stack;
