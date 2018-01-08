import GameDrawing from '../gamedrawing.js';
import Mover from '../mover.js';
import { countDown, clearTime } from '../countdown_clock.js';
import { keepSpinning, stopSpin } from '../spin_motion.js';
import { keydownListner, keyupListner } from '../mover_movement.js';
import { levelArray } from '../levelArray.js';


export let cancelFrame;
let gamedrawing;
let mover;

export const game = (duration=40)  => {
  countDown(duration);
  let gameOver = false;
  let canvas = document.getElementById('game');
  let ctx = canvas.getContext("2d");

  if (typeof mover !== 'undefined' || typeof gamedrawing !== 'undefined') {
     cancelAnimationFrame(cancelFrame);
  }
  mover = new Mover(82, 337, ctx);
  gamedrawing = new GameDrawing(ctx, mover,  30);

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
