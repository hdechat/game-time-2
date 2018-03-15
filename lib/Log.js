var Block = require('./Block.js');

class Log extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
      this.x = x
      this.y = y;
      this.width = width;
      this.height = height;
  }

  moveLeft(context) {
    this.x -= 1;
    if (this.x < -200) {
      this.x = 1000
    }
  }

  draw(context) {

    context.fillStyle = 'brown';
    context.fillRect(this.x, this.y, this.width, this.height)
    // return this;
  }
}

module.exports = Log;