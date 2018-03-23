
var Block = require('./Block.js');

class StaticElements extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  drawLaneLines(context) {
    context.moveTo(0, 173.5);
    context.lineTo(1000, 173.5);
    context.moveTo(0, 100);
    context.lineTo(1000, 100);
    context.moveTo(0, 370.5);
    context.lineTo(1000, 370.5);
    context.stroke();
  }
}

module.exports = StaticElements;