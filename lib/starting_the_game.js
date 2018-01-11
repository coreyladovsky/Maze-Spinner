import { keepSpinning } from './spin_motion.js';
import { opener } from './opening_spin.js';
import { nextLevel } from './next_level.js';
import Game from './levels/game.js';

window.levelNumber = 0;
window.newGame = false ;
export const spaceBar = (e) => {
  if(e.keyCode === 32) {
    levelNumber = 0;
    $("#gameOverScreen").hide();
    $("#you-win-screen").hide();
    if(newGame) {
      newGame.clockReset();
      newGame.stopGame();
    }
    newGame = new Game();
    newGame.play();
    let item = document.getElementById("game");
    item.style.transform = `rotate(0deg)`;
    keepSpinning([-2, -1, 1, 2], 0, item);
    $("#opening-screen").hide();
    $("#game").show();
  }
};

$("#gameOverScreen").hide();
$("#you-win-screen").hide();

opener([1,-1], 0, "spinner-text");


document.addEventListener("keypress", spaceBar, {once: true});
