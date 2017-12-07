
class GameDrawing {
  constructor(maze, ctx, mover) {
    this.maze = maze;
    this.ctx = ctx;
    this.this.mover = this.mover;
    this.gameOver = false;
  }

  draw_reset() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Arial";
    this.ctx.fillText("N",330,25);
    this.ctx.beginPath();
    this.ctx.arc(350, 350, 320, 0, Math.PI * 2, true);
    this.ctx.moveTo(110, 110);
    this.ctx.fillStyle = "yellow";
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

    for(let y = 0; y < this.maze.length; y++) {
      for(let x = 0; x < this.maze[y].length; x++) {
        let tile = this.maze[y][x];
        if(this.maze[y][x] === 1) {
          this.ctx.fillStyle = "black";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);

          if(trueCollisionCheck(this.mover.run_x + 7, this.mover.run_y, y * 25, x * 25, 25) || trueCollisionCheck(this.mover.run_x - 7, this.mover.run_y, y * 25, x * 25, 25)) {
            this.mover.revertX();
          }
          if(trueCollisionCheck(this.mover.run_x + 7, this.mover.run_y - 0.5, y  * 25, x * 25, 25) || trueCollisionCheck(this.mover.run_x - 7, this.mover.run_y - 3.5, y * 25, x * 25, 25)) {
            this.mover.revertX();
          }
          if(trueCollisionCheck(this.mover.run_x + 7, this.mover.run_y + 3.5, y * 25, x * 25, 25) || trueCollisionCheck(this.mover.run_x - 7, this.mover.run_y + 3.5, y * 25, x * 25, 25)) {
            this.mover.revertX();
          }
          if(trueCollisionCheck(this.mover.run_x, this.mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(this.mover.run_x, this.mover.run_y - 7, y * 25, x * 25, 25)) {
            this.mover.revertY();
          }
          if(trueCollisionCheck(this.mover.run_x + 3.6, this.mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(this.mover.run_x + 3.6, this.mover.run_y - 7, y * 25, x * 25, 25)) {
            this.mover.revertY();
          }
          if(trueCollisionCheck(this.mover.run_x - 3.6, this.mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(this.mover.run_x - 3.6, this.mover.run_y - 7, y * 25, x * 25, 25)) {
            this.mover.revertY();
          }

        } else if(maze[y][x] === 2) {
          this.ctx.fillStyle = "green";
          this.ctx.fillRect(x * 25, y * 25, 25, 25)


        } else if(maze[y][x] === 3) {
          ctx.fillStyle = "white";
          ctx.fillRect(x * 25, y * 25, 25, 25)
        } else if(maze[y][x] === 4) {
          ctx.fillStyle = "red";
          ctx.fillRect(x * 25, y * 25, 25, 25)

          if(trueCollisionCheck(this.mover.run_x - 7, this.mover.run_y, y * 25, x * 25, 25)) {

            if(this.gameOver === false) {
              nextLevel();
            }
             this.gameOver = true ;




          }
        }
      }
    }

  }
}

export default GameDrawing;
