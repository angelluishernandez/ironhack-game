class Tower{
  constructor(ctx){
    this.ctx = ctx
    this.x = 500
    this.y = 400
    this.w = 50
    this.h = 50

  }

  draw(){
   this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h,
     
    )
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
