const chai = require('chai');
const assert = chai.assert;
const Frog = require('./Frog-test.js');
const Car = require('./Car-test.js');

describe('Frog', function() {

  it('should be a function', function() {
    assert.isFunction(Frog);
  });

  it('should instantiate a new frog', function() {
    var frog = new Frog;
    assert.isObject(frog);
  });

  it('should have dimensions', function() {
    var frog = new Frog(480, 447, 40, 40);
    assert.equal(frog.x, 480);
  })

  it('should have a safety checker', function() {
    var frog = new Frog(10, 10, 40, 40);
    var car = new Car(80, 80, 40, 40);
    var isSafe = frog.checkSafety();

    assert.isTrue(isSafe);
  });

});

describe('Car', function() {

  it('should be a function', function() {
    assert.isFunction(Car);
  });

  it('should instantiate a new car', function() {
    var car = new Car;
    assert.isObject(car);
  });

  it('should have dimensions', function() {
    var car = new Car(280, 247, 40, 40);
    assert.equal(car.y, 247);
  })
});
