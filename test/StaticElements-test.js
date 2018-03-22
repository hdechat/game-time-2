var chai = require('chai');
var assert = chai.assert;

const staticElements = require('../lib/StaticElements.js');


describe('StaticElements', function () {
  var staticElementsCollection;
  

    beforeEach(() => {
      staticElementsCollection = new staticElements(10, 10, 10, 10, 'green');
      
    });

    it('should be an object', function () {
      
      assert.typeOf(staticElementsCollection, 'object');
    })

    it('should instantiate with x, y, width, height, color', function () {
      assert.equal(staticElementsCollection.x, 10);
      assert.equal(staticElementsCollection.y, 10);
      assert.equal(staticElementsCollection.width, 10); 
      assert.equal(staticElementsCollection.height, 10);
      assert.deepEqual(staticElementsCollection.color, 'green');    
    })
});