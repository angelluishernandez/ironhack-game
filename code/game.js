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

    this.lives = 5;
    // Healthy food
    this.fruit = new Fruit(ctx)

  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();
      this.shoot();

      this.enemiesEnded();
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
    this.towers.forEach(tower => tower.draw(tower.x, tower.y));
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
    if (this.enemies.length < 1) {
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
        return true; // this.checkCollisions()
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

  /////////////////////////////////
  //Shooting  & collision logic
  //////////////////////////

  shoot() {
      this.enemies.forEach(enemy => {
        this.towers.forEach(tower => {
          tower.isInRange(enemy);
          enemy.health -+ tower.damage
          console.log(enemy.health)
        });
      });
   
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

    }
  })
  }

  ///////////////////////////////////////////////////////////
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
