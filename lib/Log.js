var Block = require('./Block.js');

class Log extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.collision = false;
  }

  moveLeft(context) {
    this.x -= 1;
    if (this.x < -200) {
      this.x = 1000
    }
  }

  checkForFrog(frog) {
    if(
      frog.x + frog.width < this.x ||
      frog.x > this.x + this.width ||
      frog.y + frog.height < this.y ||
      frog.y > this.y + this.height
      ){
      this.collision = false;
      } else {
      this.collision = true;
      if(frog.x > 0)
      this.moveLeft.call(frog);
      }
  }
}

module.exports = Log;