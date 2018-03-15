var Block = require('./Block.js');

class Frog extends Block {

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
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