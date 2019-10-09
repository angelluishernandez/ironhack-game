window.onload = function startGame() {
  const canvas = document.getElementById("canvas")
  
  const ctx = canvas.getContext("2d")

  
  canvas.addEventListener("onclick", function(){
    game.buildTower()



  })


  const game = new Game(ctx, canvas)
  game.run()
  
  


  
}

