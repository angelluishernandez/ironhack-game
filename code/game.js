class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.intervalId = null;
    this.tick = 0;
    this.board = new Board(ctx);

    // Towers
    this.posTowerX,
    this.posTowerY 
    this.tower = new Tower(ctx) // This one has to be removed after the test with firing are done




    ////////////////////////////////////////////////////////////////////
    //Add this one again when the class is remade
    /////////////////////////////////////////////////////////////////
    // this.tower = new Tower(ctx, this.posTowerX, this.posTowerY);
    ////////////////////////////////////////////////////////////////////
    //
    /////////////////////////////////////////////////////////////////
    // this.events = new Events(ctx);
    this.towers = []
 
    

    // Enemies
    this.enemy = new Enemy(ctx);
    this.enemies = [];
    this.enemiesCrossed = [];

    this.lives = 5;


    // laser positions

    this.bulletsPositions = [
      
    ]

    this.shootingSpeed = 300

    

    // Is Down 

    this.isDown = false
  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkEnemyPosition();
      

      // this.checkCollision()
      
      if (this.tick++ > 100) {
        this.tick = 0;
        this.addEnemy();
        this.shootLaser()
      }
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  draw() {
    this.board.draw();
    // this.towers.forEach(tower => tower.draw(tower.x, tower.y));
    this.tower.draw()
    this.enemies.forEach(enemy => enemy.draw());
    this.bulletsPositions.forEach(bullet => bullet.draw())
  }

  move() {
    this.enemies.forEach(enemy => enemy.move());
  }

  addEnemy() {
    if (this.enemies.length < 20) {
      // console.log(this.enemies.length);
      const enemy = new Enemy(this.ctx);
      this.enemies.push(enemy);
    }
  }



  ///////////////////////////////////////////////////77
/////////Check this function 
//////////////////////////////////////////////////
  /////////////////////////////////////////////
  checkEnemyPosition() {
    const distanceToEnemyX = (this.enemies[0].x - this.tower.r) - this.tower.r
    const distanceToEnemyY = (this.enemies[0].y - this.tower.r) - this.tower.r




    const distance = Math.sqrt(distanceToEnemyX * distanceToEnemyX + 
      distanceToEnemyY * distanceToEnemyY); 
  
    let shootingRate = distance / this.shootingSpeed
    
    const xPixels = distanceToEnemyX / shootingRate
    const yPixels = distanceToEnemyY / shootingRate



    

  
  }

  addBullet(){
    if(this.inRange()){
      const newBullet = new Bullet()



    }




  }


  inRange(){
    this.enemies.forEach(enemy =>{
      if(enemy.x + enemy.w && enemy.y - enemy.h){

        return true
      }


    })


  }




}





  // isDown(){
  //   this.ctx.canvas.onmousedown = function(e){
  //     this.isDown = true


  //   }

  ////////////////////////////////////////////////////////////////////////////////////
  //TODO
  ///////////////////////////////////////////////////////////////////////////

  // placeTower(x, y) {
  //  this.ctx.canvas.onmousedown = function(){

  //   const newTower = new Tower(this.ctx, x, y);
  //   this.towers.push(newTower);
    
  //   console.log("entra")
  //   console.log(this.towers.length)
  //   console.log(this.towers)

  //  }
      

  //   }
     

  
  


// deleteEnemy(){
//   this.enemies.forEach(function(enemy){
//     if(enemy.x > this.ctx.width){
//       console.log("entra")
//       //Use filter to check if the number of enemies exceeds the number of lives.
//       this.enemies.filter(enemy =>{

//         if(enemy.x > this.ctx.width){
//           console.log("entra")
//           this.enemiesCrossed.push(enemy)
//           if(this.enemiesCrossed >= this.lives){
//             alert("Game over")
//           }
//         }

//       })
//     }

//   })

// }

// checkCollision(){
//   if(this.enemy.x + this.enemy.w === this.tower.r ||
// this.enemy.y + this.enemy.h === this.tower.r ||
// this.enemy.x - this.enemy.w === this.tower.r ||
// this.enemy.y - this.enemy.h === this.tower.r ||
// ){

//     delete this.enemy
//   }
// }
