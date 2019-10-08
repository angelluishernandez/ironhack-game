class Board{
  constructor(ctx){

    this.ctx = ctx
    this.waypoints = [
      {x: 0,y: 100},
      {x: 700,y: 100},
      {x: 700,y: 300},
      {x: 100,y: 300},
      {x: 100,y: 500},
      {x: 300,y: 500},
      {x: 1000,y: 500},
 

      





  ]
  }
  draw(){
    this.ctx.fillStyle = "rgb(100,100,100)"
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.strokeStyle="rgb(170,170,170)"
    this.ctx.lineWidth = 80
    this.ctx.moveTo(
      this.waypoints[0].x,
      this.waypoints[0].y
    )
    for(let i = 1; i < this.waypoints.length; i++){
      this.ctx.lineTo(this.waypoints[i].x, this.waypoints[i].y)
    }
    this.ctx.stroke()
    this.ctx.restore()
  }                                                                                 
}
