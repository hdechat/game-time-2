var Block = require('./Block.js');

class Car extends Block {
 constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  moveRight() {
    this.x += 1;
  } 
}

module.exports = Car;

