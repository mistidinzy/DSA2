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
    shelter.newPet("Fido", "dog");
    shelter.newPet("Steve", "dog");
    shelter.newPet("Cheeseball", "dog");
    expect(shelter.dogs.front.value.nickname).toEqual("Fido");
    expect(shelter.dogs.front.next.value.nickname).toEqual("Steve");
    expect(shelter.dogs.back.value.nickname).toEqual("Cheeseball");
  });

  test("03. Can add a Cat to the Animal Shelter.", () => {
    let shelter = new AnimalShelter();
    shelter.newPet("Mr.Meowgi", "cat");
    shelter.newPet("Noodle", "cat");
    expect(shelter.cats.front.value.nickname).toEqual("Mr.Meowgi");
    expect(shelter.cats.back.value.nickname).toEqual("Noodle");
  });

  test("04. Can dequeue a pet based on preference (Cat).", () => {
    let shelter = new AnimalShelter();
    shelter.newPet("Mr.Meowgi", "cat");
    shelter.newPet("Steve", "dog");
    shelter.newPet("Noodle", "cat");
    shelter.newPet("Cheeseball", "dog");
    shelter.newPet("Pancake", "dog");
    let result = shelter.adopt("cat");
    expect(result.value.nickname).toEqual("Mr.Meowgi");
    let result2 = shelter.adopt("cat");
    expect(result2.value.nickname).toEqual("Noodle");
  });

  test("05. Can dequeue a pet based on preference (Dog).", () => {
    let shelter = new AnimalShelter();
    shelter.newPet("Mr.Meowgi", "cat");
    shelter.newPet("Steve", "dog");
    shelter.newPet("Noodle", "cat");
    shelter.newPet("Cheeseball", "dog");
    shelter.newPet("Pancake", "dog");

    let result = shelter.adopt("dog");
    expect(result.value.nickname).toEqual("Steve");
    let result2 = shelter.adopt("dog");
    expect(result2.value.nickname).toEqual("Cheeseball");
  });

  test("06. Can get simplified array of all pets in shelter with getAll.", () => {
    let shelter = new AnimalShelter();
    shelter.newPet("Mr.Meowgi", "cat");
    shelter.newPet("Steve", "dog");
    shelter.newPet("Noodle", "cat");
    shelter.newPet("Cheeseball", "dog");
    shelter.newPet("Pancake", "dog");
    let result = [
      "CAT: Mr.Meowgi 11/17/2022",
      "DOG: Steve 11/17/2022",
      "CAT: Noodle 11/17/2022",
      "DOG: Cheeseball 11/17/2022",
      "DOG: Pancake 11/17/2022",
    ];
    expect(shelter.getAll()).toEqual(result);
  });

  test("07. Dequeue without a preference returns pet with longest tenure.", () => {
    let shelter = new AnimalShelter();
    shelter.newPet("Mr.Meowgi", "cat");
    let d1 = shelter.newPet("Steve", "dog");

    shelter.newPet("Noodle", "cat");
    shelter.newPet("Cheeseball", "dog");

    console.log("BEFORE: ", shelter.getAll());
    d1.changeIntake("05/05/2015");
    console.log("AFTER: ", shelter.getAll());

    console.log(shelter.getLongest(), "!!!THIS SHOULD BE STEVE!!!");
  });

  test("08. Can update an intake date.", () => {
    let shelter = new AnimalShelter();
    shelter.newPet("Mr.Meowgi", "cat");
    shelter.newPet("Steve", "dog");
    shelter.newPet("Noodle", "cat");
    shelter.newPet("Cheeseball", "dog");

    let d3 = shelter.newPet("Pancake", "dog");
    d3.changeIntake("04/04/2014");
    expect(d3.intake).toEqual("4/4/2014");
  });
});
