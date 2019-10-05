window.onload = function startGame() {
  const canvas = document.getElementById("canvas")
  
  const ctx = canvas.getContext("2d")
  const tower = new Tower 

  const game = new Game(ctx)
  game.run()
  canvas.addEventListener("click", (e) =>{

    tower.addTower()



  })
}

