class Tower{
  constructor(ctx){
    this.ctx = ctx
    this.x = 500
    this.y = 500
    this.r = 90

  }

draw(){

 console.log(this.x, this.y)

this.addTower()
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
  

}



addTower(){

  this.ctx.canvas.addEventListener("mousedown", this.onDown)
  
 
}

onDown(e){

let points = e.target.getBoundingClientRect()
const towerX = e.clientX - points.left
const towerY = e.clientY - points.top
  
  console.log(towerX, towerY)

}


}