var Block = require('./Block.js');
var Logs = require('./Logs.js');
var Cars = require('./Cars.js');
var Frogs = require('./Frogs.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d'); 


requestAnimationFrame(function gameLoop() {

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
  context.fillStyle = 'black';
  for(var i=0; i<7; i++) {
    context.fillRect(500, i * 65 + 57 ,40, 40);
  }

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