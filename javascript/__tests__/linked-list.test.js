'use strict';

let Node = require('../linked-list/node');

describe('Node Test', () => {
  test('Can create a new node.', () => {
    let node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
});

let LinkedList = require('../linked-list/index');

describe('LinkedList Tests', () => {
  //----- CREATING A LINKED LIST -----//

  // CC05-01. Can successfully instantiate an EMPTY linked list.
  test('CC05-01: Can instantiate a new, empty Linked List.', () => {
    let newList = new LinkedList();

    expect(newList.head).toBeNull();
  });

  //----- INSERT METHOD -----//

  // CC05-02. Can properly insert a node into the linked list.
  test('CC05-02: Can insert a new Node into the Linked List, at the front.', () => {
    let newList = new LinkedList();

    newList.insert(5);

    expect(newList.head.value).toEqual(5);
  });

  // CC05-03. The head property will properly point to the FIRST node in the linked list.
  test('CC05-03: Correctly defines the Head property as the first node in the list.', () => {
    let newList = new LinkedList();

    newList.insert(1);
    expect(newList.head.value).toEqual(1);

    newList.insert(4);
    expect(newList.head.next.value).toEqual(1);
    expect(newList.head.value).toEqual(4);
  });
});
