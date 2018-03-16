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
    this.gameFrog = new Frog(480, 447, 40, 40, 'red');
    this.gameCars = [];
    for (var i=0; i<6; i++){
      for (var j=0; j<2; j++) {
        var freshCar = new Car(i * 90, j * 80 + 310, 60, 40, 'tan');
        this.gameCars.push(freshCar);
      }
    }
    this.gameLogs = [];
    for (var i=0; i<6; i++){
      for (var j=0; j<2; j++) {
        var freshLog = new Log(i * 90, j * 80 + 110, 60, 40, 'brown')
        this.gameLogs.push(freshLog);
      }
    }
  }

  drawStaticElements(context) {
    this.staticElements.drawLaunchPad(context)
    this.staticElements.drawPeninsulas(context)
    this.staticElements.drawHomeBackWall(context)
    this.staticElements.drawMedian(context)
    this.staticElements.drawLaneLines(context)
  }

  gameLoop() {
    this.context.clearRect(0, 0, 1000, 500);
    this.drawStaticElements(this.context)
    for(var i=0; i<6; i++){
      this.gameCars[i].draw(this.context).moveRight();
      this.gameLogs[i].draw(this.context).moveLeft();
    }
    this.gameFrog.draw(this.context);
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

module.exports = Game;





