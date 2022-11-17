'use strict';

let Queue = require('../stack-and-queue/queue');

class Dog {
  constructor() {
    this.nickname = '';
    this.intake = null;
    this.status = false;
    this.species = 'dog';
  }

  newName(value) {
    this.nickname = value;
    return this.nickname;
  }

  gotFixed() {
    this.status = true;
    return this.status;
  }

  changeIntake(value){
    let d = new Date(value);
    this.intake = d.toDateString();
    return this.intake;
  }
}

class Cat {
  constructor() {
    this.nickname = '';
    this.intake = null;
    this.status = false;
    this.species = 'cat';
  }

  newName(value) {
    this.nickname = value;
    return this.nickname;
  }

  gotFixed() {
    this.status = true;
    return this.status;
  }

  changeIntake(value){
    let d = new Date(value);
    this.intake = d.toDateString();
    return this.intake;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.allPets = [];
  }

  newDog(name) {
    let d = new Dog();
    d.nickname = name;
    d.intake = new Date().toDateString();
    this.allPets.push(d);
    this.dogs.enqueue(d);
    return d;
  }

  newCat(name) {
    let c = new Cat();
    c.nickname = name;
    c.intake = new Date().toDateString();
    this.allPets.push(c);
    this.cats.enqueue(c);
    return c;
  }

  getCat() {
    return this.cats.dequeue();
  }

  getDog() {
    return this.dogs.dequeue();
  }

  dequeue(pref){
    if(pref == 'dog'){
      return this.getDog();
    }
    else if(pref == 'cat'){
      return this.getCat();
    }
    else{
      throw new Error('Please choose a dog or a cat.');
    }
  }

  // getLongest() {


  //   //!!if number is smaller, then tenure is longer!!//

  // }
}

module.exports = AnimalShelter, Dog, Cat;
