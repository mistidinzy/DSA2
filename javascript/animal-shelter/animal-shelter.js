'use strict';

let Queue = require('../stack-and-queue/queue');

class Dog{
  constructor(){
    this.nickname = '';
    this.intake = new Date().toDateString();
    this.status = false;
  }
}

class Cat{
  constructor(){
    this.nickname = '';
    this.intake = new Date().toDateString();
    this.status = false;
  }
}

class AnimalShelter{
  constructor(){
    this.dogs = new Queue();
    this.cats = new Queue();
  }
}

module.exports = AnimalShelter;