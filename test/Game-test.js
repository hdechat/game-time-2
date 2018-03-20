var chai = require('chai');
var assert = chai.assert;
// const context = require('test-context');
const Game = require('../lib/Game.js');
// const Log = require('../lib/Log.js');
// const Car = require('../lib/Car.js');
// const Frog = require('../lib/Frog.js');
// const StaticElements = require('./StaticElements.js')
// const Homes = require('../lib/Homes.js')

describe('Game', () => {
  var game;

    beforeEach(() => {
      game = new Game(this.context);
    });
  
    // this.context = context;
    // this.staticElements = new StaticElements();
    // this.gameFrog = new Frog(480, 447, 40, 40, 'red');
    
    // this.homes = new Homes();
    
      
    it.only('should have attributes', () => {
      assert.equal(game.context, context);
      assert.equal(game.gameFrogCount, 5);
      assert.equal(game.deadStatus, false);
      assert.equal(game.deadFrogs, 3);
      assert.equal(game.cars), [];
      assert.equal(game.gameLogs), [];
      assert.equal(game.frogHomeSafe), false;
      assert.equal(game.safeFrogsArray), [];
      assert.equal(game.score), 0;
      assert.equal(game.level), 1;
    });
  


  // it('should instantiate a game board with log, and 3 frogs', function() {
  //   let game = new Game;
  //   assert.equal(game.log.width, 60);
  //   assert.equal(game.playersArray.length, 3);
  // });

  // it('should have first player be frog1', function() {
  //   let game = new Game;
  //   assert.equal(game.player, game.frog1);
  // });

  // it('should remove player if he dies', function() {
  //   let game = new Game;
  //   game.playerDies();
  //   game.playerDies();
  //   assert.equal(game.playersArray.length, 1);
  //   assert.equal(game.player, game.frog3);
  // })
});
