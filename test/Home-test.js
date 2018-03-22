var chai = require('chai');
var assert = chai.assert;
var Home = require('../lib/Home.js');
var Frog = require('../lib/Frog.js')

describe('Home', function() {
  var home;

  beforeEach(function() {
    home = new Home(75, 50, 110, 50, 'green');
  });

  it('should be an object', function() {
    assert.isObject(home);
  });

  it('should be a child of Block, extending position and dimension parameters', function() {
    assert.equal(home.x, 75);
    assert.equal(home.y, 50);
    assert.equal(home.width, 110);
    assert.equal(home.height, 50);
    assert.equal(home.color, 'green')
  });

  it('should be a function', function() {
    assert.isFunction(home.checkForFrog);
  });

  it('should return false if frog is not in home', function() {
    let frog = new Frog(80, 150, 40, 40);
    assert.equal(home.checkForFrog(frog), false);
  });

  it('should return true if frog is in home', function() {
    let frog = new Frog(80, 150, 40, 40);
    frog.hopUp()
    assert.equal(home.checkForFrog(frog), true);
  });

});
