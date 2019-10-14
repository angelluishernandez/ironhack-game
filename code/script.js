window.onload = function startGame() {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  const game = new Game(ctx);
  const start = document.getElementById("start");
  start.onclick = () => game.run();
  const restart = document.getElementById("restart")
  restart.onclick = () => window.location.reload()
  canvas.addEventListener("mousedown", getMousePosition, false);
  canvas.addEventListener(
    "mousedown",
    function(e) {
      const coordinates = getMousePosition(e);
      if (!game.checkIfInPath(coordinates.x, coordinates.y)) {
        game.towers.push(new Tower(game.ctx, coordinates.x, coordinates.y));
        console.log(coordinates);
      }
    },
    false
  );

  function getMousePosition(e) {
    const canvasBounds = canvas.getBoundingClientRect();
    game.mouseCoordinates = {
      x: e.pageX - canvasBounds.left,
      y: e.pageY - canvasBounds.top
    };
    return game.mouseCoordinates;
  }
};
