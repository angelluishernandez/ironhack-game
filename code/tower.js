class Tower {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;

    this.r = 90;
    this.r2 = 20;

    this.target = {};

    this.rateOfFire = 1000 / 60;
    this.bullets = [];
  }

  draw(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#d57b85";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r2, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#287233";
    this.ctx.fill();
    this.ctx.closePath();
  }
  inRange(enemy) {
    const distX = this.x - enemy.x - enemy.w / 2;
    const distY = this.y - enemy.y - enemy.w / 2;
    const inRange = Math.sqrt(distX * distX + distY * distY) <= this.r
    return inRange
    console.log("entra")
  }

  
}
