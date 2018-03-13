var Block = require('./Block.js');

class Cars extends Block {
 constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  moveRight() {
    this.x += speed; //pixel speed
  } 
}

module.exports = Cars;

