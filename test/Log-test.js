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



//_____________________________________________________________________________


// describe ('Log', function() {
//   it('should be a function', function() {
//     assert.isFunction(Log);
//   });



//   it('should have dimensions', function() {
//     var log = new Log(10, 10, 20, 20);
//     assert.equal(log.x, 10);
//     assert.equal(log.y, 10);
//     assert.equal(log.width, 20);
//     assert.equal(log.height, 20);
//   });

//   it('should check if Frog is on it', function() {
//     var log = new Log(10, 10, 20, 20);
//     var frog = new Frog(10, 40, 20, 20);
//     log.collides(frog);
//     assert.equal(log.collision, false);
//     frog.hopUp();//frog touching
//     frog.hopUp();//frog halfway
//     frog.hopUp();//frog fully on
//     log.collides(frog);
//     assert.equal(log.collision, true);
//     assert.equal(log.y, frog.y);
//     frog.hopUp();
//     frog.hopUp();
//     frog.hopUp();
//     log.collides(frog);
//     assert.equal(log.collision, false);
//   });

//   it('should move left', function() {
//     var log = new Log(20, 20, 20, 20);
//     log.moveLeft();
//     log.moveLeft();
//     assert.equal(log.x, 0);
//   });

//   it('should let the frog ride', function() {
//     var log = new Log(10, 10, 60, 20);
//     var frog = new Frog(30, 40, 20, 20);
//     log.collides(frog);
//     assert.equal(log.collision, false);
//     frog.hopUp();//frog touching
//     frog.hopUp();//frog halfway
//     frog.hopUp();//frog fully on
//     log.collides(frog);
//     assert.equal(log.collision, true);
//     assert.equal(log.y, frog.y);;
//     assert.equal(frog.x, 20);
//     log.moveLeft();//to be looped
//     log.collides(frog);//to be looped
//     assert.equal(log.x, 0);
//     assert.equal(frog.x, 10);
//   });
// });

