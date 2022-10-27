'use strict';

let Node = require('../linked-list/node');

class Stack {
  constructor(){
    this.top = null;
    this.count = 0;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack is already empty!');
    } else {
      let popped = this.top.value;
      this.top = this.top.next;
      this.count--;
      return popped;
    }
  }

  popUntilEmpty(){
    if(!this.top){
      throw new Error('Stack is already empty!');
    }else {
      let length = this.count;
      for(let i = 0; i < length; i++){
        this.pop();
      }
    }
  }
}

module.exports = Stack;
