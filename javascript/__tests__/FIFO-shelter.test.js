'use strict';

let AnimalShelter = require('../animal-shelter/animal-shelter');
let Dog = require('../animal-shelter/dog');
let Cat = require('../animal-shelter/cat');

describe("FIFO - Animal Shelter Tests", () => {
  test('01. Can create a new, empty Animal Shelter object.', () => {
    let shelter = new AnimalShelter();
    let list = shelter.getAllList();
    console.log(list);
    expect(list).toEqual('All Cats: [ This queue is empty. ] All Dogs: [ This queue is empty. ]');
    let numbers = shelter.getAllNumbers();
    console.log(numbers);
    expect(numbers).toEqual('Cats: 0. Dogs: 0.');
  });

  // test('02. Can add a Dog to the Animal Shelter.', () => {

  // });

});
