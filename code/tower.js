class Tower{
  constructor(ctx){
    this.ctx = ctx
    this.x, 
    this.y, 
    this.w = 50
    this.h = 50
    this.towers =[]
  }

  draw(){
   this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h,
     
    )
  }


  shoot(){





  }


  /////////////////////////////////////////////////////////////////////////////////////////
  // Add Tower method - check event listener in script.js for reference
  /////////////////////////////////////////////////////////////////////////////////////////

  addTower(){
    
    function isIntersect(point, circle) {
      return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
    }

    this.towers.forEach((tower)=>{
      if(isIntersect(mousePoint, tower)){



    }



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
}


