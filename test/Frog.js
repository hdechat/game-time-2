class Frog {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  hopUp() {
    this.y -= 10;
  }
}

module.exports = Frog;