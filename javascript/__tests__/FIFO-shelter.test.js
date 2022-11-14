'use strict';

let AnimalShelter = require('../animal-shelter/animal-shelter');
let Dog = require('../animal-shelter/dog');
let Cat = require('../animal-shelter/cat');

describe("FIFO - Animal Shelter Tests", () => {
  test('01. Can create a new, empty Animal Shelter object.', () => {
    let shelter = new AnimalShelter();

    let dogs = shelter.dogs.qToString();
    let cats = shelter.cats.qToString();

    expect(dogs).toEqual('This queue is empty.');
    expect(cats).toEqual('This queue is empty.');

  });

  // test('02. Can add a Dog to the Animal Shelter.', () => {

  // });

});
