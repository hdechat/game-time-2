var chai = require('chai');
var assert = chai.assert;

const Game = require('../lib/Game.js');
// const Log = require('../lib/Log.js');
// const Car = require('../lib/Car.js');
const Frog = require('../lib/Frog.js');
const StaticElements = require('../lib/StaticElements.js')
// const Homes = require('../lib/Homes.js')

describe('Game', function () {
  var game;
  

    beforeEach(() => {
      game = new Game();
      
    });
  
    
    // this.gameFrog = new Frog(480, 447, 40, 40, 'red');
    
    // this.homes = new Homes();
    
      
    it('should have attributes', function () {
      assert.equal(game.gameFrogCount, 5);
      assert.equal(game.deadStatus, false);
      assert.equal(game.deadFrogs, 3); 
      assert.equal(game.frogHomeSafe, false);
      assert.deepEqual(game.safeFrogsArray, []);
      assert.equal(game.score, 0);
      assert.equal(game.level, 1);
    });

    it('should instantiate with seven cars and seven logs', function () {
      assert.equal(game.cars.length, 7);
      assert.equal(game.gameLogs.length, 7);
    })

    it('should instantiate with static elements and a game frog', function () {
      game.staticElements = new StaticElements(10, 10, 20, 20, 'blue');
      assert.typeOf(game.staticElements, 'object');

      game.gameFrog = new Frog(480, 447, 40, 40, 'red');
      assert.typeOf(game.gameFrog, 'object');
    })


 
});