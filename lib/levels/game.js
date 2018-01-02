import GameDrawing from '../gamedrawing.js';
import Mover from '../mover.js';
import { countDown, clearTime } from '../countdown_clock.js';
import { keepSpinning, stopSpin } from '../spin_motion.js';
import { keydownListner, keyupListner } from '../mover_movement.js';
import { levelArray } from '../levelArray.js';


export let cancelFrame;


export const game = ( levelNumber, timer=40)  => {
   countDown(timer);
  // let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('game');
  let ctx = canvas.getContext("2d");
    let mover = new Mover(82, 337, ctx);
    let gamedrawing =  new GameDrawing(levelNumber, ctx, mover,  30);

    function step() {
      ctx.clearRect(0,0, 700, 700);
      gamedrawing.draw_reset();
      mover.start();
      cancelFrame = requestAnimationFrame(step);
    }

    step();

    $(document).on("keydown", keydownListner(mover));
    $(document).on("keyup", keyupListner(mover));
    levelNumber += 1;
};
