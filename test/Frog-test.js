var chai = require('chai');
var assert = chai.assert;
var Frog = require('../lib/Frog.js');
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

  it('should be a function', function () {
    assert.isFunction(frog.hopLeft);
    assert.isFunction(frog.hopRight);
    assert.isFunction(frog.hopDown);
    assert.isFunction(frog.hopUp);
  })

  it('frog hops left decreases x coordinate', function () {
    frog.hopLeft();
    assert.equal(frog.x, 415);
  });

  it('frog hops right increases x coordinate', function () {
    frog.hopRight();
    assert.equal(frog.x, 545);
  });

  it('frog hops up decreases y coordinate', function () {
    frog.hopUp();
    assert.equal(frog.y, 282);
  });

  it('frog hops down increases y coordinate', function () {
    frog.hopDown();
    assert.equal(frog.y, 412);
  });
});