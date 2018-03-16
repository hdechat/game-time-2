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

  draw(context, canvasHeight, canvasWidth) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    if(this.x  > canvasWidth || this.x < 0) {
      console.log('frog on the wall!!')
    }
    if(this.y > canvasHeight || this.y < 0) {
      console.log('frog on the ceiling!!');
    }
  }
}

module.exports = Frog;