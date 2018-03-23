var Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game();

document.addEventListener('keydown', keydownHandler);
$('.start-game-button').on('click', function () {
  $('#instructions').css('display', 'none');
  game.startGameTimer();
});

function keydownHandler(event) {
  if (event.keyCode === 39) {
    game.gameFrog.hopRight();
  }
  if (event.keyCode === 37) {
    game.gameFrog.hopLeft();
  }
  if (event.keyCode === 38) {
    game.gameFrog.hopUp();
  }
  if (event.keyCode === 40) {
    game.gameFrog.hopDown()
  }
}

function renderGame(){
  game.launchPad.draw(context);
  game.median.draw(context);
  game.peninsulasArray.forEach((peninsula) => {
    peninsula.draw(context);
  });
  game.homeBackWallArray.forEach((wall) => {
    wall.draw(context);
  });
  game.staticElements.drawLaneLines(context);
  game.homesArray.forEach((home) => {
    home.draw(context)
  })
  game.safeFrogsArray.forEach((safeFrog) => {
    safeFrog.draw(context)
  })
  game.cars.forEach((car) => {
    car.draw(context);
  })
  game.gameLogs.forEach((log) => {
    log.draw(context);
  })
  game.gameFrog.draw(context);
}

function gameLoop() {
  context.clearRect(0, 0, 1000, 500);
  renderGame();
  game.gameBoard(context);
  requestAnimationFrame(gameLoop.bind(this));
};

gameLoop();