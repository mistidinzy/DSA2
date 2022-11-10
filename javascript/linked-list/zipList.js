'use strict';

let LinkedList = require('./linked-list');

const zipLists = (list1, list2) =>
{
  let pointerA = list1.head;
  let pointerB = list2.head;

  let list3 = new LinkedList();

  list3.head = pointerA || pointerB;

  let pointerMover;

  while(pointerA && pointerB)
  {
    if(pointerA){
      pointerMover = pointerA.next;
      if(pointerB){
        pointerA.next = pointerB;
        pointerA = pointerMover;
      }
    }

    if(pointerB){
      pointerMover = pointerB.next;
      if(pointerA){
        pointerB.next = pointerA;
        pointerB = pointerMover;
      }
    }
  }
  return list3;
}

module.exports = zipLists;
