class Game {
  constructor(ctx) {
    this.ctx = ctx;

    //this.bg = new Board(ctx);
    this.enemy = new Enemy(ctx)
    // this.obstacle = new Obstacle(ctx)

    this.intervalId = null;

    this.tick = 0
  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear() 
      this.draw() 
      this.move()

      // this.checkCollisions()
      // this.checkfinish()
      

      if(this.tick++ > 100){
        this.tick = 0
      }
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  draw() {
    
    this.enemy.draw()
    // this.obstacle.draw()
    //this.bg.drawBoardLimits();
  }



  move(){
    this.enemy.move()
  }


  // checkfinish(){
  //   this.enemy.finish()
  // }

  // checkCollisions(){
  //   this.enemy.collide(this.obstacle)

  // }
}
