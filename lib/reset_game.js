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
    $(document).off("keydown", keydownListner);
    $("#gameOverScreen").show();
  }

  document.addEventListener("keypress", spaceBar, {once: true});
  // document.addEventListener("keypress", (e) => {
  // if(e.keyCode === 32) {
  //   $("#you-win-screen").hide();
  //   $("#opening-screen").hide();
  //   $("#gameOverScreen").hide();
  //   $("#level2").hide();
  //   $("#level5").hide();
  //   $("#level3").hide();
  //   $("#level1").show();
  //   let item = document.getElementById("level1");
  //   item.style.transform = `rotate(0deg)`;
  //   keepSpinning([-2, -1, 1, 2], 0, item);
  //   level1(30);
  // }}, {once: true});
};
