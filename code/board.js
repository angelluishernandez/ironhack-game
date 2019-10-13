class Board {
  constructor(ctx) {
    this.ctx = ctx;
    this.waypoints = [
      { x: 0, y: 100 },
      { x: 700, y: 100 },
      { x: 700, y: 300 },
      { x: 100, y: 300 },
      { x: 100, y: 500 },
      { x: 300, y: 500 },
      { x: 1000, y: 500 }
    ];

    this.waypoints2 =[

      { x: 0, y: 150 },
      { x: 650, y: 150 },
      { x: 650, y: 350 },
      { x: 150, y: 350 },
      { x: 150, y: 550 },
      { x: 300, y: 550 },
      { x: 1000, y: 550}



    ], 
    this.img = new Image();
    this.img.src =
      "./imgs/Dx3sBTBWoAETO5s.jpg";
  }
  draw() {
    // this.ctx.fillStyle = "url(C:\Users\Ángel\Documents\ironhack-game-master\imgs\first_light.300dpi.jpg)"
    this.ctx.drawImage(
      this.img,
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );

    //First line


    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgb(170,170,170)";
    
    this.ctx.moveTo(this.waypoints[0].x, this.waypoints[0].y);
    for (let i = 1; i < this.waypoints.length; i++) {
      this.ctx.lineTo(this.waypoints[i].x, this.waypoints[i].y);
    }
    this.ctx.stroke();
    this.ctx.restore();

    //Second line
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgb(170,170,170)";
    
    this.ctx.moveTo(this.waypoints2[0].x, this.waypoints2[0].y);
    for (let i = 1; i < this.waypoints2.length; i++) {
      this.ctx.lineTo(this.waypoints2[i].x, this.waypoints2[i].y);
    }
    this.ctx.stroke();
    this.ctx.restore();


    
  }
}
