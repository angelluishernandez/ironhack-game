class Enemy {
  constructor(ctx){
    this.ctx = ctx
    this.waypoints = [
      {x: 0,y: 100, current: true},
     {x: 700,y: 100, current: false },
     {x: 700,y: 300, current: false },
     {x: 100,y: 300, current: false },
     {x: 100,y: 500, current: false },
     {x: 300,y: 500, current: false },
     {x: 800,y: 500, current: false },



  ]

    this.x = this.waypoints[0].x
    this.y = this.waypoints[0].y
    this.offset = Math.random(14)
    this.w = 50
    this.h = 50
    this.nextWaypoint = 0
    this.speed = 2
    this.vx = 0
    this.vy = 0












  //   // this.waypoint = false
  //   this.waypointIndex = 0
  //   this.pastWaypoints = []
    

  // // Next position
  // this.nextPositionX = this.waypoints[0].x
  // this.nextPositionY = this.waypoints[0].y

  // // Distance


  // this.distanceX = this.nextPositionX - this.x
  // this.distanceY = this.nextPositionY - this.y


}

// const distX = (this.path[this.pathIndex][0] - this.x0) / 100
//     const distY = (this.path[this.pathIndex][1] - this.y0) / 100
//     this.x += distX
//     this.y += distY

//     if (this.x >= this.path[this.pathIndex][0] && this.y >= this.path[this.pathIndex][1]) {
//       this.x0 = this.path[this.pathIndex][0]
//       this.y0 = this.path[this.pathIndex][1]
//       this.pathIndex += 1
//     }

draw(){

  this.ctx.fillRect(
    this.x,
    this.y,
    this.w,
    this.h,



  )

}
move(){

  if (this.waypointReached()){
    console.log("entra")
    if(this.nextWaypoint()){
      return finish()
    }
  
  }else{
    this.x += this.speed
    

  }

}






nextWaypoint(){

  if(!this.waypoint.x){
    this.waypoint = Object.assign({}, this.waypoints[this.waypointIndex])
    this.x = this.waypoint.x
    this.y = this.waypoint.y
  }
  const previousX = this.waypoint.x
  const previousY  = this.waypoint.y

  this.waypointIndex++
  if (!this.waypoints[this.waypointIndex]) return false
  this.waypoint = Object.assign({}, this.waypoints[this.waypointIndex])

  if(previousX === this.waypoint.x){
    this.velocity.x = 0

  }else{
    this.velocity.x = (this.x < this.waypoint.x ? this.speed : -this.speed)
  }

if(previousY === this.waypoint.y){
    this.velocity.y = 0

  }else{
    this.velocity.y = (this.y < this.waypoint.y ? this.speed : -this.speed)
  }
return true
}
waypointReached(){
  
  return(
  (this.vx > 0 && this.x >= this.waypoint.x) ||
  (this.vx < 0 && this.x <= this.waypoint.x) ||
  (this.vy > 0 && this.y >= this.waypoint.y) ||
  (this.vy < 0 && this.y <= this.waypoint.y) 
  
  
  
  )
  
}



// checkPoint(arr, state){

//   for (let i of arr) {
//     if(i.state === true){
//       console.log('found ' + name);
//       return true;
//     }
//   }
//   console.log(name + ' not there');
//   return false;
// };



// }







//   // if (this.x >= this.waypoints[this.waypointIndex].x && this.y >= this.waypoints[this.waypointIndex].y){

//   //   this.vx = 0
//   //   this.vy = 1
//   //   this.x += this.vx
//   //   this.y += this.vy
//   //   this.pastWaypoints++

//   // }


//   // if (
//     // this.x >= this.waypoints[this.waypointIndex + 1].x && this.y === this.waypoints[this.waypointIndex].y 
//     // ||
//   // 
//   // this.y >= this.waypoints[this.waypointIndex + 1].y  && this.x === this.waypoints[this.waypointIndex].x 
//   // this.x < this.waypoints[this.waypointIndex + 1].x && this.y === this.waypoints[this.waypointIndex].y ||
//   // this.y < this.waypoints[this.waypointIndex + 1].y  && this.x === this.waypoints[this.waypointIndex].x 
//   // )
//   {
//     console.log("entra")
  

    




//           if (
//             // this.pointReached() && // if a point has been reached
              
//               this.x + this.w >=this.waypoints[this.waypointIndex + 1].x) // and current X is equal to next path index (i.e 700)
              
//               {
//                 console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")

//               this.vx = 0
//               this.vy = 2
//               this.y += this.vy
//               // this.x += this.vx
              
//               console.log(this.waypointIndex)
//             }
          
//             if (
//               // this.pointReached() && // if a point has been reached
//               this.y >= this.waypoints[this.waypointIndex + 1].y  && 
//               this.x < this.waypoints[this.waypointIndex + 1].x &&
//               this.y - this.h <= this.waypoints[this.waypointIndex].y) // and current X is equal to next path index (i.e 700)
              
//               {
//                 console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUuu")
                
//               this.vx = 2
//               this.x += this.vx
//               // this.vy = 2
//               // this.y += this.vy
              
//               console.log(this.waypointIndex)
//             }
            
//           if(
//             //  this.pointReached() && // if a point has been reached
//               this.y < this.waypoints[this.waypointIndex].y
//           ){

//             console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
            
            
//             this.vy = 2
//             this.x -= this.vy
//             this.y += this.vy
            
//             console.log(this.waypointIndex)

//           } 
//           if (
//               // this.pointReached() && // if a point has been reached
              
//               this.x < this.waypoints[this.waypointIndex + 1].x) // and current X is equal to next path index (i.e 700)
              
//               {
//                 console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
                
//               this.vy = 0
//               this.vx = 2
//               this.x += this.vx
              
//               console.log(this.waypointIndex)
//             }
            



//         console.log(this.waypointIndex)


// }
// }
// else{
//   this.vx = 2
//   this.x += this.vx
// }




    







}


