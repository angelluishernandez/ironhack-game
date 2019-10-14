const UP_KEY = 87
const DOWN_KEY = 83
const RIGHT_KEY = 68
const LEFT_KEY = 65

class Player{
  constructor(ctx){
    this.ctx = ctx
    this.score = 0
    this.lives = 5
    this.x = 0
    this.y = 0
    this.w = 50
    this.h = 50
    this.vx = 0
    this.vy = 0
    this.calories = 1000
    this.listeners()



  }

draw(){
this.ctx.fillRect(
  this.x, 
  this.y, 
  this.w, 
  this.h
)


}

move(){

  this.x += this.vx
  this.y += this.vy



}

listeners(){
  document.onkeydown = (k) => {
    if(k.keyCode === UP_KEY){
      this.vy = -5
    } else if(k.keyCode === RIGHT_KEY){
      this.vx = 5
    } else if(k.keyCode === DOWN_KEY){
      this.vy = 5
    } else if(k.keyCode === LEFT_KEY){
      this.vx = - 5
    }

  document.onkeyup = (k) => {
    if(k.keyCode === UP_KEY){
      this.vy = 0
    } else if(k.keyCode === RIGHT_KEY){
      this.vx = 0
    } else if(k.keyCode === DOWN_KEY){
      this.vy = 0
    } else if(k.keyCode === LEFT_KEY){
      this.vx = 0
    }
  }



  }


}



}