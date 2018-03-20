var chai = require('chai');
var assert = chai.assert;
var Block = require('../lib/Block');

describe('Block', function () {
  var block;

  beforeEach(function () {
    block = new Block(10, 10, 20, 20, 'blue');
  });

  it('has properties', function () {
    assert.equal(block.x, 10);
    assert.equal(block.y, 10);
    assert.equal(block.width, 20);
    assert.equal(block.height, 20);
    assert.equal(block.color, 'blue')
  })
      
}); 
