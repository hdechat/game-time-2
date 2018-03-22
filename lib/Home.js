var Block = require('./Block.js');
class Home extends Block {


  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
      this.status = 'unoccupied';
  }

  checkForFrog(frog) {

    if(frog.y < 100){
      if(frog.x - this.x < 110 && this.status === 'unoccupied'){
        return true;
      } else {
        console.log('Cant have two frogs');
      } 
    } else {
      return false
    }
  }

}
module.exports = Home;