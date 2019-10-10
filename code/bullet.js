class Bullet {
  constructor(ctx, x, y, enemyX, enemyY) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.enemyX,
    this.enemyY

    this.r = 20;
    this.target = target;
    this.vx = 5
    this.vy = 5

    this.speed = 10;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  }

  move() {
    const dx = this.x - el.x - el.w
    const dy = this.y - el.y - el.h/2    
    this.angle = Math.atan2(dy, dx)
    this.vy = Math.sin (this.angle) * 1.5
    this.vx = Math.cos (this.angle) * 1.5
    this.x -= this.vx
    this.y -= this.vy
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


