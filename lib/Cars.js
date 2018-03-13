class Cars extends Movers {
 constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  moveRight() {
    this.x += speed; //pixel speed
  } 
}

module.exports = Cars;