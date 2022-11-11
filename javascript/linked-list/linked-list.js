'use strict';

let Node = require('./node');
let Stack = require('../stack-and-queue/stack');

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Creates a new LinkedList from an array, in SAME index order as array.
  fromArray(arr) {
    let previous = null;

    for (let i = arr.length - 1; i >= 0; i--) {
      let value = arr[i];
      let node = new Node(value);
      node.next = previous;
      previous = node;
    }

    let list = new LinkedList();
    list.head = previous;
    return list;
  }

  //Creates a new LinkedList from an array, in REVERSE index order as array.
  reverseFromArray(arr) {
    let list = new LinkedList();

    for (let i = 0; i < arr.length; i++) {
      list.insert(arr[i]);
    }
    return list;
  }

  //Inserts a new node to the FRONT(HEAD) of the list.
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  //Returns the total number of nodes present in the list.
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
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

  //Counts the number of times a specific value occurs within the list.
  occurrences(valueToCount) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.value === valueToCount) count++;
      current = current.next;
    }
    return count;
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

  //Deletes a node from the list
  delete(value) {
    if (this.head.value === value) {
      let temp = this.head;
      this.head = this.head.next;
      return temp.value;
    }

    let current = this.head;

    while (current.next.value !== value) {
      current = current.next;
    }

    let temp = current.next;
    current.next = current.next.next;
    return temp.value;
  }

  //Empties out the list.
  clear() {
    this.head = null;
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

  //Finds the first occurence of a given value, and adds the new value immediately AFTER it.
  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is empty!');
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }
  }

  findMiddle() {
    if (!this.head) {
      return new Error('Linked List is empty!');
    } else {
      let slowPointer = this.head;
      let fastPointer = this.head;

      while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
      }
      return slowPointer.value;
    }
  }

  //Returns the value of the last node in the list.
  getLast() {
    if (!this.head) {
      throw new Error('Linked List is empty!');
    } else {
      let current = this.head;

      while (current) {
        if (!current.next) {
          return current.value;
        }
        current = current.next;
      }
    }
  }

  kthFromEnd(k) {
    if (!this.head) {
      throw new Error('Linked List is empty!');
    }

    if (this.size() < k) {
      throw new Error('Given value is larger than list!');
    }

    if (this.size() === k) {
      return this.head.value;
    }

    if (k < 0) {
      throw new Error('Please provide a positive number!');
    }

    let first = this.head;
    let second = this.head;

    for (let i = 0; i < k; i++) {
      first = first.next;
    }

    while (first.next) {
      first = first.next;
      second = second.next;
    }
    return second.next.value;
  }

  getNth(n) {
    let current = this.head;

    for (let i = 0; i < n + 1; i++) {
      current = current.next;
    }
    return current.value;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  traverse() {
    let current = this.head;

    while (current) {
      current = current.next;
    }
  }

  toStack() {
    let stack = new Stack();

    let current = this.head;

    while (current) {
      stack.push(current.value);
      current = current.next;
    }
    return stack;
  }

  isPalindrome() {
    let stack = this.toStack();
    let current = this.head;
    let pal = true;

    while (current && pal == true) {
      if (current.value == stack.pop()) {
        pal = true;
        current = current.next;
      } else {
        pal = false;
        break;
      }
    }
    return pal;
  }
}

module.exports = LinkedList;
