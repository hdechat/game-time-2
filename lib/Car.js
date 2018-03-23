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
    let frogLeftOfCar = frog.x + frog.width < this.x;
    let frogRightOfCar = frog.x > this.x + this.width;
    let frogAboveCar = frog.y + frog.height < this.y;
    let frogBelowCar = frog.y > this.y + this.height;
    if (
      frogLeftOfCar ||
      frogRightOfCar ||
      frogAboveCar ||
      frogBelowCar
    ) {
      return false
    } else {
      return true;
    }
  }
}

module.exports = Car;

