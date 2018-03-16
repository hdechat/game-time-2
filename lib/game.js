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
    this.logs = [];
    // this.gameCar1 = new Car(0 * 90, 390, 60, 40)
    // this.gameCar2 = new Car(1 * 200, 380, 60, 40)
    // this.gameCar3 = new Car(2 * 180, 390, 60, 40)
    // this.gameCar4 = new Car(3 * 200, 400, 60, 40)
    // this.gameCar5 = new Car(4 * 180, 380, 60, 40)

    
    // makeLogs(context) {
    //  for(let i=0; i<4; i++){
    //       this.[`log ${i + 1}`] = new Log(
    //         20 + Math.floor(Math.random() * 200) + 30,
    //         Math.floor(Math.random() * 150) + 50,
    //         Math.floor(Math.random() * 160) + 50,
    //         Math.floor(Math.random() * 25) + 15,
    //         )
    //       logs.push(this[`car ${i + 1}`])
    //   }
    // }
     
    this.gameLog1 = new Log(0 * 20, 200, 180, 40)
    this.gameLog2 = new Log(1 * 200, 180, 220, 35)
    this.gameLog3 = new Log(2 * 220, 160, 165, 28)
    this.gameLog4 = new Log(3 * 230, 150, 200, 30)
    this.gameLog5 = new Log(4 * 230, 170, 190, 25)

    // this.gameLoop = this.gameLoop.bind(this) //avoids having to rebind at 60Hz
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
    for (let i = 0; i < 5; i++) {
      var freshCar = new Car(i * 70, 400, 60, 40);
      freshCar.moveRight(context);
      this.gameCars.push(freshCar);
    }
  }

  // drawCars(context) {
  //   // console.log(this.gameCars)
  //   this.gameCars.forEach(function (car) {
  //     context.fillStyle = 'tan';
  //     context.fillRect(70, 200, 60, 40)
  //   })
  // }

  gameLoop() {
    this.context.clearRect(0, 0, 1000, 500);
    this.drawStaticElements(this.context)
    this.context.fillStyle = 'red';
    this.drawFrog(this.context)
    this.context.fillStyle = 'tan';
        
    if(this.makeCars.length) {
      this.gameCars.forEach((car)=>{
        car.moveRight(this.context)
      })
    } else {
      this.makeCars(this.context)
    }

    // this.gameCar1.draw(this.context, 'tan');
    // this.gameCar1.moveRight()
    // this.gameCar2.draw(this.context, 'tan');
    // this.gameCar2.moveRight()
    // this.gameCar3.draw(this.context, 'tan');
    // this.gameCar3.moveRight()
    // this.gameCar4.draw(this.context, 'tan');
    // this.gameCar4.moveRight()
    // this.gameCar5.draw(this.context, 'tan');
    // this.gameCar5.moveRight()
    this.context.fillStyle = 'brown';
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
   

    // requestAnimationFrame(this.gameLoop);
    requestAnimationFrame(this.gameLoop.bind(this)); //MUST UNDERSTAND THIS CODE!!
  }
}

module.exports = Game;





