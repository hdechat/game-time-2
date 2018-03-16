
var Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context, canvas.height, canvas.width)

document.addEventListener('keydown', keydownHandler, false);
document.addEventListener('keyup', keyupHandler, false);

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

// var up = true;
// var down = true;
// var left = true;
// var right = true;



function keydownHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = true;
    game.gameFrog.hopRight();
  }
  if (event.keyCode === 37) {
    leftPressed = true;
    game.gameFrog.hopLeft();
  }
  if (event.keyCode === 38) {
    // upPressed = true;
    game.gameFrog.hopUp();
  }
  if (event.keyCode === 40) {
    downPressed = true;
    game.gameFrog.hopDown();
  }
}

function keyupHandler(event) {
  if (event.keyCode === 39) {
    rightPressed = false;
  }
  if (event.keyCode === 37) {
    leftPressed = false;
  }
  if (event.keyCode === 38) {
    upPressed = false;
  }
  if (event.keyCode === 40) {
    downPressed = false;
  }
}



game.gameLoop()

