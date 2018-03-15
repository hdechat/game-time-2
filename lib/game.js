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
    this.gameCar1 = new Car(0* 90, 390, 60, 40)
    this.gameCar2 = new Car( 1* 200, 380, 60, 40)
    this.gameCar3 = new Car( 2 *180, 390, 60, 40)
    this.gameCar4 = new Car(3 * 200, 400, 60, 40)
    this.gameCar5 = new Car(4 * 180, 380, 60, 40)
    this.gameLog1 = new Log(0* 20, 200, 180, 40)
    this.gameLog2 = new Log( 1* 200, 180, 220, 35)
    this.gameLog3 = new Log( 2 *220, 160, 165, 28)
    this.gameLog4 = new Log(3 * 230, 150, 200, 30)
    this.gameLog5 = new Log(4 * 230, 170, 190, 25)

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

  // makeCars(context) {
  //   for (let i = 0; i < 5; i++) {
  //     this.gameCar = new Car(i * 70, 200, 60, 40)
  //     context.fillStyle = 'tan';
  //     context.fillRect(i * 70, 200, 60, 40)
  //     this.gameCars.push(gameCar)
  //   }
  // }



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
    this.gameCar1.draw(this.context);
    this.gameCar1.moveRight()
    this.gameCar2.draw(this.context);
    this.gameCar2.moveRight()
    this.gameCar3.draw(this.context);
    this.gameCar3.moveRight()
    this.gameCar4.draw(this.context);
    this.gameCar4.moveRight()
    this.gameCar5.draw(this.context);
    this.gameCar5.moveRight()
    this.gameLog1.draw(this.context);
    this.gameLog1.moveLeft()
    this.gameLog2.draw(this.context);
    this.gameLog2.moveLeft()
    this.gameLog3.draw(this.context);
    this.gameLog3.moveLeft()
    this.gameLog4.draw(this.context);
    this.gameLog4.moveLeft()
    this.gameLog5.draw(this.context);
    this.gameLog5.moveLeft()
    // if (!this.gameCars.length) {
    //   this.makeCars(this.context)
    // } 
    // this.makeCars(this.context)
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





