var Block = require('./Block.js');

class Car extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);

    this.collision = false;
  }

  moveRight(context) {
    this.x += 1;
    if (this.x > 1000) {
      this.x = 0;
    }
  }

  checkIfCarCollidesWithFrog(frog) {
    let deadStatus;
    if(
      frog.x + frog.width < this.x ||
      frog.x > this.x + this.width ||
      frog.y + frog.height < this.y ||
      frog.y > this.y + this.height
      ){
      this.collision = false;
      deadStatus = false
      } else {
      this.collision = true;
      deadStatus = true;
      }
    return deadStatus
    }
    
}

module.exports = Car;

