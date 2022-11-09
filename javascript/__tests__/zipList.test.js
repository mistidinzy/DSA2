'use strict';

let LinkedList = require('../linked-list/linked-list');
let zipLists = require('../linked-list/zipList');


describe('Zip List Tests', () => {
  test('Can successfully merge two linked lists together.', () => {
    let list1 = new LinkedList().fromArray([1,3,5]);
    let list2 = new LinkedList().fromArray([2,4, 6]);

    let str1 = list1.toString();
    let str2 = list2.toString();

    console.log(str1, str2);

    let result = zipLists(list1, list2);

    console.log(result.toString());
  });
})