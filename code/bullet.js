class Bullet {
  constructor(ctx, x, y, enemy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.enemy = enemy;
    this.w = 20
    this.h = 20;
    this.vx = 1;
    this.vy = 1
    this.bulletActive = false;
    this.img = new Image
    this.img.src = "./imgs/flame.png"
  }

  draw() {

    this.ctx.drawImage(

      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );


    
    this.ctx.fillStyle = "#fa9400";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.distX = this.x - this.enemy.x - this.enemy.w;
    this.distY = this.y - this.enemy.y - this.enemy.h / 2;
    this.angle = Math.atan2(this.distY, this.distX);
    this.vy = Math.sin(this.angle) * 1.5;
    this.vx = Math.cos(this.angle) * 1.5;
    this.x -= this.vx * 5;
    this.y -= this.vy * 5;


  }

  
}
