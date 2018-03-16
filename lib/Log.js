var Block = require('./Block.js');

class Log extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  moveLeft(context) {
    this.x -= 1;
    if (this.x < -200) {
      this.x = 1000
    }
  }
}

module.exports = Log;