window.onload = function startGame() {
  const canvas = document.getElementById("canvas")
  
  const ctx = canvas.getContext("2d")



  const game = new Game(ctx)
  game.run()
  

  
  const mouseClick = canvas.onmousedown = function(e){

    const rect = canvas.getBoundingClientRect();
    return  {
      posTowerX : e.clientX - rect.left,
      posTowerY : e.clientY - rect.top


    }
      
      
  }
  canvas.addEventListener("mousedown", game.placeTower(mouseClick.posTowerX, mouseClick.posTowerY))


  
}



