class Tower{
  constructor(ctx, x, y){
    this.ctx = ctx
    this.canvas = canvas
    // this.events = new Events(ctx)
    this.x = x 
    this.y = y 
    
    this.r = 90

  }

draw(x, y){





  
  this.ctx.fillStyle = "#d57b85"
  this.ctx.beginPath()
  this.ctx.arc(
    x, 
    y, 
    this.r, 
    0, 
    2 * Math.PI
  
    
  )
  this.ctx.fill()
  this.ctx.closePath()
    

  



}







  







}







