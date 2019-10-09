class Enemy {
  constructor(ctx) {
    this.ctx = ctx;
    this.waypoints = [
      { x: 0, y: 100 },
      { x: 700, y: 100 },
      { x: 700, y: 300 },
      { x: 100, y: 300 },
      { x: 100, y: 500 },
      { x: 300, y: 500 },
      { x: 1001, y: 500 }
    ];
    this.waypointsIndex = 0;
    this.x = 0;
    this.y = 100;
    this.w = 20;
    this.h = 20;
    this.speed = 2;

  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.fillStyle ="#e1cc4f"
  }

  move() {
    //Drawing the ball
    this.followPath();
  }

  followPath() {
    
    //Calculate distance between point 1 and point 2
    const distX =
      this.waypoints[this.waypointsIndex + 1].x -
      this.waypoints[this.waypointsIndex].x;
    const distY =
      this.waypoints[this.waypointsIndex + 1].y -
      this.waypoints[this.waypointsIndex].y;

    // Determine the distance between the two points

    const distance = Math.sqrt(distX * distX + distY * distY);

    //How many moves will it takes us to move from a point to another having into accoun how many times the screen refreshes.

    let moves = distance / this.speed;

    // Number of pixels we need to move

    const xPixels =
      (this.waypoints[this.waypointsIndex + 1].x -
        this.waypoints[this.waypointsIndex].x) /
      moves;
    const yPixels =
      (this.waypoints[this.waypointsIndex + 1].y -
        this.waypoints[this.waypointsIndex].y) /
      moves;
    if (moves > 0) {
      moves--;
      this.x += xPixels;
      this.y += yPixels;

    }
    // Update index

    if (
      this.x >= this.waypoints[this.waypointsIndex + 1].x &&
      this.y >= this.waypoints[this.waypointsIndex + 1].y &&
      this.y <= this.waypoints[this.waypointsIndex + 1].y &&
      this.x <= this.waypoints[this.waypointsIndex + 1].x
    ) {

      this.waypointsIndex += 1;
      this.x = this.waypoints[this.waypointsIndex].x;
      this.y = this.waypoints[this.waypointsIndex].y;

    }
  }

  enemyCrossed(){

    if(this.x >= 1001){
      console.log("entra")
    }


  }

  // deleteEnemies(){
  //   if(this.x > this.ctx.canvas.witdth + 100){
      
  //     delete Enemy


  //   }
    
  // }
}
