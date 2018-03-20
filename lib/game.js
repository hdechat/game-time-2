const Log = require('../lib/Log.js');
const Car = require('../lib/Car.js');
const Frog = require('../lib/Frog.js');
const StaticElements = require('./StaticElements.js')
const Homes = require('../lib/Homes.js')

class Game {

    constructor(context) {
        this.context = context;
        this.staticElements = new StaticElements();
        this.gameFrog = new Frog(480, 447, 40, 40, 'red');
        this.gameFrogCount = 5
        this.homes = new Homes();
        this.deadStatus = false
        this.deadFrogs = 0
        this.cars = [];
        this.gameLogs = [];
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

    checkFrogDrowns() {
        let froglessLogs = this.gameLogs.filter((log) => {
            return log.collision === false;
        });
        if(froglessLogs.length === 7 && this.gameFrog.y < 247) {
            this.frogDies();
        }
    }

    frogDies() {
        this.gameFrog.drawDeadFrog();
        this.deadFrogs++;
        if (this.deadFrogs === 3) {
            alert(`Game Over! Score: ${this.score}`)
        } else {
            this.gameFrogCount--
            this.gameFrog = new Frog(480, 447, 40, 40, 'red')
            this.deadStatus = false
            alert('dead frog!')
        }
    }

    

    gameLoop() {
        this.context.clearRect(0, 0, 1000, 500);
        this.drawStaticElements(this.context);
        
        this.homes.drawHomesAndSafeFrogs(this.context, this.safeFrogsArray);
        
        

        this.frogHomeSafe = this.homes.checkForFrog(this.gameFrog);
        

        if (this.score < 5) {
            // console.log(this.score);
            if (this.frogHomeSafe) {
                this.safeFrogsArray.push(this.gameFrog)
                this.gameFrog = new Frog(480, 447, 40, 40, 'red')
                this.score = this.safeFrogsArray.length
            }
        } else {   
            alert(`Game Over! You WON!! Score: ${this.score}`)
            document.location.reload();    
        }
        this.cars.forEach((car) => {
            car.draw(this.context).moveRight();
            this.deadStatus = car.checkIfCarCollidesWithFrog(this.gameFrog)
            if (this.deadStatus) {
                this.frogDies();
            } 
        })

        this.gameLogs.forEach((log) => {
            log.draw(this.context).moveLeft();
            log.checkForFrog(this.gameFrog);
        })

        this.checkFrogDrowns();
        this.gameFrog.draw(this.context);
        requestAnimationFrame(this.gameLoop.bind(this));

    }
}

module.exports = Game;





