class Enemy {
  constructor(ctx){
    this.ctx = ctx
    this.x = 0
    this.y = Math.random() * (this.ctx.canvas.height) 
    this.w = 50
    this.h = 50
    this.vx = 1
    this.vy = 0
    
    
  }

  draw(){
   
      this.ctx.fillRect(
        this.x,
        this.y,
        this.w,
        this.h,
        
      );
      this.ctx.fillStyle = "#536895"
    }
  

  move(){
    
    this.x += this.vx
    this.y += this.vy

  }

  // collide(el){
  //   if(this.x + this.w >= el.x && this.y + this.h >= el.y || this.y + this.h >= el.h){
  //     this.vx = 0
  //     this.vy = 3 //Agregar un math random para que la dirección sea aleatoria. 
      
  //   }
    
  //   else{
  //     this.vx = 3
  //     this.vy = 0}
    
      
    
  // }


  finish(){
    if (this.x > this.ctx.canvas.width - this.w){
      this.vx = -5
    }
  }
}