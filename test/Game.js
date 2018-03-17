const Log = require('./Log.js');
const Frog = require('./Frog.js')

class Game {
  constructor(height, width){
    this.height = height;
    this.width = width;
    this.log = new Log(40, 20, 60, 40);
    this.frog1 = new Frog(50, 50, 40, 40);
    this.frog2 = new Frog(50, 50, 40, 40);
    this.frog3 = new Frog(50, 50, 40, 40);
    this.playersArray = [this.frog1, this.frog2, this.frog3];
    this.player = this.playersArray[0];
  }

  playerDies(){
    this.playersArray.shift();
    this.player = this.playersArray[0];
  }
}

module.exports = Game;
