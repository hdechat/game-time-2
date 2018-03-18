var Block = require('./Block.js');

class Homes extends Block {

  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.collision = false
  }

  drawHomesAndSafeFrogs(context, safeFrogsArray) {
    for (var i = 0; i < 5; i++) {
      context.fillStyle = '#004F00';
      context.fillRect(i * 185 + 75, 50, 110, 50)
    }
    safeFrogsArray.forEach((frog) => {
      context.fillStyle = 'red';
      context.fillRect(frog.x, frog.y, frog.width, frog.height, 'red')
    })
  }

  checkForFrog(frog) {
    if (
      // frog.x + frog.width < this.x ||
      // frog.x > this.x + this.width ||
      // frog.y + frog.height < this.y ||
      // frog.y > this.y + this.height
      frog.y < 100
    ) {
      this.collision = true;
    } else {
      this.collision = false;
    }
    return this.collision
  }


}
module.exports = Homes;