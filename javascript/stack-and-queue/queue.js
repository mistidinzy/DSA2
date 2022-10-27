'use strict';

let Node = require('../linked-list/node');

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value){
    let newNode = new Node(value);

    if(this.front){
      this.back.next = newNode;
    }else{
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;

    return temp;
  }
}

module.exports = Queue;
