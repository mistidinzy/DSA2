"use strict";

let Queue = require("../stack-and-queue/queue");

class Dog {
  constructor() {
    this.nickname = "";
    this.intake = null;
    this.status = false;
    this.species = "dog";
  }

  newName(value) {
    this.nickname = value;
    return this.nickname;
  }

  gotFixed() {
    this.status = true;
    return this.status;
  }
}

class Cat {
  constructor() {
    this.nickname = "";
    this.intake = null;
    this.status = false;
    this.species = "cat";
  }

  newName(value) {
    this.nickname = value;
    return this.nickname;
  }

  gotFixed() {
    this.status = true;
    return this.status;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.allPets = [];
  }

  newDog(name, status) {
    let d = new Dog();
    d.nickname = name;
    d.status = status;
    d.intake = new Date().toDateString();
    this.allPets.push(d.nickname);
    return this.dogs.enqueue(d);
  }

  newCat(name, status) {
    let c = new Cat();
    c.nickname = name;
    c.status = status;
    c.intake = new Date().toDateString();
    this.allPets.push(c.nickname);
    return this.cats.enqueue(c);
  }

  getCat() {
    return this.cats.dequeue();
  }

  getDog() {
    return this.dogs.dequeue();
  }

  getLongest() {
    if (this.cats && this.dogs) {
      let firstCat = this.cats.peek();
      let firstDog = this.dogs.peek();

      let firstCatIntake = firstCat.intake;
      let firstDogIntake = firstDog.intake;

      if (firstCatIntake >= firstDogIntake) {
        this.cats.dequeue();
      } else {
        this.dogs.dequeue();
      }
    } else {
      throw new Error("No pets available.");
    }
  }
}

(module.exports = AnimalShelter), Dog, Cat;
