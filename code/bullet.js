class Bullet {
  constructor(ctx, x, y, target) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = 20;
    this.target = target;

    this.speed = 5;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  }

  move() {
    const distX = this.target.x + this.target.w / 2 - this.x;
    const distY = this.target.y + this.target.h / 2 - this.y;
    const distance = Math.sqrt(distX * distX + distY * distY);
    this.x = this.x + (this.speed * distX) / distance;
    this.y = this.y + (this.speed * distY) / distance;
  }

  // shootLaser(){
  //   this.enemies.forEach(enemy => {
  //     this.bulletsPositions.push({
  //       bulletX: enemy.x - enemy.w / 2,
  //       bulletY: enemy.y - enemy.h / 2

  //     })

  //   })
  //   if(this.enemy.x <= this.tower.r){

  // }
}
