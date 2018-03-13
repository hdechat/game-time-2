
class Frogs extends Movers {

  constructor(x, y, width, height) {
    super(x, y, width, height);
  } 

   moveLeft() {
    this.x -= speed //pixel speed
  }

  moveRight() {
    this.x += speed //pixel speed
  }

  moveUp() {
    this.y -= 65;
  }

  moveDown() {
    this.y += 65;
  }

}

module.exports = Frogs;