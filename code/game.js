class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;
    this.board = new Board(ctx);
    this.tower = new Tower(ctx);
    this.enemy = new Enemy(ctx);
    this.enemies = [];
    this.enemiesCrossed = [];
    this.lives = 5;
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
      }
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  draw() {
    this.board.draw();
    this.tower.draw();
    this.enemies.forEach(enemy => enemy.draw());
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

  checkEnemyPosition() {
    this.enemy.enemyCrossed();
  }
}

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
//   if(this.enemy.x + this.enemy.w === this.tower.x - this.tower.w){

//     delete this.enemy
//   }
// }
