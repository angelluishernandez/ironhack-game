class Sweets extends Enemy {
  constructor(ctx, speed, enemyFinished, isDead) {
   
    super(
      
      speed,
      enemyFinished,
      isDead,
      
    );

    this.ctx = ctx;
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
    this.health = 200;
    this.img = new Image();
    this.img.src =
      "./imgs/candy" + (Math.floor(Math.random() * 5) + 1) + ".png";
  }
 
}
