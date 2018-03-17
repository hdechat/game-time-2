var Block = require('./Block.js');

class Frog extends Block {

  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.frogRadius = 20
  }

  hopLeft() {
    if(this.x > 25){
      this.x -= 65;
    } else if (this.x > 0) {
      this.x -= 25;
    }
  }

  hopRight() {
    if(this.x < 935) {
      this.x += 65;
    } else if (this.x < 960) {
      this.x += 25;
    }
  }

  hopUp() {
    this.y -= 65;
  }

  hopDown() {
    if(this.y < 447){
      this.y += 65;
    } else if (this.y < 460) {
      this.y += 13;
    }
  }

  // draw(context, canvasHeight, canvasWidth) {
  //   context.fillStyle = this.color;
  //   context.fillRect(this.x, this.y, this.width, this.height);
  //   if(this.x  > canvasWidth || this.x < 0) {
  //     console.log('frog on the wall!!')
  //   }
  //   if(this.y > canvasHeight || this.y < 0) {
  //     console.log('frog on the ceiling!!');
  //   }
  // }
}

module.exports = Frog;