"use strict";

let Queue = require("../stack-and-queue/queue");

class Pet {
  constructor() {
    this.nickname = "";
    this.intake = new Date().toLocaleDateString();
    this.status = false;
    this.species = "";
  }

  getName() {
    return this.nickname;
  }

  newName(value) {
    this.nickname = value;
    return this.nickname;
  }

  getIntake() {
    return this.intake;
  }

  changeIntake(value) {
    let d = new Date(value);
    this.intake = d.toLocaleDateString();
    return this.intake;
  }

  gotAltered() {
    this.status = true;
    return this.status;
  }

  editSpecies(s) {
    this.species = s;
    return this.species;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.allPets = [];
  }

  newPet(name, species) {
    let p = new Pet();
    p.nickname = name;
    p.intake = new Date().toLocaleDateString();
    p.species = species;
    this.enQ(p);
    return p;
  }

  enQ(p) {
    if (p.species == "cat") {
      this.cats.enqueue(p);
      this.allPets.push(p);
      return p;
    } else if (p.species == "dog") {
      this.dogs.enqueue(p);
      this.allPets.push(p);
      return p;
    }
  }

  adopt(pref) {
    if (pref == "dog") {
      return this.dogs.dequeue();
    } else if (pref == "cat") {
      return this.cats.dequeue();
    } else return this.getLongest();
  }

  adoptDog() {
    let d = this.dogs.dequeue();
    return d;
  }

  adoptCat() {
    let c = this.cats.dequeue();
    return c;
  }

  getAll() {
    let arr1 = this.allPets;
    let arr2 = [];
    arr1.forEach((element) => {
      arr2.push(
        `${element.nickname} ${element.species.toUpperCase()} ${element.intake}`);
    });
    return arr2.toString();
  }

  findPet(p) {
    let arr = this.allPets;
    let arr2 = [];
    let index;
    let found;

    for (let i = 0; i < arr.length; i++) {
      arr2.push(arr[i].nickname);
    }

    let result = arr2.includes(p);

    if (result == true) {
      index = arr2.indexOf(p);
      found = arr[index];
      return found;
    } else return "Not Found";
  }

  findPetIndex(p) {
    let arr = this.allPets;
    let arr2 = [];
    let index;
    let found;

    for (let i = 0; i < arr.length; i++) {
      arr2.push(arr[i].nickname);
    }

    let result = arr2.includes(p);

    if (result == true) {
      index = arr2.indexOf(p);
      found = arr[index];
      return arr.indexOf(found);
    } else return "Not Found";
  }

  getLongest() {
    let cat = this.cats.front.value;
    let dog = this.dogs.front.value;
    let catTime = cat.intake;
    let dogTime = dog.intake;

    if (catTime > dogTime) {
      return this.dogs.dequeue();
    } else if (dogTime > catTime) {
      return this.cats.dequeue();
    }
  }
}

module.exports = AnimalShelter;
