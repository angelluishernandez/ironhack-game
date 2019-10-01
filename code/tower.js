class Tower{
  constructor(ctx){
    this.ctx = ctx
    this.x, 
    this.y
    this.r
  }

  draw(){
    const tower = this.ctx.beginPath();
    this.ctx.arc(
      100, 
      75, 
      50, 
      0, 
      2 * Math.PI);
    this.ctx.fill()
    this.ctx.closePath

    
  }



}