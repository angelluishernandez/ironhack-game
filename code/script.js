window.onload = function startGame() {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  const game = new Game(ctx);
  game.run();

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
    const rect = canvas.getBoundingClientRect();

    game.mouseCoordinates = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.left
    };
    return game.mouseCoordinates;
  }
};
