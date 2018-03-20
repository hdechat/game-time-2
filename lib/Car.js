var Block = require('./Block.js');

class Car extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  moveRight(speed) {    
    this.x += speed;
    if (this.x > 1000) {
      this.x = 0;
    }
  }

  checkIfCarCollidesWithFrog(frog) {
    if(
      frog.x + frog.width < this.x ||
      frog.x > this.x + this.width ||
      frog.y + frog.height < this.y ||
      frog.y > this.y + this.height
      ){
      return false
      } else {
      return true;
      }
    }
}

module.exports = Car;

