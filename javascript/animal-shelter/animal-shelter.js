"use strict";

let Queue = require("../stack-and-queue/queue");
let Dog = require("./dog");
let Cat = require("./cat");

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
    }
  }

  getAllList() {
    let kitties = this.cats.qToString();
    let doggos = this.dogs.qToString();
    let allList = `All Cats: [ ${kitties} ] All Dogs: [ ${doggos} ]`;
    return allList;
  }

  getAllNumbers(){
    let kitties = this.cats.length;
    let doggos = this.dogs.length;
    let total = `Cats: ${kitties}. Dogs: ${doggos}.`;
    return total;
  }
}

module.exports = AnimalShelter;
