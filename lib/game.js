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
    this.gameFrog = new Frog(480, 447, 40, 40)
    this.gameCars = [];

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

  makeCars(context) {
    // console.log('i is a funk')
    let freshCar
    for (let i = 0; i < 5; i++) {
      freshCar = new Car(i * 70, 200, 60, 40)
      // this.gameCars.push(freshCar)
      context.fillStyle = 'tan';
      context.fillRect(i * 70, 200, 60, 40)
    }
  }


  // drawCars(context) {
  //   // console.log(this.gameCars)
  //   this.gameCars.forEach(function (car) {
  //     context.fillStyle = 'tan';
  //     context.fillRect(70, 200, 60, 40)
  //   })
  // }

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
    // this.drawCars(this.context)
    // if (!this.gameCars.length) {
    //   this.makeCars(this.context)
    // } 
    this.makeCars(this.context)
    // else {
      
    //   this.makeCars(this.context)
     
    // }


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





