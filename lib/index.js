// var Block = require('./Block.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d'); 

requestAnimationFrame(function(gameLoop) {

  context.clearRect(0 , 0, canvas.width, canvas.height);
  context.fillStyle = 'green';
  //launchpad
  context.fillRect(0, 445, 1000, 500);
  //peninsulas
  context.fillRect(0, 0, 75 ,100);
  context.fillRect(185, 0, 75, 100);
  context.fillRect(370, 0, 75, 100);
  context.fillRect(555, 0, 75, 100);
  context.fillRect(740, 0, 75, 100);
  context.fillRect(925, 0, 75, 100);
  //bays
  context.fillRect(75, 0, 110, 50);
  context.fillRect(260, 0, 110, 50);
  context.fillRect(445, 0, 110, 50);
  context.fillRect(630, 0, 110, 50);
  context.fillRect(815, 0, 110, 50);
  //median
  context.fillRect(0, 247, 1000, 50);

  context.fillStyle = 'black';
  context.fillRect(500, 57, 40, 40);
  context.fillRect(500, 122, 40, 40);
  context.fillRect(500, 187, 40, 40);
  context.fillRect(500, 252, 40, 40); //65px for jumps
  context.fillRect(500, 317, 40, 40);
  context.fillRect(500, 382, 40, 40);
  context.fillRect(500, 447, 40, 40);

//temporary lines
  context.moveTo(0, 173.5);
  context.lineTo(1000, 173.5);
  context.moveTo(0, 100);
  context.lineTo(1000, 100);
  context.moveTo(0, 370.5);
  context.lineTo(1000, 370.5);
  context.stroke();

  requestAnimationFrame(gameLoop);

});

window.requestAnimationFrame(gameLoop);