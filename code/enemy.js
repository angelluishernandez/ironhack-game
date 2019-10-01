class Enemy {
  constructor(ctx){
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.w = 50
    this.h = 50
    this.vx = 3
    this.vy = 0
    this.coordinates = [
      {cx: 100,
       cy: 400,},
      {cx: 200,
       cy: 400,}, 
      {cx: 300,
       cy: 400,}, 
      {cx: 400,
       cy: 400,}, 
      {cx: 500,
       cy: 400,}, 
      {cx: 600,
       cy: 400,}, 
      {cx: 700,
       cy: 400,}, 
      {cx: 800,
       cy: 400,}, 
      {cx: 900,
       cy: 400,}, 
      {cx: 100,
       cy: 500,},  
  ]
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
      for(let i = 0; i < this.coordinates.length; i++){

        this.x = this.coordinates[i].cx
        this.y = this.coordinates[i].cy
        this.x += this.vx
        this.y += this.vy
      //   if (this.x < this.coordinates[i].cx){
      //     this.x = this.coordinates[i].cx
      //     this.y = this.coordinates[i].cy
      //     this.vx = 3
      
      //   }
      // }
      // for(let i = 0; i < this.coordinates.length; i++){
      //   if(this.x === this.coordinates[i].cy){
      //     this.vx = 0
      //     this.vy = 3
      //     this.y += this.vy
      //   }
      // }
       
      // }
    }
    
  }
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


//   finish(){
//     if (this.x > this.ctx.canvas.width - this.w){
//       this.vx = -5
//     }
//   }
