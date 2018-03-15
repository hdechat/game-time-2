var Block = require('./Block.js');

class Car extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    
    context.fillStyle = 'tan';
    context.fillRect(this.x, this.y, this.width, this.height)
    // return this;
  }

  moveRight(context) {
    this.x += 1;
  } 
}

module.exports = Car;

