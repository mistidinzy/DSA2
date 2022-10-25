'use strict';

let Node = require('./node')

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




}

module.exports = LinkedList;
