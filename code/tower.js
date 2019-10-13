class Tower {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 100;
    this.r = 90;
    this.r2 = 20;
    this.img = new Image();
    this.img.src = "./imgs/tower.png";
    this.inRange, this.collisionDistance;
    this.bullets = [];
    this.time = 100000;
    this.collisionWithEnemy = false;
    this.towerDamage = 10;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x - 50, this.y - 30, this.w, this.h);

    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.r2, 0, 2 * Math.PI);
    // this.ctx.fillStyle = "#287233";
    // this.ctx.fill();
    // this.ctx.closePath();

    this.bullets.forEach(bullet => bullet.draw());
  }

  move() {
    this.bullets.forEach(bullet => bullet.move());
  }

  isInRange(enemy) {
    const distX = this.x - enemy.x - enemy.w / 2;
    const distY = this.y - enemy.y - enemy.w / 2;
    this.inRange = Math.sqrt(distX * distX + distY * distY);
    if (this.inRange <= 90) {
      console.log(this.inRange, distX, distY);
      this.bullets.push(new Bullet(this.ctx, this.x, this.y, enemy));

      // console.log(this.bullets.length);
    }

    return this.inRange;
  }

  bulletHitDetection(enemy) {
    for (let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      if (
        bullet.x + bullet.w >= enemy.x &&
        bullet.x <= enemy.x + enemy.w &&
        bullet.y + bullet.y>= enemy.y &&
        bullet.y <= enemy.y + enemy.h
      ) {
       this.bullets = this.bullets.filter(bullet => bullet[i] === false);
        enemy.health -= this.towerDamage;
        if ((enemy.health <= 0 && this.bullet[i].vx <= 0) || this.bullet[i]) {
          this.bullets.splice(this.bullets[i], 1);
        }
        this.collisionWithEnemy = true;
      }
      return this.collisionWithEnemy;
    }
  }
}
