class StaticElements {
  constructor(context){

  }
  drawLaunchPad(context) {
    context.fillStyle = 'green';
    context.fillRect(0, 445, 1000, 500);
    // return this;
  }

  // draw(context) {
  //   context.fillStyle = 'tan';
  //   context.fillRect(this.x, this.y, this.width, this.height)
  //   return this;
  // }

  drawPeninsulas(context) {
    context.fillStyle = 'green';
    for (var i = 0; i < 6; i++) {
      context.fillRect(i * 185, 0, 75, 100);
    }
  }

  drawHomeBackWall(context) {
    context.fillStyle = 'green';
    for (var i = 0; i < 5; i++) {
      context.fillRect(i * 185 + 75, 0, 110, 50);
    }
  }

  drawMedian(context) {
    context.fillStyle = 'green';
    context.fillRect(0, 247, 1000, 50);
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