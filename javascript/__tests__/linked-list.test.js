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

  // CC05-04. Can properly insert multiple nodes into the linked list.
  test('CC05-04: Can add multiple nodes into a linked list.', () => {
    let newList = new LinkedList();

    newList.insert(1);
    expect(newList.head.value).toEqual(1);

    newList.insert(2);
    expect(newList.head.next.value).toEqual(1);

    newList.insert(3);
    expect(newList.head.next.next.value).toEqual(1);

    expect(newList.head.value).toEqual(3);
    expect(newList.head.next.value).toEqual(2);
  });

   // CC05-05. Can confirm if a value is found within the linked list.
   test('CC05-05: Will return TRUE if value exists within the list.', () => {
    let newList = new LinkedList();

    newList.insert(2);
    newList.insert(4);
    newList.insert(6);

    let result = newList.includes(4);

    expect(result).toEqual(true);
  });

    // CC05-06. Will return FALSE when searching for a value in the linked list that does not exist.
    test('CC05-06: Will return FALSE if value does not exist within the list.', () => {
      let newList = new LinkedList();
      newList.insert(2);
      newList.insert(4);
      newList.insert(6);
      let result = newList.includes(7);
      expect(result).toEqual(false);
    });
});
