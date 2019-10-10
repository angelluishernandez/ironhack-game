class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.intervalId = null;
    this.tick = 0;
    this.board = new Board(ctx);

    // Towers
    this.posTowerX, this.posTowerY;
    this.tower = new Tower(ctx); // This one has to be removed after the test with firing are done
    this.waypointIndex = 0;
    this.towers = []

  
    // Enemies
    this.enemies = [];
    this.enemiesCrossed = [];

    this.lives = 5;

    // laser positions

    this.bullets = [];

    // Is Down

    this.isDown = false;
  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      // this.inRange(this.towers, this.enemies)
      // this.checkEnemyPosition();
      // this.towerShooting()
      this.shoot()

0
      if (this.tick++ > 100) {
        this.tick = 0;
        this.addEnemy();
      }
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  draw() {
    this.board.draw();
    this.towers.forEach(tower => tower.draw(tower.x, tower.y));
    this.tower.draw();
    this.enemies.forEach(enemy => enemy.draw());
    this.bullets.forEach(bullet => bullet.draw());
  }

  move() {
    this.enemies.forEach(enemy => enemy.move());
    this.bullets.forEach(bullet => bullet.move(this.enemies[0]));
  }

  addEnemy() {
    if (this.enemies.length < 20) {
      // console.log(this.enemies.length);
      const enemy = new Enemy(this.ctx);
      this.enemies.push(enemy);
    }
  }

  ///////////////////////////////////////////////////////////////////
  // Checking if tower is in path

  /////////////////////////////////////////////////////////////////////

  checkIfInPath(x, y) {
    for (let i = 0; i < this.board.waypoints.length - 1; i++) {
      // check horizontal and moving right

      if (
        x <= this.board.waypoints[i + 1].x + 40 &&
        x >= this.board.waypoints[i].x &&
        y <= this.board.waypoints[i].y + 40 &&
        y >= this.board.waypoints[i].y - 40
      ) {
        return true;
      }

      // check vertical and moving down
      else if (
        y <= this.board.waypoints[i + 1].y + 40 &&
        y >= this.board.waypoints[i].y &&
        x <= this.board.waypoints[i].x + 40 &&
        x >= this.board.waypoints[i].x - 40
      ) {
        return true;
      }

      // check horizonal and moving left
      else if (
        x >= this.board.waypoints[i + 1].x + 40 &&
        x <= this.board.waypoints[i].x &&
        y <= this.board.waypoints[i].y + 40 &&
        y >= this.board.waypoints[i].y - 40
      ) {
        return true;
      } 
    }
  }

  shoot(){
    
    this.enemies.forEach(enemy =>{
      this.tower.inRange(enemy)
      
    })



  }

/////////////////////////////////
//Shooting logic
//////////////////////////
  

    
}



/// towers finds targets

//   checkCollision() {
//     for (let i = 0, l = this.enemies.length; i < l; i++) {
//       if (
//         this.enemies.x + this.enemies[i].w === this.tower.x + this.tower.r ||
//         this.enemy.y + this.enemies[i].h === this.tower.x + this.tower.r
//       ) {
//         this.enemies.splice(i, 1);
//       }
//     }
//   }
// }

// findTarget(enemies){
//   // If no enemies within reach
//     if(this.enemies.length === 0){
//       console.log("1")
//       this.tower.target = null
//       return
//     }
//   // Find the first enemy

//   for(let i = 0, l = this.enemies.length; i < l; i++){

//     const distance = (this.enemies[i].x - this.tower.x) * (this.enemies[i].x - this.tower.x ) +
//       (this.enemies[i].y - this.tower.y) * (this.enemies[i].y -this.tower.y )
//       if(distance < (this.tower.range * this.tower.range)){
//         this.tower.target = this.enemies[i]
//         return

//       }
//       console.log(this.tower.target)
//   }
//     }

//   findShootingVector(){
//     if(!this.tower.target) return false
//     const distX = this.tower.target.x - this.tower.x
//     const distY= this.tower.target.y - this.tower.y
//     const distance = Math.sqrt(distX * distX + distY * distY)

//     this.tower.firePositionX = this.tower.x + this.tower.r * distX / distance
//     this.tower.firePositionY = this.tower.y + this.tower.r * distY / distance
//     console.log("3")
//   }

//   fire(){
//     this.tower.rateOfFire--
//     if(this.tower.target && this.tower.rateOfFire <= 0){
//       this.bullets.push(new Bullet(this.ctx, this.tower.firePositionX, this.tower.firePositionY, this.tower.target))
//       console.log(new Bullet)
//       console.log(this.bullets)

//       console.log("4")
//     }

//   }

// towerShooting(){
//   this.towers.forEach(tower  =>{
//     this.findTarget(this.enemies)
//     this.findShootingVector()
//     this.fire()

//   })

// }

///////////////////////////////////////////////////77
/////////Check this function
//////////////////////////////////////////////////
/////////////////////////////////////////////
//   checkEnemyPosition() {
//     const distanceToEnemyX = (this.enemies[0].x - this.tower.r) - this.tower.r
//     const distanceToEnemyY = (this.enemies[0].y - this.tower.r) - this.tower.r

//     const distance = Math.sqrt(distanceToEnemyX * distanceToEnemyX +
//       distanceToEnemyY * distanceToEnemyY);

//     let shootingRate = distance / this.shootingSpeed

//     const xPixels = distanceToEnemyX / shootingRate
//     const yPixels = distanceToEnemyY / shootingRate

//   }

//   addBullet(){
//     if(this.inRange()){
//       const newBullet = new Bullet()

//     }

//   }

//   inRange(){
//     this.enemies.forEach(enemy =>{
//       if(enemy.x + enemy.w && enemy.y - enemy.h){

//         return true
//       }

//     })

//   }

// }

// isDown(){
//   this.ctx.canvas.onmousedown = function(e){
//     this.isDown = true

//   }

////////////////////////////////////////////////////////////////////////////////////
//TODO
///////////////////////////////////////////////////////////////////////////

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
