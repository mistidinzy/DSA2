"use strict";

class Dog {
  constructor(nickname) {
    this.nickname = nickname;
    this.intake = new Date().toDateString();
    this.status = false;
  }

  newName(value) {
    this.nickname = value;
    return this.nickname;
   }

   gotFixed(){
     this.status = true;
     return this.status;
   }
}

module.exports = Dog;