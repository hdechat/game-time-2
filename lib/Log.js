var Block = require('./Block.js');

class Log extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.collision = false;
    this.speed = 1;
  }

  moveLeft(speed) {
    this.x -= speed;
    if (this.x < -200) {
      this.x = 1000
    }
  }

  checkForFrog(frog, speed) {
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
      // this.moveLeft.call(frog);
        frog.x -= speed;
      }
  }
}

module.exports = Log;