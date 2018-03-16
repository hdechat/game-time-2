class Block {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    // if(this.x  > canvas.width || this.x < 0) {
    //   console.log('frog on the wall!!')
    // }
  
    // if(this.y > canvas.height || this.y < 0) {
    //   console.log('frog on the ceiling!!');
    // }
    return this;
  }
}

module.exports = Block;


