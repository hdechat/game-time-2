const assert = require('chai').assert;
const {Log, Frog} = require('./Log.js');

describe ('Log', function() {
  it('should be a function', function() {
    assert.isFunction(Log);
  });

  it('should instantiate a new log', function() {
    var log = new Log;
    assert.isObject(log);
  });

  it('should have dimensions', function() {
    var log = new Log(10, 10, 20, 20);
    assert.equal(log.x, 10);
    assert.equal(log.y, 10);
    assert.equal(log.width, 20);
    assert.equal(log.height, 20);
  });

  it('should check if Frog is on it', function() {
    var log = new Log(10, 10, 20, 20);
    var frog = new Frog(10, 40, 20, 20);
    log.collides(frog);
    assert.equal(log.collision, false);
    frog.hopUp();
    log.collides(frog);
    assert.equal(log.collision, true);
  });
});

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
