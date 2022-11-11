'use strict';

let Node = require('../linked-list/node');

describe('Node Test', () => {
  test('Can create a new node.', () => {
    let node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
});

let LinkedList = require('../linked-list/linked-list');

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
    let list = new LinkedList().fromArray([1, 2, 4, 5]);
    let mid = list.findMiddle();
    list.insertBefore(mid, 3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
  });

  // CC06-04. Can successfully insert a node BEFORE the FIRST node of a linked list.
  test('CC06-04: Can insert new node BEFORE the FIRST node in list.', () => {
    let list = new LinkedList().fromArray([1, 2, 3]);
    let head = list.head.value;
    list.insertBefore(head, 0);

    expect(list.head.value).toEqual(0);
  });

  //----- INSERT-AFTER METHOD -----//

  // CC06-05. Can successfully insert a node AFTER the middle node of a linked list.
  test('CC06-05: Can insert node AFTER the MIDDLE node in list.', () => {
    let list = new LinkedList().fromArray([1, 2, 4, 5]);
    let mid = list.findMiddle();
    list.insertAfter(mid, 3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(4);
    expect(list.head.next.next.next.value).toEqual(3);
  });

  // CC06-06. Can successfully insert a node AFTER the LAST node of the linked list.
  test('CC06-06: Can insert node AFTER the LAST node in list.', () => {
    let list = new LinkedList().fromArray([1, 2, 3, 4, 5]);
    let end = list.getLast();
    list.insertAfter(end, 6);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.value).toEqual(5);
    expect(list.head.next.next.next.next.next.value).toEqual(6);
  });

  //----- DELETE METHOD -----//

  //Can successfully delete a specified node from the list.
  test('CC06-SG: Can delete given node from the list.', () => {
    let list = new LinkedList().fromArray([5, 4, 3, 2, 1]);
    list.delete(3);
    expect(list.occurrences(3)).toEqual(0);
  });

  //----- kthFromEnd -----//

  // 1. Where `k` is greater than the length of the linked list.
  test('CC07-01: Throws an error when k is greater than length of list.', () => {
    let list = new LinkedList().fromArray([2,4,6,8]);
    expect(() => {list.kthFromEnd(17)}).toThrow('Given value is larger than list!');
    expect(() => {list.kthFromEnd(34)}).toThrow(Error);
  });

   // 2. Where `k` and the length of the list are the same.
   test('CC07-02: Where k and length of list are the same.', () => {
    let list = new LinkedList().fromArray([1,3,5,7,9]);
    expect(list.kthFromEnd(list.size())).toEqual(list.head.value);
  });

  // 3. Where `k` is not a positive integer.
  test('CC07-03: Where k is not a positive integer.', () => {
    let list = new LinkedList().fromArray([8,6,4,2,12,78,3]);
    expect(() => {list.kthFromEnd(-4)}).toThrow(Error);
  });

  // 4. Where the linked list is of a size 1.
  test('CC07-04: Where the size of linked list is 1.', () => {
    let list = new LinkedList().fromArray([2]);

    expect(() => {list.kthFromEnd(4)}).toThrow('Given value is larger than list!');
    expect(list.kthFromEnd(1)).toEqual(list.head.value);
  })

  //----- ADDITIONAL TESTS -----//

  // Can count how many times a value occurs in the linked list.
  test('1. Can correctly count occurrences of a value.', () => {
    let newList = new LinkedList();

    newList.insert(1);
    newList.insert(2);
    newList.insert(3);
    newList.insert(1);
    newList.insert(1);

    expect(newList.occurrences(1)).toEqual(3);
  });

  // Can create a linked list from an array, in same index order.
  test('2. Can create a LinkedList from an array, in SAME index order.', () => {
    let list = new LinkedList().fromArray([6, 7, 8, 9]);

    expect(list.head.value).toEqual(6);
    expect(list.head.next.value).toEqual(7);
    expect(list.head.next.next.value).toEqual(8);
    expect(list.head.next.next.next.value).toEqual(9);
  });

  // Can create a linked list from an array, in reverse index order.
  test('3. Can create a LinkedList from an array, in REVERSE index order.', () => {
    let list = new LinkedList().reverseFromArray([5, 4, 3, 2, 1]);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next.value).toEqual(5);
  });

  // Can correctly return the LAST node of the list.
  test('4. Returns correct value of LAST node.', () => {
    let list = new LinkedList();

    list.insert(4);
    list.insert(3);
    list.insert(2);

    expect(list.getLast()).toEqual(4);
  });

  //Can correctly return MIDDLE node of list.
  test('5. Returns correct value of MIDDLE node.', () => {
   let list = new LinkedList().fromArray([5,4,3,2,1]);
   expect(list.findMiddle()).toEqual(3);
  });

  test('6. Can reverse a linked list.', () => {
    let list = new LinkedList().fromArray([5,4,3,2,1]);
    list.reverse();
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });

  //---- Palindrome ----- //

  test('7. Can convert a linked list to a stack. Reverses the linked list.', () => {
    let list = new LinkedList().fromArray([2,4,6,8]);
    let stacked = list.toStack();
    let strung = stacked.toString();
    expect(strung).toEqual('T -> 8| 6| 4| 2| -> N');
  });

  test('8. Can check whether or not the linked list is a palindrome.', () => {
    let list1 = new LinkedList().fromArray(['T','A','C','O']);
    let list2 = new LinkedList().fromArray(['T','A','C','O','C','A','T']);
    let list3 = new LinkedList().fromArray([1,2,3,4,5]);
    let list4 = new LinkedList().fromArray([3,4,4,3]);

    let pal1 = list1.isPalindrome();
    expect(pal1).toBeFalsy();

    let pal2 = list2.isPalindrome();
    expect(pal2).toBeTruthy();

    let pal3 = list3.isPalindrome();
    expect(pal3).toBeFalsy();

    let pal4 = list4.isPalindrome();
    expect(pal4).toBeTruthy();
  });
});
