import { keepSpinning, stopSpin } from './spin_motion.js';
import { clearTime } from './countdown_clock.js';
import { resetGame } from './reset_game.js';


    export const nextLevel = (showLevel, nextLevelFn, duration) => {
      if (nextLevelFn === resetGame) {
        resetGame();
        return;
      }
      clearTimeout(clearTime);
      clearTimeout(stopSpin);
      $("#timer").css({"color": "white"});
      document.getElementById('timer').innerHTML = "Ready!";


      $("#opening-screen").hide();
      $("#you-win-screen").hide();
      $("#gameOverScreen").hide();
      $("#level1").hide();
      $("#level2").hide();
      $("#level3").hide();
      $("#level5").hide();


      $(showLevel).show();

      let item = document.getElementById(showLevel.slice(1));
      item.style.transform = `rotate(0deg)`;
      keepSpinning([-2, -1, 1, 2], 0, item);
      nextLevelFn(duration);
    };
