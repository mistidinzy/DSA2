"use strict";

let Stack = require("./stack");

function validateBrackets(str) {
  let arr = str.split('');
  let bracketStack = new Stack();

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '('){
      bracketStack.push(arr[i]);
    }
    else if(arr[i] == ')'){
      bracketStack.pop(arr[i]);
    }
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '{'){
      bracketStack.push(arr[i]);
    }
    else if(arr[i] == '}'){
      bracketStack.pop(arr[i]);
    }
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '['){
      bracketStack.push(arr[i]);
    }
    else if(arr[i] == ']'){
      bracketStack.pop(arr[i]);
    }
  }

  return bracketStack.isEmpty();
}

module.exports = { validateBrackets };
