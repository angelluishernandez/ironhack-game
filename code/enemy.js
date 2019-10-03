class Enemy {
  constructor(ctx){
    this.ctx = ctx
    this.x = 0
    this.y = 100
    this.w = 50
    this.h = 50
    this.speed = 1
    this.vx = 0
    this.vy = 0
    // this.waypoint = false
    // this.waypointIndex = 0
    this.waypoints = [
     {x: 0, y: 100, vx : 1, vy : 0},
     {x: 700,y: 100, vx : 0, vy : 1},
     {x: 700,y: 300, vx : -1, vy : 0},
     {x: 100,y: 300, vx : 0, vy : 1},
     {x: 100,y: 500, vx : 1, vy : 0},
     {x: 300,y: 500, vx : 1, vy : 0},
     {x: 800,y: 500, vx : 1, vy : 0},
  
  

     

      
     
  ]
  
}

draw(){

  this.ctx.fillRect(
    this.x,
    this.y,
    this.w,
    this.h,



  )

}
  
// Note to self: this function is designed to keep the enemy moving  
// to a certain point determined by the coordinates.
// The coordinates indicate the place where the enemy will turn and 
// continue in another direction





// The next step is to compare the previous position with the next
// and check if the enemy should moving in the same fashion or not. 


// Let's try to add the velocity specified in the coordinates. 
// Update: this doesn't work very well. It adds acceleration

// 19:36 trying to compare positions now. 

move(){


  for(let i = 0; i < this.waypoints.length - 1; i++){
    if(this.x === this.waypoints[i].x && this.waypoints[i].vx < 0){
      this.vx = 0
      this.vy = this.waypoints[i].vy
      this.y += this.vy
    }

    if(this.y === this.waypoints[i].y && this.waypoints[i].vy < 0){
      this.vx = this.waypoints[i].vx
      this.x += this.vx
    }
   
    else{
      this.vx = this.waypoints[i].vx
      this.x += this.vx
    }
  
  }





}

// if(this.waypointReached()){
//   if(this,nextPoint()){
//     return this.finish()
//   }

// }
// else{
//   this.x += this.vx
//   this.y += this.vy
// }




// }
  
// waypointReached(){


//   (this.vx > 0 && this.x >= this.waypoint.x) ||
//   (this.vx < 0 && this.x <= this.waypoint.x) ||
//   (this.vy > 0 && this.y >= this.waypoint.y) ||
//   (this.vy < 0 && this.y <= this.waypoint.y)

// }

// nextPoint() {



// if(!this.waypoint){
//   this.waypoint = Object.assign({}, this.waypoints[this.waypointIndex] )
//   this.x = this.waypoint.x
//   this.y = this.waypoint.y
// }

// const previousX = this.waypoint.x
// const previousY = this.waypoint.y
// this.waypointIndex++

// if(!this.waypoints[this.waypointIndex]){
//   return false
//   this.waypoint = Object.assign({}, this.waypoints[this.waypointIndex])
// }

// if(previousX === this.waypoints[this.waypointIndex].x){
  
//   this.vx = 0
 
// }else{
//   this.vx = (this.x < this.waypoint.x ? this.speed : -this.speed)
// }
// if(previousY=== this.waypoints[this.waypointIndex].cy ){
  
//   this.vx = 0
// }
// else{
//   this.vy = (this. y < this.waypoint.y ? this.speed : -this.speed)
// }




  
//   for (let i = 0; i < this.coordinates.length - 1; i++){
//     if(this.x > this.coordinates[i].cx && this.coordinates[i].cx === this.coordinates[i + 1].cx){
//       this.vx = 0
//       this.vy = 1
       
//       this.y += this.vy


//   }if(this.y > this.coordinates[i].cy && this.coordinates[i].cy === this.coordinates[i + 1].cy){
//     this.vx = 1
//     this.vy = 0
    
//     this.x += this.vx


// }
  
  
//   else{
//     this.x += this.speed
//   }

//   }


}


