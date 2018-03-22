var chai = require('chai');
var assert = chai.assert;
var Frog = require('../lib/Frog.js');
var Block = require('../lib/Block.js');
var Log = require('../lib/Log.js');

describe('Frog', function () {
  var log;
  var frog;

  beforeEach(() => {
    frog = new Frog(480, 347, 40, 40, 'red');
    log = new Log(200, 200, 100, 50, 'brown');
  });

  it('should be an object', function () {
    assert.isObject(frog);
  });

  it('should be a child of Block, extending position and dimension parameters', function () {
    assert.equal(frog.x, 480);
    assert.equal(frog.y, 347);
    assert.equal(frog.width, 40);
    assert.equal(frog.height, 40);
    assert.equal(frog.color, 'red');
  });

  it('should be a function', function () {
    assert.isFunction(frog.hopLeft);
    assert.isFunction(frog.hopRight);
    assert.isFunction(frog.hopDown);
    assert.isFunction(frog.hopUp);
  })

  it('should hop left', function () {
    frog.hopLeft();
    assert.equal(frog.x, 415);
  });

  it('should hop right', function () {
    frog.hopRight();
    assert.equal(frog.x, 545);
  });

  it('should hop up', function () {
    frog.hopUp();
    assert.equal(frog.y, 282);
  });

  it('should hop down', function () {
    frog.hopDown();
    assert.equal(frog.y, 412);
  });
});