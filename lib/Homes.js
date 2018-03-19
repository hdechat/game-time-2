var Block = require('./Block.js');

class Homes extends Block {

  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
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
    if (frog.y < 100 && 
        (frog.x > 75 && frog.x < 185 ||
        frog.x > 260 && frog.x < 370 ||
        frog.x > 445 && frog.x < 555 ||
        frog.x > 630 && frog.x < 740 ||
        frog.x > 815 && frog.x < 925)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Homes;