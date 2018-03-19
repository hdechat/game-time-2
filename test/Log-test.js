const assert = require('chai').assert;
const Log = require('./Log.js');
const Frog = require('./Frog.js');

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
    frog.hopUp();//frog touching
    frog.hopUp();//frog halfway
    frog.hopUp();//frog fully on
    log.collides(frog);
    assert.equal(log.collision, true);
    assert.equal(log.y, frog.y);
    frog.hopUp();
    frog.hopUp();
    frog.hopUp();
    log.collides(frog);
    assert.equal(log.collision, false);
  });

  it('should move left', function() {
    var log = new Log(20, 20, 20, 20);
    log.moveLeft();
    log.moveLeft();
    assert.equal(log.x, 0);
  });

  it('should let the frog ride', function() {
    var log = new Log(10, 10, 60, 20);
    var frog = new Frog(30, 40, 20, 20);
    log.collides(frog);
    assert.equal(log.collision, false);
    frog.hopUp();//frog touching
    frog.hopUp();//frog halfway
    frog.hopUp();//frog fully on
    log.collides(frog);
    assert.equal(log.collision, true);
    assert.equal(log.y, frog.y);;
    assert.equal(frog.x, 20);
    log.moveLeft();//to be looped
    log.collides(frog);//to be looped
    assert.equal(log.x, 0);
    assert.equal(frog.x, 10);
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
