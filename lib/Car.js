var Block = require('./Block.js');

class Car extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  moveRight(context) {
    this.x += 1;
    if (this.x > 1000) {
      this.x = 0;
    }
  }
}

module.exports = Car;

