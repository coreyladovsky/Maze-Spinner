import { keepSpinning } from './spin_motion.js';
import { opener } from './opening_spin.js';
import { nextLevel } from './next_level.js';
import { game } from './levels/game.js';


 window.levelNumber = 0;

export const spaceBar = (e) => {
  if(e.keyCode === 32) {
    levelNumber =  0;
    nextLevel(40);
  }
};

$("#gameOverScreen").hide();
$("#you-win-screen").hide();

opener([1,-1], 0, "spinner-text");


document.addEventListener("keypress", spaceBar, {once: true});
