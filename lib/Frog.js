var Block = require('./Block.js');

class Frog extends Block {

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  hopLeft() {
    this.x -= 65;
    //pixel speed
  }

  hopRight() {
    this.x += 65;//pixel speed
  }

  hopUp() {
    this.y -= 65;
  }

  hopDown() {
    this.y += 65;
  }
}

module.exports = Frog;