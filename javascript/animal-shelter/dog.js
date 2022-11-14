"use strict";

class Dog {
  constructor(nickname, date, status) {
    this.nickname = nickname;
    this.intake = date;
    this.status = status;
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