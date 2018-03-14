var Block = require('./Block.js');
var Log = require('./Log.js');
var Car = require('./Car.js');
var Frog = require('./Frog.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d'); 
const frog1 = new Frog(500, 447 ,40, 40);
const car1 = new Car(0, 382, 80, 50);
const log1 = new Log(1000, 192, 100, 30);

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

var up = true;
var down = true;
var left = true;
var right = true;

document.addEventListener('keydown', keydownHandler, false);
document.addEventListener('keyup', keyupHandler, false);

function keydownHandler(event) {
  if(event.keyCode === 39) {
    rightPressed = true;
    frog1.hopRight();
  }
  if(event.keyCode === 37) {
    leftPressed = true;
    frog1.hopLeft();
  }
  if(event.keyCode === 38) {
    upPressed = true;
    frog1.hopUp();
  }
  if(event.keyCode === 40) {
    downPressed = true;
    frog1.hopDown();
  }
}

function keyupHandler(event) {
  if(event.keyCode === 39) {
    rightPressed = false;
  }
  if(event.keCode === 37) {
    leftPressed = false;
  }
  if(event.keyCode === 38) {
    upPressed = false;
  }
  if(event.keyCode === 40) {
    downPressed = false;
  }
}

function gameLoop() {

  context.clearRect(0 , 0, canvas.width, canvas.height);
  context.fillStyle = 'green';
  //launchpad
  context.fillRect(0, 445, 1000, 500);

  //peninsulas
  for(var i=0; i<6; i++) {
    context.fillRect(i * 185, 0, 75, 100);
  }

  //bays
  for(var i=0; i<5; i++) {
    context.fillRect(i * 185 + 75, 0, 110, 50);
  }
 
  //median
  context.fillRect(0, 247, 1000, 50);

  // froggie jumps 65px jumps

  context.fillStyle = 'tan';
  car1.draw(context);
  car1.moveRight();

  context.fillStyle = 'brown';
  log1.draw(context);
  log1.moveLeft();
  
  context.fillStyle = 'red';
  frog1.draw(context);
 
//temporary lines
  context.moveTo(0, 173.5);
  context.lineTo(1000, 173.5);
  context.moveTo(0, 100);
  context.lineTo(1000, 100);
  context.moveTo(0, 370.5);
  context.lineTo(1000, 370.5);
  context.stroke();

  requestAnimationFrame(gameLoop);
};

window.requestAnimationFrame(gameLoop);