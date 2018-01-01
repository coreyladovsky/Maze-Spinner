import { keepSpinning } from './spin_motion.js';
import { opener } from './opening_spin.js';
import { nextLevel } from './next_level.js';
import { maze1 } from './levels/level1.js';
import { game } from './levels/game.js';


export const spaceBar = (e) => {
  if(e.keyCode === 32) {
    nextLevel(maze1, 30);
  }
};

$("#gameOverScreen").hide();
$("#you-win-screen").hide();

opener([1,-1], 0, "spinner-text");


document.addEventListener("keypress", spaceBar, {once: true});
