import GameDrawing from '../gamedrawing.js';
import Mover from '../mover.js';
import { countDown, clearTime } from '../countdown_clock.js';
import { keepSpinning, stopSpin } from '../spin_motion.js';
import { keydownListner, keyupListner } from '../mover_movement.js';
import { levelArray } from '../levelArray.js';
import CountDown from '../countdown_clock.js';

class Game {
  constructor() {
    this.cancelFrame;
    // this.levelNumber = 0;
    // this.clock = new CountDown();
    this.game = document.getElementById("game");
    this.ctx = this.game.getContext("2d");
    this.mover = new Mover(82, 337, this.ctx);
    this.gameOver = false;
    this.gameDrawing = new GameDrawing(this.ctx, this.mover, this.duration);
    this.step = this.step.bind(this);
  }

  step() {
    this.ctx.clearRect(0,0, 700, 700);
    this.gameDrawing.draw_reset();
    this.mover.start();
    this.cancelFrame = requestAnimationFrame(this.step);
  }

  startClock(duration) {
    let clock = new CountDown(duration);
    clock.tick();
  }

  stopGame() {
    cancelAnimationFrame(this.cancelFrame);
  }

  play() {
    this.startClock();
    this.step();
    $(document).on("keydown", keydownListner(this.mover));
    $(document).on("keyup", keyupListner(this.mover));
  }
}

export default Game;
// export let cancelFrame;
// window.cancelFrame = 0
// let gamedrawing;
// let mover;
//
// export const game = (duration=40)  => {
//   countDown(duration);
  // let gameOver = false;
  // let canvas = document.getElementById('game');
  // let ctx = canvas.getContext("2d");

  // cancelAnimationFrame(cancelFrame);
  // if (typeof mover !== 'undefined' && typeof gamedrawing !== 'undefined') {
  // }
  // mover = new Mover(82, 337, ctx);
  // gamedrawing = new GameDrawing(ctx, mover,  40);
  //
  // let tick = 0

  // function step() {
  //
  //   if (tick === 120) {
  //     // tick = 0;
  //   }
  //   tick++
  //
  //   ctx.clearRect(0,0, 700, 700);
  //   gamedrawing.draw_reset();
  //   mover.start();
  //   cancelFrame = requestAnimationFrame(step);
  //   if (tick === 600) {
  //     // debugger
  //     cancelAnimationFrame(cancelFrame)
  //   }
  //   if(gameOver) {
  //     cancelAnimationFrame(cancelFrame);
  //   }
  // }

  // step();
  //
  // $(document).on("keydown", keydownListner(mover));
  // $(document).on("keyup", keyupListner(mover));

//
// };
