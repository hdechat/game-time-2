const Log = require('./Log.js');
const Car = require('./Car.js');
const Frog = require('./Frog.js');
const StaticElements = require('./StaticElements.js')
const Homes = require('./Homes.js')

class Game {

    constructor(context, canvasHeight, canvasWidth) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.context = context;
        this.staticElements = new StaticElements();
        this.gameFrog = new Frog(480, 447, 40, 40, 'red');
        this.gameFrogCount = 5
        this.homes = new Homes;
        this.deadStatus = false
        this.deadFrogs = 0
        this.gameCars = [];
        this.cars = [];
        this.frogHomeSafe = false;
        this.safeFrogsArray = []
        this.score = 0
        //BOTTOM LANE
        for (let i = 0; i < 4; i++) {
            let freshCar = new Car(i * 165, Math.floor(Math.random() * 20) + 375, 70, 40, 'tan');
            this.cars.push(freshCar);
        }
        //TOP LANE
        for (let i = 0; i < 3; i++) {
            let freshCar = new Car(i * 185, Math.floor(Math.random() * 20) + 305, 70, 40, 'tan');
            this.cars.push(freshCar);
        }
        this.gameLogs = [];
        //TOP STREAM
        for (let i = 0; i < 4; i++) {
            let freshLog = new Log(i * 290, Math.floor(Math.random() * 20) + 180, Math.floor(Math.random() * 50) + 100, Math.floor(Math.random() * 20) + 18, 'brown')
            this.gameLogs.push(freshLog);
        }
        //BOTTOM STREAM
        for (let i = 0; i < 3; i++) {
            let freshLog = new Log(i * 290, Math.floor(Math.random() * 20) + 110, Math.floor(Math.random() * 50) + 200, Math.floor(Math.random() * 20) + 18, 'brown')
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
        //____________________
        this.homes.drawHomesAndSafeFrogs(this.context, this.safeFrogsArray)

        this.frogHomeSafe = this.homes.checkForFrog(this.gameFrog)
        if (this.score < 5) {
            if (this.frogHomeSafe) {
                this.safeFrogsArray.push(this.gameFrog)
                this.gameFrog = ''
                this.gameFrog = new Frog(480, 447, 40, 40, 'red')
            }
            if (this.safeFrogsArray.length) {
                this.score = this.safeFrogsArray.length
            }
        } else {
            console.log('Game over, you won')
        }
        //______________________

        this.cars.forEach((car) => {
            car.draw(this.context).moveRight();
            this.deadStatus = car.checkIfCarCollidesWithFrog(this.gameFrog)
            if (this.deadStatus) {
                this.gameFrog.drawDeadFrog();
                this.deadFrogs++;
                if (this.deadFrogs === 5) {
                    alert(`Game Over! Score: ${this.score}`)
                } else {
                    alert('dead frog!')
                    this.gameFrogCount--
                    this.gameFrog = ''
                    this.gameFrog = new Frog(480, 447, 40, 40, 'red')
                    this.deadStatus = false
                }
            }
        })

        this.gameLogs.forEach((log) => {
            log.draw(this.context).moveLeft();
            log.checkForFrog(this.gameFrog);
        })


        this.gameFrog.draw(this.context, this.canvasHeight, this.canvasWidth);
        requestAnimationFrame(this.gameLoop.bind(this));

    }
}

module.exports = Game;





