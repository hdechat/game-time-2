var chai = require('chai');
var assert = chai.assert;
var Log = require('../lib/Log');
var Frog = require('../lib/Frog')

describe('Log', () => {
  var log;
  var frog;

  beforeEach(() => {
    log = new Log(400, 30, 80, 25, 'blue');
  });

  it('has properties', () => {
    assert.equal(log.x, 400);
    assert.equal(log.y, 30);
    assert.equal(log.width, 80);
    assert.equal(log.height, 25);
    assert.equal(log.color, 'blue')
  })

  it('has default property, collision, of false ', () => {
    assert.equal(log.collision, false);
  })

  it('has default property, speed, of 1 ', () => {
    assert.equal(log.speed, 1);
  })

  it('has a function called moveLeft', function() {
    
    assert.isFunction(log.moveLeft);
  });

  it('has a function called checkForFrog', function() {
    
    assert.isFunction(log.checkForFrog);
  });

  it('should confirm collision if x and y coordinates are the same', () => {
    assert.equal(log.collision, false);
    frog = new Frog(400, 30, 80, 25);
    log.checkForFrog(frog);
    assert.equal(log.collision, true);
  });

  it('should move left', () => {
    assert.equal(log.x, 400);

    log.moveLeft(100);
    log.moveLeft(100);
    
    assert.equal(log.x, 200);
  });

  it('should let the frog ride', () => {
    frog = new Frog(400, 30, 40, 40);
    
    log.checkForFrog(frog, 100);
    
    assert.equal(log.collision, true);

    log.moveLeft(100);
    
    assert.equal(log.x, 300);
    assert.equal(frog.x, 300);
  });


});



