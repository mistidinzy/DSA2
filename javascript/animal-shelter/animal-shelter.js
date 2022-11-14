"use strict";

let Queue = require("../stack-and-queue/queue");

class Dog {
  constructor() {
    this.nickname = "";
    this.intake = new Date().toDateString();
    this.status = false;
  }
}

class Cat {
  constructor() {
    this.nickname = "";
    this.intake = new Date().toDateString();
    this.status = false;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal == Dog) {
      this.dogs.enqueue(animal);
    } else if (animal == Cat) {
      this.cats.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref == Dog) {
      this.dogs.dequeue();
    } else if (pref == Cat) {
      this.cats.dequeue();
    } else {
      this.getLongest();
    }
  }

  getLongest() {
    let firstCat = this.cats.peek();
    let firstDog = this.dogs.peek();

    let firstCatIntake = firstCat.intake;
    let firstDogIntake = firstDog.intake;

    if (firstCatIntake >= firstDogIntake) {
      this.cats.dequeue();
    } else {
      this.dogs.dequeue();
    }
  }

  newName(animal, newName) {
    if (animal == Dog) {
      this.nickname = newName;
    } else if (animal == Cat) {
      this.nickname = newName;
    }
  }
}

module.exports = AnimalShelter;
