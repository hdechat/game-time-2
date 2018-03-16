var Block = require('./Block.js');

class Car extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  moveRight(context) {
    this.x += 1;
    if (this.x > 1000) {
      this.x = 0
    }
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  // draw(context) {
  //   context.fillStyle = this.color;
  //   context.fillRect(this.x, this.y, this.width, this.height);
  // }
  // for (var i=0; i<cars.length; i++)
	// {	
	// 	ctx.drawImage(froggerImage,CAR_OFFSET_X,0,CAR_WIDTH,CAR_HEIGHT,cars[i].x,cars[i].y,CAR_WIDTH,CAR_HEIGHT);
	// }
}

module.exports = Car;

