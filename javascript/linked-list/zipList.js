'use strict';

let LinkedList = require('./linked-list');

const zipLists = (list1, list2) =>
{
  let currentA = list1.head;
  let currentB = list2.head;
  let list3 = new LinkedList();
  list3.head = currentA || currentB;
  let temp;

  while(currentA.next != null && currentB.next != null)
  {
    if(currentA){
      temp = currentA.next;
      if(currentB){
        currentA.next = currentB;
        currentA = temp;
      }
    }

    if(currentB){
      temp = currentB.next;
      if(currentA){
        currentB.next = currentA;
        currentB = temp;
      }
    }
  }
  return list3;
}

module.exports = zipLists;
