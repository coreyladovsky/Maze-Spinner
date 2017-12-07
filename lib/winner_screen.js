import { resetGame } from './reset_game.js';
import { stopSpin } from './spin_motion.js';
import { clearTime } from './countdown_clock.js';


export const restartGame = () => {
  $("#you-win-screen").show();
  clearTimeout(clearTime);
  clearTimeout(stopSpin);
  resetGame();
};
