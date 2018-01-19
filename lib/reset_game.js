import { clearTime } from './countdown_clock.js';
import { stopSpin } from './spin_motion.js';
import { spaceBar } from './starting_the_game.js';



export const resetGame = (status) => {
  if(!status) {
    $("#you-win-screen").show();

  } else {

    $("#gameOverScreen").show();

  }

  clearTimeout(clearTime);
  clearTimeout(stopSpin);
  let lastGame = newGame
  newGame = false;

  lastGame.stopClock();
  lastGame.stopGame();
  $(document).off("keydown");
  $(document).off("keyup");


  document.addEventListener("keypress", spaceBar, {once: true});
};
