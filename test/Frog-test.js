const car = require('./Car-test.js');

class Frog {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  checkSafety() {
    if(
      this.y // + this.height < car.y ||
       // this.x > car.x + car.width ||
      // this.y > car.y + car.height ||
      // this.x + this.width < car.x
      ) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Frog;