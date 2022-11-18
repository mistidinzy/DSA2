"use strict";

let AnimalShelter = require("../animal-shelter/animal-shelter");

describe("FIFO - Animal Shelter Tests", () => {
  test("01. Can create a new, empty Animal Shelter object.", () => {
    let shelter = new AnimalShelter();
    expect(shelter.dogs.front).toBeNull();
    expect(shelter.cats.front).toBeNull();
  });

  test("02. Can add a Dog to the Animal Shelter.", () => {
    let shelter = new AnimalShelter();
    shelter.newDog("Fido");
    shelter.newDog("Steve");
    shelter.newDog("Cheeseball");
    expect(shelter.dogs.front.value.nickname).toEqual("Fido");
    expect(shelter.dogs.front.next.value.nickname).toEqual("Steve");
    expect(shelter.dogs.back.value.nickname).toEqual("Cheeseball");
  });

  test("03. Can add a Cat to the Animal Shelter.", () => {
    let shelter = new AnimalShelter();
    shelter.newCat("Mr.Meowgi");
    shelter.newCat("Noodle");
    expect(shelter.cats.front.value.nickname).toEqual("Mr.Meowgi");
    expect(shelter.cats.back.value.nickname).toEqual("Noodle");
  });

  test("04. Can dequeue a pet based on preference (Cat).", () => {
    let shelter = new AnimalShelter();
    shelter.newCat("Mr.Meowgi");
    shelter.newDog("Steve");
    shelter.newCat("Noodle");
    shelter.newDog("Cheeseball");
    let result = shelter.dequeue("cat");
    expect(result.value.nickname).toEqual("Mr.Meowgi");
    let result2 = shelter.dequeue("cat");
    expect(result2.value.nickname).toEqual("Noodle");
  });

  test("05. Can dequeue a pet based on preference (Dog).", () => {
    let shelter = new AnimalShelter();
    shelter.newCat("Mr.Meowgi");
    shelter.newDog("Steve");
    shelter.newCat("Noodle");
    shelter.newDog("Cheeseball");
    let result = shelter.dequeue("dog");
    expect(result.value.nickname).toEqual("Steve");
    let result2 = shelter.dequeue("dog");
    expect(result2.value.nickname).toEqual("Cheeseball");
    expect(() => {
      shelter.dequeue();
    }).toThrow(Error);
  });

  test("06. Can update an intake date.", () => {
    let shelter = new AnimalShelter();
    shelter.newCat("Mr.Meowgi");
    shelter.newDog("Steve");
    shelter.newCat("Noodle");
    shelter.newDog("Cheeseball");

    // console.log(shelter);
    // console.log(shelter.allPets);
  });

  test("07. Dequeue without a preference returns pet with longest tenure.", () => {
    let shelter = new AnimalShelter();
    shelter.newCat("Mr.Meowgi");
    shelter.newDog("Steve");
    shelter.newCat("Noodle");
    shelter.newDog("Cheeseball");

    // console.log(shelter);
    // console.log(shelter.allPets);
  });

  test("08. Can get simplified array of all pets in shelter with getAll.", () => {
    let shelter = new AnimalShelter();
    shelter.newCat("Mr.Meowgi");
    shelter.newDog("Steve");
    shelter.newCat("Noodle");
    shelter.newDog("Cheeseball");
    shelter.newPet("Pancake", "dog");

    console.log(shelter.getAll());

    // let result = [
    //   "CAT: Mr.Meowgi - Intake Date: Thu Nov 17 2022 - Spayed/Neutered: false",
    //   "DOG: Steve - Intake Date: Thu Nov 17 2022 - Spayed/Neutered: false",
    //   "CAT: Noodle - Intake Date: Thu Nov 17 2022 - Spayed/Neutered: false",
    //   "DOG: Cheeseball - Intake Date: Thu Nov 17 2022 - Spayed/Neutered: false",
    //   "DOG: Pancake - Intake Date: Thu Nov 17 2022 - Spayed/Neutered: false",
    // ];

    // expect(shelter.getAll()).toEqual(result);
  });
});
