import { keepSpinning } from './spin_motion.js';
import { opener } from './opening_spin.js';
// import { resetGame } from 'lib/reset_game.js';
// import { countDown } from 'lib/countdown_clock.js';
// import { collision } from 'lib/collision.js';
import { startGame } from './levels/level1.js';


function spaceBar(e) {
  if(e.keyCode === 32) {
    $("#opening-screen").hide();
    $("#you-win-screen").hide();
    $("#gameOverScreen").hide();
    $("#level2").hide();
    $("#canvas").hide();
    $("#level3").hide();
    $("#level1").show();

    startGame(30);
    keepSpinning([-2, -1, 1, 2], 0, document.getElementById("level1"));
  }
}



$("#gameOverScreen").hide();
  $("#you-win-screen").hide();


// let looper;
// let deg = 0;
// function loops(el,speed){
// var item = document.getElementById(el);
//   item.style.transform = `rotate(${deg}deg)`;
// looper = setTimeout(() => {
//   loops(el, 50)
// }, 5);
// deg++;
// if(deg > 359){
//   deg = 1;
// }
// }

opener([1,-1], 0, "spinner-text");


document.addEventListener("keypress", spaceBar, {once: true});
