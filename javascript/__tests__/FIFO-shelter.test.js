'use strict';

let AnimalShelter = require('../animal-shelter/animal-shelter');
let Dog = require('../animal-shelter/dog');
let Cat = require('../animal-shelter/cat');

describe("FIFO - Animal Shelter Tests", () => {
  test('01. Can create a new, empty Animal Shelter object.', () => {
    let shelter = new AnimalShelter();
    expect(shelter.dogs.front).toBeNull();
    expect(shelter.cats.front).toBeNull();
  });

  test('02. Can add a Dog to the Animal Shelter.', () => {
    let shelter = new AnimalShelter();
    shelter.newDog('Fido', true);
    // console.log(shelter.dogs.front.value.nickname, 'Dogs: ', shelter.dogs.length);
    // console.log(shelter);

    expect(shelter.dogs.length).toEqual(1);
    expect(shelter.allPets).toContain('Fido');
    let arr = shelter.allPets.includes('Fido');
    expect(arr).toBeTruthy();
  });
});
