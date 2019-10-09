class Events{
  constructor(ctx){
    this.ctx = ctx
    this.mouseX = 0
    this.mouseY = 0
  }

mouseClickEvent(){
  this.ctx.canvas.addEventListener("mousedown", function(event){



      this.mouseX = event.clientX - canvas.offsetLeft, 
      this.mouseY = event.clientY - canvas.offsetTop

    return {
      x: this.mouseX, 
      y: this.mouseY


    }
  
    // return this.mouseX && this.mouseY
    


  })



}

}