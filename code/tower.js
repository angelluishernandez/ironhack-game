class Tower{
  constructor(ctx){
  // constructor(ctx, x, y){ // This is the final constructor
    this.ctx = ctx
    this.canvas = canvas
    // this.events = new Events(ctx)
    this.x = 250
    this.y = 500
    
    this.r = 90
    this.r2 = 20

    
  }
draw(){
// draw(x, y){ // this line will be included in the final version





  
  this.ctx.beginPath()
  this.ctx.arc(
    this.x, 
    this.y, 
    this.r, 
    0, 
    2 * Math.PI
  
    
  )
  this.ctx.fillStyle = "#d57b85"
  this.ctx.fill()
  this.ctx.closePath()
  

  this.ctx.beginPath()
  this.ctx.arc(
    this.x, 
    this.y, 
    this.r2, 
    0, 
    2 * Math.PI
  
    
  )
  this.ctx.fillStyle = "#287233"
  this.ctx.fill()
  this.ctx.closePath()
  

    

  



}







  







}







