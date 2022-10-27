'use strict';

// let Node = require('../linked-list/node');

class Stack {
  constructor(){
    this.top = null;
    this.count = 0;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }
}

module.exports = Stack;
