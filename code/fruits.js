class Fruit extends Enemy{
constructor(ctx,  speed){

  super(speed)
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
  this.img.src = "./imgs/fruit" + (Math.floor(Math.random() * 6) + 1) + ".png"
}




collideHealthyFood(player) {
  const colX = player.x + player.w > this.x && player.x < this.x + this.w
  const colY = player.y + player.h > this.y && player.y < this.y + this.h

  return colX && colY
}

}