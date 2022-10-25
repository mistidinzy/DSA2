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

    //----- TO-STRING METHOD -----//

  // CC05-07. Can properly return all of the values in the linked list, as a string.
  test('CC05-07: Returns a string containing all values of the linked list.', () => {
    let list = new LinkedList();

    list.insert(5);
    list.insert(4);
    list.insert(3);

    expect(list.toString()).toEqual('{ 3 } -> { 4 } -> { 5 } -> NULL');
  });

  //----- APPEND METHOD -----//

  // CC06-01. Can successfully add a node to the END of the linked list.
  test('CC06-01: Can add a new Node to the END of the list.', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(4);
    list.append(6);

    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(6);
  });

   // CC06-02. Can successfully add multiple nodes to the END of a linked list.
   test('CC06-02: Can add multiple nodes to the END of the list.', () => {
    let list = new LinkedList();

    list.insert(3);
    list.insert(2);
    list.insert(1);

    list.append(6);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(6);
  });

    //----- INSERT-BEFORE METHOD -----//

  // CC06-03. Can successfully insert a node BEFORE the MIDDLE node of a linked list.
  test('CC06-03: Can insert node BEFORE the MIDDLE node in list.', () => {
    let list = new LinkedList().fromArray([1,2,4,5]);
    let mid = list.findMiddle();
    list.insertBefore(mid,3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
  });

   // CC06-04. Can successfully insert a node BEFORE the FIRST node of a linked list.
   test('CC06-04: Can insert new node BEFORE the FIRST node in list.', () => {
    let list = new LinkedList().fromArray([1,2,3]);
    let head = list.head.value;
    list.insertBefore(head, 0);

    expect(list.head.value).toEqual(0);
  });

   //----- INSERT-AFTER METHOD -----//

  // CC06-05. Can successfully insert a node AFTER the middle node of a linked list.
  test('CC06-05: Can insert node AFTER the MIDDLE node in list.', () => {
    let list = new LinkedList().fromArray([1,2,4,5]);
    let mid = list.findMiddle();
    list.insertAfter(mid,3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(4);
    expect(list.head.next.next.next.value).toEqual(3);
  });

    // CC06-06. Can successfully insert a node AFTER the LAST node of the linked list.
    test('CC06-06: Can insert node AFTER the LAST node in list.', () => {
      let list = new LinkedList().fromArray([1,2,3,4,5]);
      let end = list.getLast();
      list.insertAfter(end,6);

      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next.value).toEqual(3);
      expect(list.head.next.next.next.value).toEqual(4);
      expect(list.head.next.next.next.next.value).toEqual(5);
      expect(list.head.next.next.next.next.next.value).toEqual(6);
    });

});
