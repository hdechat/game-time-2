class Log {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.collision = false
  }

  collides(frog) {
    if(
      frog.x + frog.width < this.x ||
      frog.x > this.x + this.width ||
      frog.y + frog.height < this.y ||
      frog.y > this.y + this.height
      ){
      this.collision = false;
      } else {
      this.collision = true;
      this.moveLeft.call(frog);
      }
    }

  moveLeft() {
    this.x -= 10;
  }    
}

module.exports = Log;