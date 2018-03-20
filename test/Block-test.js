var chai = require('chai');
var assert = chai.assert;
var Block = require('../lib/Block');

describe('Block', () => {
  var block;

  beforeEach(() => {
    block = new Block(10, 10, 20, 20, 'blue');
  });

  it('should take arrgument for x', () => {
    const expected = 10;
    const actual = block.x;
    assert.equal(actual, expected);
  });
    
  it('should take arrgument for y', () => {
    const expected = 10;
    const actual =  block.y;
    assert.equal(actual, expected);
  });

  it('should take arrgument for color', () => {
    const expected = 'blue';
    const actual = block.color;
    assert.equal(actual, expected);
  });
    
  it('should take arrugment for width', () => {
    const expected = 20;
    const actual = block.width;
    assert.equal(actual, expected);
  });

  it('should take arrgument for height', () => {
    const expected = 20;
    const actual = block.height;
    assert.equal(actual, expected);
  })
}); 
