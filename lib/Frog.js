var Block = require('./Block.js');

class Frog extends Block {

  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  hopLeft() {
    if (this.x > 25) {
      this.x -= 65;
    } else {
      this.x = 0;
    }
  }

  hopRight() {
    if (this.x < 935) {
      this.x += 65;
    } else {
      this.x = 960;
    }
  }

  hopUp() {
    if (this.y > 57) {
      this.y -= 65;
    }
  }

  hopDown() {
    if (this.y < 447) {
      this.y += 65;
    } else if (this.y < 460) {
      this.y += 13;
    }
  }

  drawDeadFrog() {
    if (true) {
      console.log('draw dead frog')
    }
  }
}

module.exports = Frog;