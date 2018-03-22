var chai = require('chai');
var assert = chai.assert;
var Frog = require('../lib/Frog.js');
var Car = require('../lib/Car.js');

describe('Frog', function () {
  let car;
  let frog;

  beforeEach(function () {
    frog = new Frog(200, 200, 40, 40, 'red');
    car = new Car(100, 130, 50, 50, 'tan');
  });

  it('should be an object', function () {
    assert.isObject(car);
  });

  it('should be a child of Block, extending position and dimension parameters', function () {
    assert.equal(car.x, 100);
    assert.equal(car.y, 130);
    assert.equal(car.width, 50);
    assert.equal(car.height, 50);
    assert.equal(car.color, 'tan');
  });

  it('should be a function', function () {
    assert.isFunction(car.moveRight);
    assert.isFunction(car.checkIfCarCollidesWithFrog);
  });

  it('should move right', function () {
    assert.equal(car.x, 100);
    car.moveRight(1)
    assert.equal(car.x, 101);
  });

  it('should return to the left of the canvas once it reaches the right side', function () {
    assert.equal(car.x, 100);
    car.moveRight(901);
    assert.equal(car.x, 0);
  });

  it('should check if it collides with frog', function () {
    assert.equal(car.checkIfCarCollidesWithFrog(frog), false);
    frog.hopUp();
    car.moveRight(100);
    assert.equal(car.checkIfCarCollidesWithFrog(frog), true);
  });
});