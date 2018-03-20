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
  })

  it('has default property, collision, of false ', () => {
    assert.equal(log.collision, false);
  })

  it('should confirm collision if x and y coordinates are the same', () => {
    assert.equal(log.collision, false);
    frog = new Frog(400, 30, 80, 25);
    log.checkForFrog(frog);
    assert.equal(log.collision, true);
  });

  it('should move left', () => {
    // var log = new Log(20, 30, 80, 25);
    log.moveLeft();
    log.moveLeft();
    assert.equal(log.x, 398);
  });

  it('should let the frog ride', () => {
    assert.equal(log.collision, false);
    frog = new Frog(400, 30, 40, 40);
    log.checkForFrog(frog);

    assert.equal(log.collision, true);

    log.moveLeft();
    
    assert.equal(log.x, 399);
    assert.equal(frog.x, 399);
  });


});



