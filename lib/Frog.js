var Block = require('./Block.js');

class Frog extends Block {

  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.frogRadius = 20
  }
  

  hopLeft() {
    this.x -= 65;
  }

  hopRight() {
    this.x += 65;
  }

  hopUp() {
    this.y -= 65;
  }

  hopDown() {
    this.y += 65;
  }
}

module.exports = Frog;