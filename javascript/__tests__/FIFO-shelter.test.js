'use strict';

let AnimalShelter = require('../animal-shelter/animal-shelter');
let Dog = require('../animal-shelter/dog');
let Cat = require('../animal-shelter/cat');

describe("FIFO - Animal Shelter Tests", () => {
  test('01. Can create a new, empty Animal Shelter object.', () => {
    let shelter = new AnimalShelter();
    let fido = new Dog();
    let result = shelter.enqueue(fido);

    console.log(result);
  });

});
