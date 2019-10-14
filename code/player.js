const UP_KEY = 87;
const DOWN_KEY = 83;
const RIGHT_KEY = 68;
const LEFT_KEY = 65;

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.score = 0;
    this.lives = 5;
    this.x = 0;
    this.y = 0;
    this.w = 60;
    this.h = 100;
    this.vx = 0;
    this.vy = 0;
    this.calories = 1000;
    this.hunger = 0;
    this.listeners();
    this.tick = 0;

    this.img = new Image();
    this.img2 = new Image();
    this.imgStill = new Image()
    this.img.src = "./imgs/Runner-right.png";
    this.img2.src = "./imgs/Runner-left.png";
    this.imgStill.src = "./imgs/runner-still.png"
    this.img.frames = 2;
    this.img2.frames = 2;
    this.img.frameIndex = 0;
    this.img2.frameIndex = 0;
  }

  draw() {
   

if(this.vx > 0){
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * this.img.width / 2,
    0,
    this.img.width / 2,
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );
  this.animateRight()
}
      
else if(this.vx < 0){


  this.ctx.drawImage(
    this.img2,
    this.img2.frameIndex * this.img2.width / 2,
    0,
    this.img2.width / 2,
    this.img2.height,
    this.x,
    this.y,
    this.w,
    this.h
  );
  this.animateLeft()

} else {

  this.ctx.drawImage(
    this.imgStill,
    
    this.x, 
    this.y, 
    this.w / 2, 
    this.h);
}

   
    }

    
    
      
    
  
    move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  listeners() {
    document.onkeydown = k => {
      if (k.keyCode === UP_KEY) {
        this.vy = -5;
      } else if (k.keyCode === RIGHT_KEY) {
        this.vx = 5;
        this.animateRight()
        
      } else if (k.keyCode === DOWN_KEY) {
        this.vy = 5;
      } else if (k.keyCode === LEFT_KEY) {
        this.vx = -5;
        this.animateLeft()
        
      }

      document.onkeyup = k => {
        if (k.keyCode === UP_KEY) {
          this.vy = 0;
        } else if (k.keyCode === RIGHT_KEY) {
          this.vx = 0;
        } else if (k.keyCode === DOWN_KEY) {
          this.vy = 0;
        } else if (k.keyCode === LEFT_KEY) {
          this.vx = 0;
        }
      };
    };
  }
  animateRight() {
    this.tick++;

    if (this.tick > 8) {
      this.tick = 0;
      this.img.frameIndex++
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }

  animateLeft() {
    this.tick++;

    if (this.tick > 8) {
      this.tick = 0;
      this.img2.frameIndex++
    }

    if (this.img2.frameIndex >= this.img2.frames) {
      this.img2.frameIndex = 0;
    }
  }
}
