const assert = require('chai').assert;
const Frog = require('../lib/Frog.js');

describe('Frog', function() {
  it('should be a function', function() {
    assert.isFunction(Frog);
  });

  it('should instantiate a new Frog', function() {
    var frog = new Frog;
    assert.isObject(frog);
  });

  it('should have dimensions', function() {
    var frog = new Frog(10, 40, 20, 20);
    assert.equal(frog.x, 10);
    assert.equal(frog.y, 40);
    assert.equal(frog.width, 20);
    assert.equal(frog.height, 20);
  });

  it('should be able to hop up', function() {
    var frog = new Frog(10, 40, 20, 20);
    frog.hopUp();
    assert.equal(frog.y, 30);
  });
});
