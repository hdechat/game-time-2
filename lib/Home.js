var Block = require('./Block.js');
class Homes extends Block {


  constructor(x, y, width, height, color) {
    super(x, y, width, height, color)
      this.status = 'unoccupied'
      this.checkForFrog = this.checkForFrog.bind(this)
      // this.y = y,
      // this.width = width,
      // this.height = height
  }

  checkForFrog(frog) {

    if(frog.y < 100){
      if(this.x - frog.x < 110 && this.status === 'unoccupied'){
        this.status = 'occupied';
        return true
      } else {
        console.log('Cant have two frogs')
      }
      
    } else {
      return false
    }

  }
  //   if (frog.y < 100 
  //     // &&
  //     // (frog.x > 75 && frog.x < 185 ||
  //     //   frog.x > 260 && frog.x < 370 ||
  //     //   frog.x > 445 && frog.x < 555 ||
  //     //   frog.x > 630 && frog.x < 740 ||
  //     //   frog.x > 815 && frog.x < 925)
  //   ) {
  //     if (((this.x - frog.x) < 110) && this.status === 'unoccupied') {
  //       this.status = 'occupied';
  //       console.log(this.status, frog.x, this.x)
  //       return true;
        
  //     } else {
  //       alert('Can\'t have two frogs in 1 home!!')
  //       return false
  //     }    
  //   } else {
  //     return false
  //   }
  // }
}
module.exports = Homes;