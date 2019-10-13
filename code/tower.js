class Tower {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;

    this.r = 90;
    this.r2 = 20;
    this.inRange, this.collisionDistance;
    this.bullets = [];
    this.bulletsActive = [];
    this.towerDamage = 25
  }

  draw(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.r, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r2, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#287233";
    this.ctx.fill();
    this.ctx.closePath();

    this.bullets.forEach(bullet => bullet.draw());
  }

  move() {
    this.bullets.forEach(bullet => bullet.move());
  }

  isInRange(enemy) {
    const distX = this.x - enemy.x - enemy.w / 2;
    const distY = this.y - enemy.y - enemy.w / 2;
    this.inRange = Math.sqrt(distX * distX + distY * distY);
    if (this.inRange <= this.r) {
      this.bullets.push(new Bullet(this.ctx, this.x, this.y, enemy));

      // console.log(this.bullets.length);
    }

    return this.inRange;
  }

bulletHitDetection(enemy){

  for(let i = 0; i < this.bullets.length; i++){
    let bullet = this.bullets[i]
    if(bullet.x + bullet.r >= enemy.x && 
      bullet.x <= enemy.x + enemy.w &&
      bullet.y >= enemy.y &&
      bullet.y <= enemy.y + enemy.h)
      this.bullets.splice(this.bullets[i], 1)

  }
}
}

// this.bullets.forEach(bullet => {
//   if (this.collision >= bullet.r) {
//     bullet.hasHit = true;
//     this.bullets = this.bullets.splice(bullet, 1);
//   }
// });
