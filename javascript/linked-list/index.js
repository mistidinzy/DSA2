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

  //Indicates whether or not a specified value exists somewhere within the list.
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //Returns list values as a string.
  toString() {
    let str = '';
    let current = this.head;
    while (current !== null) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }

  //Inserts a new node to the END of the list.
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

   //Finds the first occurence of a given value, and adds the new value immediately BEFORE it.
   insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is Empty!');
    }

    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while (current) {
      if (current.next && current.next.value === value) {
        let newNode = new Node(newValue);

        newNode.next = current.next;
        current.next = newNode;

        current = current.next.next;
      } else {
        current = current.next;
      }
    }
  }




}

module.exports = LinkedList;
