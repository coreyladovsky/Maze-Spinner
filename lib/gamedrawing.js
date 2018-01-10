import { trueCollisionCheck } from './collision';
import { nextLevel } from './next_level.js';
import { restartGame } from './winner_screen.js';
import { levelArray } from './levelArray.js';
// import { levelNumber } from './starting_the_game.js';

class GameDrawing {
  constructor(ctx, mover, duration=25) {
    this.maze = levelArray[levelNumber];
    this.ctx = ctx;
    this.mover = mover;
    this.gameOver = false;
    this.nextMaze = levelNumber + 1;
    this.duration = duration;
    this.draw_reset = this.draw_reset.bind(this);
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
    console.log(this.ctx);
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

        } else if(this.maze[y][x] === 2) {
          this.ctx.fillStyle = "green";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);


        } else if(this.maze[y][x] === 3) {
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);
        } else if(this.maze[y][x] === 4) {
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);

          if(trueCollisionCheck(this.mover.run_x - 7, this.mover.run_y, y * 25, x * 25, 25)) {

            if(this.gameOver === false) {
              levelNumber += 1;
              nextLevel(this.duration);
            }
             this.gameOver = true ;




          }
        }
      }
    }

  }
}

export default GameDrawing;
