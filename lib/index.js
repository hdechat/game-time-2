var Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context)

document.addEventListener('keydown', keydownHandler);
$('.start-game-button').on('click', function() {
  $('#instructions').css('display', 'none');
});

function keydownHandler(event) {
  if (event.keyCode === 39) {game.gameFrog.hopRight();}
  if (event.keyCode === 37) {game.gameFrog.hopLeft();}
  if (event.keyCode === 38) {game.gameFrog.hopUp();}
  if (event.keyCode === 40) {game.gameFrog.hopDown();}
}

game.gameLoop();

