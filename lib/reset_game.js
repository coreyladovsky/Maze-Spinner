import { clearTime } from './countdown_clock.js';
import { stopSpin } from './spin_motion.js';
import { spaceBar } from './starting_the_game.js';



export const resetGame = (status) => {
  if(!status) {
    $("#you-win-screen").show();
    clearTimeout(clearTime);
    clearTimeout(stopSpin);
  } else {




    newGame.stopGame();
    $(document).off("keydown");
    $(document).off("keyup");
    $("#gameOverScreen").show();

  }


  document.addEventListener("keypress", spaceBar, {once: true});

};
