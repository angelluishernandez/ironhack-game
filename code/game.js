class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null
    this.tick = 0
    this.board = new Board(ctx)

    this.enemy = new Enemy(ctx)

    
  }
  run() {
    this.intervalId = setInterval(() => {
      this.clear() 
      this.draw() 
      this.move()

      
      

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
    this.board.draw()
    
  }



  move(){
    
    this.enemy.move()
  }



}
