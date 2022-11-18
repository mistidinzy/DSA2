'use strict';

let Queue = require('../stack-and-queue/queue');

class Pet{
  constructor(){
    this.nickname = '';
    this.intake = new Date().toDateString();
    this.status = false;
    this.species = '';
  }

  newName(value) {
    return this.nickname = value;
  }

  gotFixed() {
    return this.status = true;
  }

  changeIntake(value){
    let d = new Date(value);
    this.intake = d.toDateString();
    return this.intake;
  }
}

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

  newPet(name, species){
    let p = new Pet();
    p.nickname = name;
    p.intake = new Date().toDateString();
    p.species = species;
    this.enqueue(p);
    return p;
  }

  enqueue(p){
    if(p.species == 'cat'){
      this.cats.enqueue(p);
      this.allPets.push(p);
      return p;
    }else if(p.species == 'dog'){
      this.dogs.enqueue(p);
      this.allPets.push(p);
      return(p);
    }
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

  dequeue(pref){
    if(pref == 'dog'){
      let d = this.dogs.dequeue();

      return d;
    }
    else if(pref == 'cat'){
      let c = this.cats.dequeue();
      return c;
    }
    else{
      throw new Error('Please choose a dog or a cat.');
    }
  }

  // getLongest() {


  //   //!!if number is smaller, then tenure is longer!!//

  // }

  getAll(){
    let arr1 = this.allPets;
    let arr2 = [];
    arr1.forEach(element => { arr2.push(`${element.species.toUpperCase()}: ${element.nickname} - Intake Date: ${element.intake} - Spayed/Neutered: ${element.status}`);});
    return arr2;
  }
}

module.exports = AnimalShelter, Dog, Cat;
