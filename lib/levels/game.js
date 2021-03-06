import GameDrawing from '../gamedrawing.js';
import Mover from '../mover.js';
import { countDown, clearTime } from '../countdown_clock.js';
import { keepSpinning, stopSpin, rotator, rotatie } from '../spin_motion.js';
import { keydownListner, keyupListner } from '../mover_movement.js';
import { levelArray } from '../levelArray.js';
import CountDown from '../countdown_clock.js';

class Game {
  constructor() {
    this.cancelFrame;
    this.game = document.getElementById("game");
    this.ctx = this.game.getContext("2d");
    this.mover = new Mover(82, 337, this.ctx);
    this.gameOver = false;
    this.gameDrawing = new GameDrawing(this.ctx, this.mover);
    this.step = this.step.bind(this);
    this.currentLevel = 0;
    this.clock = new CountDown();
  }

  step() {
    this.ctx.clearRect(0,0, 700, 700);
    this.gameDrawing.draw_reset();
    this.mover.start();
    this.cancelFrame = requestAnimationFrame(this.step);
    if (this.currentLevel !== levelNumber) {
      this.currentLevel ++ ;
      this.nextLevel();
    }
  }

  startClock() {
    this.clock.tick(levelArray[levelNumber][1]);
  }

  stopClock() {
    this.clock.stop_tick();
  }

  clockReset() {
    this.stopClock();
    document.getElementById('timer').innerHTML = "Ready!";
    $("#timer").css({"color": "white"});
    this.startClock();
  }

  stopGame() {
    cancelAnimationFrame(this.cancelFrame);
  }

  newPieces() {
    this.mover = new Mover(82, 337, this.ctx);
    this.gameDrawing = new GameDrawing(this.ctx, this.mover, this.duration);
  }

  startSpin() {
    this.game.style.transform = `rotate(0deg)`;
    keepSpinning([-2, -1, 1, 2], 0, this.game);
  }

  nextLevel() {
    clearTimeout(stopSpin);
    clearTimeout(rotator);
    clearTimeout(rotatie);
    this.newPieces();
    this.startSpin();
    this.clockReset();
    this.move();
  }

  move() {
    $(document).on("keydown", keydownListner(this.mover));
    $(document).on("keyup", keyupListner(this.mover));
  }

  play() {
    this.clockReset();
    this.step();
    this.move();
  }
}

export default Game;
