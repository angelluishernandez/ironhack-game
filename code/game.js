class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.intervalId = null;
    this.tick = 0;
    this.board = new Board(ctx);
    // Player

    this.player = new Player(ctx);

    // Towers
    this.tower = new Tower(ctx, null, null);
    this.posTowerX, this.posTowerY;
    this.waypointIndex = 0;
    this.towers = [];

    // Enemies
    this.enemies = [];
    this.numberOfEnemiesFinished = 0;
    this.numberOfKills = 0
    this.lives = 5;
    this.enemiesSpawned = 0
    // Healthy food
    this.fruit = new Fruit(ctx)


    //Wave control

    this.wave = 0


    ////////////
    //Score
    this.caloriesBurned = 0





  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      
      this.checkCollisions();
      this.shoot();
      this.removeFirstTower()
      this.enemiesEnded();
      this.playerColWithEnemy()
      this.playerColWithHealthyFood()
      // this.enemiesPastFinish();
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
    this.player.draw()
    this.towers.forEach(tower => tower.draw());
    this.enemies.forEach(enemy => enemy.draw());
    this.fruit.draw()
    
  }

  move() {
    this.player.move()
    this.enemies.forEach(enemy => enemy.move());
    this.towers.forEach(tower => tower.move());
    this.fruit.move()
  }

  /////////////////////////////////////
  //Enemies
  /////////////////////////////////////

  addEnemy() {
    if (this.enemiesSpawned < 19) {
      const enemy = new Enemy(this.ctx);
      this.enemiesSpawned += 1
      this.enemies.push(enemy);
    }
  }


  waveControl(){
    if(this.enemiesSpawned === 20 && 
      this.numberOfEnemiesFinished < 5 &&
      this.numberOfKills >= 15 ){
        this.wave += 1

      }


  }

  ///////////////////////////////////////////////////////////////////
  // Checking if tower is in path

  /////////////////////////////////////////////////////////////////////

  checkIfInPath(x, y) {
    for (let i = 0; i < this.board.waypoints.length - 1; i++) {
      // check horizontal and moving right

      if (
        x <= this.board.waypoints[i + 1].x + 50 &&
        x >= this.board.waypoints[i].x &&
        y <= this.board.waypoints[i].y + 50 &&
        y >= this.board.waypoints[i].y - 50
      ) {
        return true;
      }

      // check vertical and moving down
      else if (
        y <= this.board.waypoints[i + 1].y + 50 &&
        y >= this.board.waypoints[i].y &&
        x <= this.board.waypoints[i].x + 50 &&
        x >= this.board.waypoints[i].x - 50
      ) {
        return true; // this.checkCollisions()
      }

      // check horizonal and moving left
      else if (
        x >= this.board.waypoints[i + 1].x + 50 &&
        x <= this.board.waypoints[i].x &&
        y <= this.board.waypoints[i].y + 50 &&
        y >= this.board.waypoints[i].y - 50
      ) {
        return true;
      }
    }
  }

  /////////////////////////////////
  //Shooting  & collision logic
  //////////////////////////

  shoot() {
    if(this.tick > 70){

   
      this.towers.forEach(tower => {
        this.enemies.forEach(enemy => {
          tower.isInRange(enemy);
          enemy.health -+ tower.damage
          console.log(enemy.health)
        });
      });
    }
  }

  checkCollisions() {
    this.enemies.forEach(enemy => {
      this.towers.forEach(tower => {
        tower.bulletHitDetection(enemy);
        // tower.onBulletHit(enemy)
      });
    });
  }

  ///////////////////////////////////////////
  /////////Game Mechanics
  //////////////////////////////////////
  enemiesEnded() {
    for (let i = 0, l = this.enemies.length - 1; i < l; i++) {
      if (this.enemies[i].enemyCrossed()) {
        this.numberOfEnemiesFinished += 1;
        this.enemies.splice(i, 1);
        console.log(this.numberOfEnemiesFinished);
      }
      if (this.numberOfEnemiesFinished > 5) {
        this._gameOver();
      }
    }
  this.enemies.forEach(enemy => {
    if(enemy.health <= 0 ){
      this.enemies.splice(enemy, 1)
      this.numerOfKills += 1

    }
  })
  }

  removeFirstTower(){
    if(this.towers.length > 5){
      this.towers.shift()
    }



  }


  ///////////////////////////////////////////////////////////
  //PLAyer collision
  ///////////////////////////////////////////////////////////
  
  playerColWithEnemy(){
    const col = this.enemies.some(enemy => {
      return enemy.collideEnemy(this.player)
    })

    if(col){
      this.player.lives -= 0.1
      if(this.player.lives <= 0)
      this._gameOver()
      console.log("entra")
    }



  }
  playerColWithHealthyFood(){

    // const col = this.fruits.some(fruit =>{
    //   return fruit.collideHealthyFood(this.player)
  // })
    const col = this.fruit.collideHealthyFood(this.player)
   
    if(col){
      this.player.lives +1
      this.fruit.health -=1
      if(this.fruit.health <= 0){
        delete this.fruit
      }
    }

}

/////////////////////////////////////////////////////////////////////
//////////
///////////////////////////////////////////////////////////////////

score(){
  if(!this.numberOfKills === 0){
    this.caloriesBurned = this.numberOfKills * 25 

  } else if(this.fruit.helth === 0 ){
    this.player.lives += 1


  }





}
  
//////////////////////////////////////////////////////
////// Next Wave
////////////////////////////////////////////////////


pushNextWave(){

  if(this.numberOfKills + this.numberOfEnemiesFinished === 0 ){

    


  }


}
  
  ///////////////////////////////////////////////////////////
  ////////GAME OVER ////////////////////////////////////////7
  ////////////////////////////////////////////////////////77

  _gameOver() {
    clearInterval(this.intervalId);

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}

// }

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
