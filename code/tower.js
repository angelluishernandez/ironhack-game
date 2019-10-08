class Tower{
  constructor(ctx){
    this.ctx = ctx
    this.x = 500
    this.y = 500
    this.r = 90
    this.towerX,
    this.towerY

  }

draw(x, y){

//  console.log(this.towerX, this.towerY)

this.addTower()
this.ctx.beginPath()
this.ctx.arc(
 this.towerY, 
this.towerY, 
  this.r, 
  0, 
  2 * Math.PI

  
)
this.ctx.fillStyle = "#d57b85"
this.ctx.fill()
this.ctx.closePath()
  

}



addTower(){

  this.ctx.canvas.addEventListener("mousedown", this.onDown)
  
 
}

onDown(e){

let points = e.target.getBoundingClientRect()
this.towerX = e.clientX - points.left
this.towerY = e.clientY - points.top
  
  // console.log(this.towerX, this.towerY)

}


}