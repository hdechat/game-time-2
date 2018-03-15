var Block = require('./Block.js');

class Car extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  draw(context) {
    context.fillStyle = 'tan';
    context.fillRect(this.x, this.y, this.width, this.height)
    return this;
  }

  moveRight(context) {
    this.x += 1;
  } 
}

module.exports = Car;

