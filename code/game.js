class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.intervalId = null;
    this.tick = 0;
    this.tick2 = 0;
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
    this.sweets = [];
    this.bbqs = [];
    this.numberOfEnemiesFinished = 0;
    this.numberOfKills = 0;
    this.lives = 5;
    this.enemiesSpawned = 0;
    // Healthy food
    this.fruits = [];
    this.fruitsSpawned = 0;
    this.fruitsEaten = 0;

    //Wave control

    this.wave = 0;

    ////////////
    //Score
    this.caloriesBurned = 0;
  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.scoreAddToHtml();
      this.waveControl();
      this.checkCollisions(this.enemies);
      this.checkCollisions(this.sweets);
      this.checkCollisions(this.bbqs);
      this.shoot(this.enemies);
      this.shoot(this.sweets);
      this.shoot(this.bbqs);
      this.removeFirstTower();
      this.enemiesEnded(this.enemies);
      this.enemiesEnded(this.sweets);
      this.enemiesEnded(this.bbqs);
      this.playerColWithEnemy(this.enemies);
      this.playerColWithEnemy(this.sweets);
      this.playerColWithEnemy(this.bbqs);
      this.playerColWithHealthyFood();
      console.log(this.wave);
      console.log(this.enemiesSpawned);
      console.log(this.numberOfKills);
      if (this.tick++ > 100) {
        this.tick = 0;
        if (this.wave === 0) {
          this.addEnemy();
        }
        if (this.wave === 1) {
         
         
          setTimeout(this.addSecondWave(), 4000);
        }
        if (this.wave === 2) {
         
         
          setTimeout(this.addThirdWave());
        }
      }
      if (this.tick2++ > 150) {
        this.tick2 = 0;
        this.addFruits();
      }
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  draw() {
    this.board.draw();
    this.player.draw();
    this.towers.forEach(tower => tower.draw());
    this.enemies.forEach(enemy => enemy.draw());
    this.sweets.forEach(sweet => sweet.draw());
    this.bbqs.forEach(bbq => bbq.draw());
    this.fruits.forEach(fruit => fruit.draw());
  }

  move() {
    this.player.move();
    this.enemies.forEach(enemy => enemy.move());
    this.towers.forEach(tower => tower.move());
    this.sweets.forEach(sweet => sweet.move());
    this.bbqs.forEach(bbq => bbq.move());
    this.fruits.forEach(fruit => fruit.move());
  }

  /////////////////////////////////////
  //Enemies
  /////////////////////////////////////

  addEnemy() {
    if (this.enemiesSpawned <= 19) {
      const enemy = new Enemy(this.ctx);
      this.enemiesSpawned += 1;
      this.enemies.push(enemy);
    }
  }

  addSecondWave() {
    if (this.enemiesSpawned >= 19) {
      const sweets = new Sweets(this.ctx);
      this.enemiesSpawned += 1;
      this.sweets.push(sweets);
    }
  }

  addThirdWave() {
    if (this.enemiesSpawned >= 38) {
      const bbq = new Bbq(this.ctx);
      this.enemiesSpawned += 1;
      this.bbqs.push(bbq);
    }
  }

  addFruits() {
    if (this.tick2 > Math.random() * 300 - 150) {
      const fruit = new Fruit(this.ctx);
      this.fruitsSpawned += 1;
      this.fruits.push(fruit);
      if (this.fruitsSpawned > 20) {
        return;
      }
    }
  }

  waveControl() {
    if (this.enemiesSpawned >= 19) {
      this.wave = 1;
    }
    if (this.enemiesSpawned >= 38) this.wave = 2;
  }

  ///////////////////////////////////////////////////////////////////
  // Checking if tower is in path

  /////////////////////////////////////////////////////////////////////

  checkIfInPath(x, y) {
    for (let i = 0; i < this.board.waypoints.length - 1; i++) {
      // check horizontal and moving right

      if (
        x <= this.board.waypoints[i + 1].x &&
        x >= this.board.waypoints[i].x &&
        y <= this.board.waypoints[i].y + 50 &&
        y >= this.board.waypoints[i].y - 50
      ) {
        return true;
      }

      // check vertical and moving down
      else if (
        y <= this.board.waypoints[i + 1].y &&
        y >= this.board.waypoints[i].y &&
        x <= this.board.waypoints[i].x + 50 &&
        x >= this.board.waypoints[i].x
      ) {
        return true; // this.checkCollisions()
      }

      // check horizonal and moving left
      else if (
        x >= this.board.waypoints[i + 1].x &&
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

  shoot(enemies) {
    if (this.tick > 70) {
      this.towers.forEach(tower => {
        enemies.forEach(enemy => {
          tower.isInRange(enemy);
          enemy.health - +tower.damage;
        });
      });
    }
  }

  checkCollisions(enemies) {
    enemies.forEach(enemy => {
      this.towers.forEach(tower => {
        tower.bulletHitDetection(enemy);
      });
    });
  }

  ///////////////////////////////////////////
  /////////Game Mechanics
  //////////////////////////////////////
  enemiesEnded(enemies) {
    for (let i = 0, l = enemies.length - 1; i < l; i++) {
      if (enemies[i].enemyCrossed()) {
        this.numberOfEnemiesFinished += 1;
        this.enemies.splice(i, 1);
      }
      if (this.numberOfEnemiesFinished > 5 || this.player.calories > 1500) {
        this._gameOver();
      }
    }
    enemies.forEach(enemy => {
      if (enemy.health <= 0) {
        enemies.splice(enemy, 1);
        this.numerOfKills += 1;
      }
    });
  }

  removeFirstTower() {
    if (this.towers.length > 5 && this.wave === 0) {
      this.towers.shift();
    }
    if (this.towers.length > 6 && this.wave === 1) {
      this.towers.shift();
    }
    if (this.towers.length > 7 && this.wave === 2) {
      this.towers.shift();
    }
  }

  ///////////////////////////////////////////////////////////
  //PLAyer collision
  ///////////////////////////////////////////////////////////

  playerColWithEnemy(enemies) {
    const col = enemies.some(enemy => {
      return enemy.collideEnemy(this.player);
    });

    if (col) {
      this.player.calories += 20;
      if (this.player.lives <= 0) this._gameOver();
    }
  }
  playerColWithHealthyFood() {
    // const col = this.fruits.some(fruit =>{
    //   return fruit.collideHealthyFood(this.player)
    // })
    const col = this.fruits.some(fruit => {
      return fruit.collideEnemy(this.player);
    });

    if (col) {
      this.player.lives + 1;

      this.fruits.forEach(fruit => {
        fruit.health -= 1;
        if (fruit.health <= 0) {
          this.player.calories -= 100;
          this.fruitsEaten += 1;
          this.fruits.splice(fruit, 1);
        }
      });
    }
  }

  /////////////////////////////////////////////////////////////////////
  //////////SCORE
  ///////////////////////////////////////////////////////////////////

  score() {
    if (!this.numberOfKills === 0) {
      this.caloriesBurned = this.numberOfKills * 25;
    } else if (this.fruit.health === 0) {
      this.player.lives += 1;
    }
  }

  scoreAddToHtml() {
    const health = document.getElementById("health");
    health.innerText = this.player.lives;

    const calories = document.getElementById("calories");
    calories.innerText = this.player.calories;

    const healthy = document.getElementById("healthy");
    healthy.innerText = this.fruitsEaten;

    const unhealthy = document.getElementById("unhealthy");
    unhealthy.innerText = this.numberOfKills;
  }

  ///////////////////////////////////////////////////////////
  ////////GAME OVER ////////////////////////////////////////7
  ////////////////////////////////////////////////////////77

  _gameOver() {
    clearInterval(this.intervalId);

    this.ctx.font = "40px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 600
    );
    this.ctx.fillText(
      "YOU HAVE EATEN " + this.fruitsEaten + " HEALTHY MEALS",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 500
    );
    this.ctx.fillText(
      "YOU HAVE " + this.player.calories + " CALORIES",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height - 400
    );
  }
}
