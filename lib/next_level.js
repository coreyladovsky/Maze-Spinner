import { keepSpinning, stopSpin } from './spin_motion.js';
import { clearTime } from './countdown_clock.js';
import { resetGame } from './reset_game.js';
import { game } from './levels/game.js';
import { keydownListner, keyupListner } from './mover_movement.js';


    export const nextLevel = (duration) => {
      if (duration === resetGame) {
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
      $("#game").show();
      let item = document.getElementById("game");
      item.style.transform = `rotate(0deg)`;
      keepSpinning([-2, -1, 1, 2], 0, item);


      // console.log(cancelFrame);
      // cancelAnimationFrame(cancelFrame);
      // cancelAnimationFrame(cancelFrame + 1);
      // cancelAnimationFrame(cancelFrame - 1);
      game(duration);
    };
