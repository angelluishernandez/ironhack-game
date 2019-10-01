class Board {
  constructor(ctx){
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.w = 0
    this.h = 0
    



 
  }



  drawBoardLimits(){

    const upperLimits = this.ctx.fillRect(
      this.x = 0,
      this.y = 0,
      this.w = this.ctx.canvas.width,
      this.h = 300
    );

    const lowerLimits = this.ctx.fillRect(
        this.x = 0,
        this.y = this.ctx.canvas.height,
        this.w = this.ctx.canvas.width,
        this.h = -300
      );

      return upperLimits && lowerLimits

    
  }

  }
