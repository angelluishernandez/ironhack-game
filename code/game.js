class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.intervalId = null;
    this.tick = 0;
    this.board = new Board(ctx);

    // Towers
    this.posTowerX,
    this.posTowerY 
    this.tower = new Tower(ctx, this.posTowerX, this.posTowerY);
    // this.events = new Events(ctx);
    this.towers = []
 
    

    // Enemies
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

      this.placeTower(this.posTowerX, this.posTowerY);

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
    // this.board.draw();
    this.towers.forEach(tower => tower.draw());
    // this.enemies.forEach(enemy => enemy.draw());
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

  placeTower() {
    this.ctx.canvas.onmousedown = function(e) {
      let rect = canvas.getBoundingClientRect();
      this.posTowerX = e.clientX - rect.left;
      this.posTowerY = e.clientY - rect.top;

      console.log(this.posTowerX, this.posTowerY);
      const newTower = new Tower(this.ctx, this.posTowerX, this.posTowerY);
      console.log(newTower)
      this.towers.push(newTower);
      console.log("entra");
    };
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
