import GameDrawing from '../gamedrawing.js';
import Mover from '../mover.js';
import { countDown, clearTime } from '../countdown_clock.js';
import { keepSpinning, stopSpin } from '../spin_motion.js';
import { level2 } from './level2';
import { keydownListner, keyupListner } from '../mover_movement.js';


export let cancelFrame;

export const game = (maze, timer=40)  => {
  let nextLevel;
   countDown(timer);
  // let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('game');
  let ctx = canvas.getContext("2d");
    let mover = new Mover(82, 337, ctx);
    let gamedrawing =  new GameDrawing(maze, ctx, mover, "#level2", level2, 30);

    function step() {
      ctx.clearRect(0,0, 700, 700);
      gamedrawing.draw_reset();
      mover.start();
      cancelFrame = requestAnimationFrame(step);
    }

    step();

    $(document).on("keydown", keydownListner(mover));
    $(document).on("keyup", keyupListner(mover));

};
