'use strict';

let AnimalShelter = require('../animal-shelter/animal-shelter');

describe("FIFO - Animal Shelter Tests", () => {

  test('01. Can create a new, empty Animal Shelter object.', () => {
    let shelter = new AnimalShelter();

    shelter.enqueue(new Dog());
  })

});