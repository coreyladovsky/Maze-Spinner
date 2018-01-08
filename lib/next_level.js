import { keepSpinning, stopSpin } from './spin_motion.js';
import { clearTime } from './countdown_clock.js';
import { resetGame } from './reset_game.js';
import { game, cancelFrame } from './levels/game.js';



    export const nextLevel = (duration) => {
      if (duration === resetGame) {
        resetGame();
        return;
      }
      clearTimeout(clearTime);
      clearTimeout(stopSpin);
      // cancelAnimationFrame(cancelFrame);
      $("#timer").css({"color": "white"});
      document.getElementById('timer').innerHTML = "Ready!";


      $("#opening-screen").hide();
      $("#you-win-screen").hide();
      $("#gameOverScreen").hide();
      $("#game").show();
      let item = document.getElementById("game");
      item.style.transform = `rotate(0deg)`;
      keepSpinning([-2, -1, 1, 2], 0, item);

      game(duration);
    };
