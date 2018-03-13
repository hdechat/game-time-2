class Logs extends Movers {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  moveLeft() {
    this.x -= speed //pixel speed
  }
}

module.exports = Logs;