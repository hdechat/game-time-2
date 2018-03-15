var Block = require('./Block.js');

class Log extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  moveLeft() {
    this.x -= 1;
  }

  draw() {
    context.fillStyle = 'brown';
  }
}

module.exports = Log;