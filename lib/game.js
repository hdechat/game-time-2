const Block = require('./Block.js');
const Log = require('./Log.js');
const Car = require('./Car.js');
const Frog = require('./Frog.js');
const StaticElements = require('./StaticElements.js')

class Game {
  constructor(context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
    this.staticElements = new StaticElements();
    this.frogCount = 0
    this.gameFrog = new Frog(480, 447, 40, 40)
    this.gameLoop = this.gameLoop.bind(this) //avoids having to rebind at 60Hz
  }

  drawStaticElements(context) {
    this.staticElements.drawLaunchPad(context)
    this.staticElements.drawPeninsulas(context)
    this.staticElements.drawHomeBackWall(context)
    this.staticElements.drawMedian(context)
    this.staticElements.drawLaneLines(context)
  }
  
  drawFrog(context) {
    this.gameFrog.draw(context)  
  }

//   function step(timestamp) {
//   if (!start) start = timestamp;
//   var progress = timestamp - start;
//   element.style.left = Math.min(progress / 10, 200) + 'px';
//   if (progress < 2000) {
//     window.requestAnimationFrame(step);
//   }
// }

// gameLoop(timestamp) {
//   if (!start) start = timestamp;
//   var progress = timestamp - start;

gameLoop() { 
  this.context.clearRect(0, 0, 1000, 500);
  this.drawStaticElements(this.context)
  this.drawFrog(this.context)
  this.


  // car1.draw(context);
  // car1.moveRight();
  // log1.draw(context);
  // log1.moveLeft(); 
  // frog1.draw(context);

    requestAnimationFrame(this.gameLoop);
  };

  // window.requestAnimationFrame(this.gameLoop.bind(this)); //MUST UNDERSTAND THIS CODE!!
}

module.exports = Game;





