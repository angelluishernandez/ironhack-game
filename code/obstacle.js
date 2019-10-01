class Obstacle{
  constructor(ctx){
    this.ctx = ctx
    this.x = 400
    this.y = 200
    this.w = 200
    this.h = 400
  }

  draw(){
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

}