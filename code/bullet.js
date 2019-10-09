class Bullet{
  constructor(ctx, x1, x2, y1, y2){

    this.ctx = ctx
    this.x1
    this.x2
    this.y1
    this.y2


  }





  draw(x1, x2, y1, y2){
    this.ctx.strokeStyle = "#2a6478"
    this.ctx.lineWith = 10
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    
    this.ctx.stroke();



  }





  // shootLaser(){
  //   this.enemies.forEach(enemy => {
  //     this.bulletsPositions.push({
  //       bulletX: enemy.x - enemy.w / 2,
  //       bulletY: enemy.y - enemy.h / 2
        
        
  //     })
  
  
  
  
  //   })
  //   if(this.enemy.x <= this.tower.r){
      
  
    // }
  

    










}