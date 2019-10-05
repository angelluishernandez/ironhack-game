class Enemy {
  constructor(ctx){
    this.ctx = ctx
    this.waypoints = [
      
      
      {x: 700,y: 100, },
      {x: 700,y: 300, },
      {x: 100,y: 300, },
      {x: 100,y: 500, },
      {x: 300,y: 500, },
      {x: 800,y: 500, },


  ]

    this.x = 0
    this.y = 100
    this.w = 50
    this.h = 50
    this.waypointIndex = 0
    this.speed = 2
    this.vx = 0
    this.vy = 0

    this.distX = 0
    this.distY = 0
    this.currentPointX = 0
    this.currentPointY = 0





  }


////////////////////////////////////////////////////////////////
// Draw enemy
///////////////////////////////////////////////////////////////

draw(){

  this.ctx.fillRect(
    this.x,
    this.y,
    this.w,
    this.h,



  )

}


move(){
// console.log(this.distX + " XXXXXXXXXXXXXXXXXXXXXXX")
// console.log(this.distY + "YYYYYYYYYYYYYYYYYYYYYY")
console.log(this.waypoints[this.waypointIndex + 1].y)

this.currentPointX = this.waypoints[this.waypointIndex + 1].x - this.x
this.currentPointY = this.waypoints[this.waypointIndex + 1].y - this.y


this.distY = this.waypoints[this.waypointIndex + 1].y - this.currentPointY
this.distX = this.waypoints[this.waypointIndex + 1].x - this.currentPointX
console.log(this.currentPointX)
this.pointReached()

}

//////////////////////////
//Movement to the right
//////////////////////////

moveRight(){

  if(this.waypoints[this.waypointIndex].x > this.currentPointX){ 
    this.y = this.waypoints[this.waypointIndex].y
    this.vx = this.speed
    this.x += this.vx
   
    // console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
  
  }
}



//////////////////////////
//Movement to the bottom
//////////////////////////

moveDown(){

  if(this.waypoints[this.waypointIndex].y > this.currentPointY){
    this.x = this.waypoints[this.waypointIndex].x    
    this.vy = this.speed
    this.y += this.vy
  

    // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")



  }
 
    

}


//////////////////////////
//Movement to the left
//////////////////////////

// moveLeft(){
//   if(this.distX <= this.x && this.distY > this.y){
//     this.vx = 0
    
    
//     this.vy = this.speed
//     this.x += this.vy

//     console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
//   }

// }




//////////////////////////
//Movement to the upper side
//////////////////////////
// moveUp(){

//   if(this.y >= this.distY){
//     this.vx = 0
    
    
//     this.vy = this.speed
//     this.y -= this.vy


//     console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU")
//   }
  


// }





//////////////////////////////////////////////////////////////////////////////
/// When a point is reached it executes the corresponding function to turn the object in the right direction
/////////////////////////////////////////////////////////////////////////////////////

pointReached(){



  if(this.currentPointY <= this.waypoints[this.waypointIndex + 1].y && this.currentPointX <= this.waypoints[this.waypointIndex + 1].x){
    this.moveDown()



  // }

  // if (this.distY > -20 && this.x < this.waypoints[this.waypointIndex].x ){
  //   this.moveLeft()
  // }

  if(this.currentPointX <= this.waypoints[this.waypointIndex + 1].x && this.currentPointY <= this.waypoints[this.waypointIndex +1].y){
    // this.currentPointY <= this.waypoints[this.waypointIndex + 1].x && !this.currentPointY > this.waypoints[this.waypointIndex].y){
    this.moveRight()



    // console.log( "CURRENT POINT" + this.currentPointX)
  }


if(this.distX <= 0 && this.distY <= 0){

  this.waypointIndex += 1
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" + this.waypointIndex)
}







}

////////////////////////////

// Add  here to the index of waypoints.

///////////////////////////////






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


  //   // this.waypoint = false
  //   this.waypointIndex = 0
  //   this.pastWaypoints = []
    

  // // Next position
  // this.nextPositionX = this.waypoints[0].x
  // this.nextPositionY = this.waypoints[0].y

  // // Distance


  // this.distanceX = this.nextPositionX - this.x
  // this.distanceY = this.nextPositionY - this.y




// const distX = (this.path[this.pathIndex][0] - this.x0) / 100
//     const distY = (this.path[this.pathIndex][1] - this.y0) / 100
//     this.x += distX
//     this.y += distY

//     if (this.x >= this.path[this.pathIndex][0] && this.y >= this.path[this.pathIndex][1]) {
//       this.x0 = this.path[this.pathIndex][0]
//       this.y0 = this.path[this.pathIndex][1]
//       this.pathIndex += 1
//     }


}  









