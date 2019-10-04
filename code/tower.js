class Tower{
  constructor(ctx){
    this.ctx = ctx
    this.x = 100
    this.y = 100
    this.w = 20
    this.h = 20
    this.r = this.w * 2
    this.cX = this.x / 2
    this.cY = this.y / 2
  }

  draw(){
   this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h,
     
    )
    this.ctx.fillStyle("green")
    this.radius()
  }

// radius(){

//   this.ctx.beginPath();
//     this.ctx.arc(
//       this.cX, 
//       this.cY, 
//       this.r, 
//       0, 
//       2 * Math.PI);
//     this.ctx.closePath()
// }
}
