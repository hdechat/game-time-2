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
    // for (let i=0; i<6; i++){
    //   for (let j=0; j<2; j++) {
    //     let freshCar = new Car(i * 90, j * 80 + 310, 60, 40, 'tan');
    //     this.gameCars.push(freshCar);
    //   }
    // }
    this.cars = [];
    //BOTTOM LANE
    for (let i=0; i<6; i++){
        let freshCar = new Car(i *165,  Math.floor(Math.random() * 20) + 375 , 70, 40, 'tan');
        this.cars.push(freshCar);
    }
    //TOP LANE
    for (let i=0; i<5; i++){
        let freshCar = new Car(i *185,  Math.floor(Math.random() * 20) + 305 , 70, 40, 'tan');
        this.cars.push(freshCar);
    }  
    // for (let i=0; i<6; i++){
    //   for (let j=0; j<2; j++) {
    //     let freshLog = new Log(i * 90, j * 80 + 110, 60, 40, 'brown')
    //     this.gameLogs.push(freshLog);
    //   }
    // }
    this.gameLogs = [];
    //TOP STREAM
    for (let i=0; i<4; i++){
      let freshLog = new Log(i * 290,  Math.floor(Math.random() * 20) + 180 , Math.floor(Math.random() * 50) + 100, Math.floor(Math.random() * 20) + 18, 'brown')
      this.gameLogs.push(freshLog);
      }
    //BOTTOM STREA
    for (let i=0; i<3; i++){
      let freshLog = new Log(i * 290,  Math.floor(Math.random() * 20) + 110 , Math.floor(Math.random() * 50) + 200, Math.floor(Math.random() * 20) + 18, 'brown')
      this.gameLogs.push(freshLog);
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
    this.cars.forEach((car) => {
      car.draw(this.context).moveRight();
    })
    this.gameLogs.forEach((log)=>{
      log.draw(this.context).moveLeft();
    })

    // for(let i=0; i<6; i++){
    //   // this.gameCars[i].draw(this.context).moveRight();
    //   this.gameLogs[i].draw(this.context).moveLeft();
    // }
    this.gameFrog.draw(this.context, this.canvasHeight, this.canvasWidth);
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

module.exports = Game;





