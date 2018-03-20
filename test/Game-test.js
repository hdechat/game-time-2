const assert = require('chai').assert;
const Game = require('../lib/Game.js');

describe('Game', function() {
  it('should instantiate a game board with log, and 3 frogs', function() {
    let game = new Game;
    assert.equal(game.log.width, 60);
    assert.equal(game.playersArray.length, 3);
  });

  it('should have first player be frog1', function() {
    let game = new Game;
    assert.equal(game.player, game.frog1);
  });

  it('should remove player if he dies', function() {
    let game = new Game;
    game.playerDies();
    game.playerDies();
    assert.equal(game.playersArray.length, 1);
    assert.equal(game.player, game.frog3);
  })
});
