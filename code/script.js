window.onload = function startGame() {
  const canvas = document.getElementById("canvas")
  
  const ctx = canvas.getContext("2d")
  

  const game = new Game(ctx)
  game.run()
  



  
}

