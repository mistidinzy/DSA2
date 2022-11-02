'use strict';

const Stack = require("./stack");

class PseudoQueue{
  constructor(){
    this.inStack = new Stack();
    this.outStack = new Stack();

    this.top = this.inStack.top;
    this.back = this.outStack.back;
  }

  enqueue(value){
    this.inStack.push(value);
  }

  dequeue(){
    if(this.inStack.isEmpty){
      throw new Error('The queue is already empty!');
    }else{
      let p = this.inStack.pop();
      this.outStack.push(p);
    }
    return this.outStack.push(p);
  }
}

module.exports = PseudoQueue;