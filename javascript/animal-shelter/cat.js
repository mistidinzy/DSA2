'use strict';

class Cat {
  constructor() {
    this.nickname = '';
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

module.exports = Cat;