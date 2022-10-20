'use strict';

let Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Inserts a new node to the FRONT(HEAD) of the list.
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
}

module.exports = LinkedList;
