'use strict';

let LinkedList = require('../linked-list/linked-list');
let zipLists = require('../linked-list/zipList');


describe('Zip List Tests', () => {
  test('Can successfully merge two linked lists together.', () => {
    let list1 = new LinkedList().fromArray([1,3,5]);
    let list2 = new LinkedList().fromArray([2,4,6]);
    let zipped = zipLists(list1, list2);
    let result = zipped.toString();
    expect(result).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');

    let list3 = new LinkedList().fromArray([25,67,32]);
    let list4 = new LinkedList().fromArray(['B','T','S']);
    let zip2 = zipLists(list3, list4);
    let res2 = zip2.toString();
    expect(res2).toEqual('{ 25 } -> { B } -> { 67 } -> { T } -> { 32 } -> { S } -> NULL');
  });
})