var Block = require('./Block.js');
class Homes extends Block {


  constructor(x, y, width, height, color) {
    super(x, y, width, height, color)
    this.occupiedHomes = {
      firstHome: 'unoccupied',
      secondHome: 'unoccupied',
      thirdHome: 'unoccupied',
      fourthHome: 'unoccupied',
      fifthHome: 'unoccupied'
    }
  }

  checkForFrog(frog) {
    if (frog.y < 100 &&
      (frog.x > 75 && frog.x < 185 ||
        frog.x > 260 && frog.x < 370 ||
        frog.x > 445 && frog.x < 555 ||
        frog.x > 630 && frog.x < 740 ||
        frog.x > 815 && frog.x < 925)
    ) {
      //fifthHome
      
      if (((925 - frog.x) < 110) && this.occupiedHomes.fifthHome === 'unoccupied') {
        this.occupiedHomes.fifthHome = 'occupied';
        return true;
      } else if (((740 - frog.x) < 110) && this.occupiedHomes.fourthHome === 'unoccupied') {
        this.occupiedHomes.fourthHome = 'occupied';
        return true;
      } else if (((555 - frog.x) < 110) && this.occupiedHomes.thirdHome === 'unoccupied') {
        
        this.occupiedHomes.thirdHome = 'occupied';
        console.log(this.occupiedHomes.thirdHome)
        return true;
      } else if (((370 - frog.x) < 110) && this.occupiedHomes.secondHome === 'unoccupied'){
        this.occupiedHomes.secondHome = 'occupied';
        return true;
      } else if (((185 - frog.x) < 110) && this.occupiedHomes.firstHome === 'unoccupied') {
        this.occupiedHomes.firstHome = 'occupied';
        return true;
      } else {
        alert('Can\'t have two frogs in 1 home!!')
        return false;
      }
    }else{
      return false
    }
  } 

  // if(740-frog.x < 110) {
  //   this.occupiedHomes.fourthHome = 'occupied'
  // }
  // if(740-frog.x < 110) {
  //   this.occupiedHomes.thirdHome = 'occupied'
  // }
  // if(740-frog.x < 110) {
  //   this.occupiedHomes.secondHome = 'occupied'
  // }
  // if(740-frog.x < 110) {
  //   this.occupiedHomes.firstHome = 'occupied'
  // }





}
module.exports = Homes;