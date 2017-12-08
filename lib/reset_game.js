import { keepSpinning } from './spin_motion.js';
import { level1 } from './levels/level1';
import { clearTime } from './countdown_clock.js';
import { stopSpin } from './spin_motion.js';
import { keyupListner , keydownListner } from './mover_movement.js';
import { spaceBar } from './starting_the_game.js';



export const resetGame = (status) => {
  if(!status) {
    $("#you-win-screen").show();
    clearTimeout(clearTime);
    clearTimeout(stopSpin);
  } else {
    $(document).off("keydown");
    $(document).off("keyup");
    $("#gameOverScreen").show();
  }


  document.addEventListener("keypress", spaceBar, {once: true});

};
