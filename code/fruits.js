class Fruit {
constructor(ctx){
  this.ctx = ctx
  this.waypoints = [
    { x: 0, y: 100 },
    { x: 650, y: 100 },
    { x: 650, y: 300 },
    { x: 100, y: 300 },
    { x: 100, y: 500 },
    { x: 300, y: 500 },
    { x: 1001, y: 500 }
  ];
  this.waypointsIndex = 0;
  this.x = 0;
  this.y = 100;
  this.w = 50;
  this.h = 50;
  this.speed = 2;
  this.health = 100
  this.img = new Image
  this.img.src = "./imgs/brocoli.png"
}
draw() {
  this.ctx.drawImage(
    this.img,
    this.x, 
    this.y, 
    this.w, 
    this.h);
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

  //How many moves will it takes us to move from a 
  //point to another having into account how many times the screen refreshes.

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

collideHealthyFood(player) {
  const colX = player.x + player.w > this.x && player.x < this.x + this.w
  const colY = player.y + player.h > this.y && player.y < this.y + this.h

  return colX && colY
}

}