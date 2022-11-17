'use strict';

let AnimalShelter = require('../animal-shelter/animal-shelter');
// let Dog = require('../animal-shelter/dog');
// let Cat = require('../animal-shelter/cat');

describe("FIFO - Animal Shelter Tests", () => {
  test('01. Can create a new, empty Animal Shelter object.', () => {
    let shelter = new AnimalShelter();
    expect(shelter.dogs.front).toBeNull();
    expect(shelter.cats.front).toBeNull();
  });

  test('02. Can add a Dog to the Animal Shelter.', () => {
    let shelter = new AnimalShelter();
    shelter.newDog('Fido', true);
    shelter.newDog('Fluffy');
    shelter.newDog('Cheeseball');
    expect(shelter.allPets).toContain('Fido');
    expect(shelter.allPets).toContain('Fluffy');
    expect(shelter.allPets).toContain('Cheeseball');
    expect(shelter.dogs.front.value.nickname).toEqual('Fido');
    expect(shelter.dogs.front.next.value.nickname).toEqual('Fluffy');
    expect(shelter.dogs.front.next.next.value.nickname).toEqual('Cheeseball');
  });

  test('03. Can add a Cat to the Animal Shelter.', () => {
    let shelter = new AnimalShelter();
    shelter.newCat('Mr.Meowgi', false);
    shelter.newDog('Maya', true);
    shelter.newCat('Dumbledore', true);
    shelter.newCat('Reptar', false);
    shelter.newDog('Riku', true);
    shelter.newDog('Winky', true);
    expect(shelter.allPets).toContain('Mr.Meowgi');
    expect(shelter.allPets).toContain('Dumbledore');
    expect(shelter.allPets).toContain('Reptar');
    expect(shelter.cats.front.value.nickname).toEqual('Mr.Meowgi');
    expect(shelter.cats.front.next.value.nickname).toEqual('Dumbledore');
    expect(shelter.cats.front.next.next.value.nickname).toEqual('Reptar');
  });

  test('04. Can dequeue a pet based on preference (Cat).', () => {
    let shelter = new AnimalShelter();
    shelter.newCat('Mr.Meowgi', false);
    shelter.newDog('Maya', true);
    shelter.newCat('Dumbledore', true);
    shelter.newCat('Reptar', false);
    shelter.newDog('Riku', true);
    shelter.newDog('Winky', true);

    let result = shelter.dequeue('cat');
    console.log(result);
    console.log(result.value.nickname);
    expect(result.value.nickname).toEqual('Mr.Meowgi');

    let result2 = shelter.dequeue('cat');
    console.log(result2);
    console.log(result2.value.nickname);
    expect(result2.value.nickname).toEqual('Dumbledore');

    let result3 = shelter.dequeue('cat');
    console.log(result3);
    console.log(result3.value.nickname);
    expect(result3.value.nickname).toEqual('Reptar');
  });

  test('05. Can dequeue a pet based on preference (Dog).', () => {
    let shelter = new AnimalShelter();
    shelter.newCat('Mr.Meowgi', false);
    shelter.newDog('Maya', true);
    shelter.newCat('Dumbledore', true);
    shelter.newCat('Reptar', false);
    shelter.newDog('Riku', true);
    shelter.newDog('Winky', true);

    let result = shelter.dequeue('dog');
    console.log(result);
    console.log(result.value.nickname);
    expect(result.value.nickname).toEqual('Maya');

    let result2 = shelter.dequeue('dog');
    console.log(result2);
    console.log(result2.value.nickname);
    expect(result2.value.nickname).toEqual('Riku');

    let result3 = shelter.dequeue('dog');
    console.log(result3);
    console.log(result3.value.nickname);
    expect(result3.value.nickname).toEqual('Winky');
  });

});
