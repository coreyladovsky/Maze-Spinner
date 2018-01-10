import { stopSpin } from './spin_motion.js';
import { resetGame } from './reset_game.js';
import { cancelFrame } from './levels/game.js';

export let clearTime;

class CountDown {
  constructor(duration = 30) {
    this.duration = duration;
    this.color = "white";
    this.lose = false;
  }

  tick() {
    if(this.duration < 0) {
      document.getElementById('timer').innerHTML = "Times up!";
      clearTimeout(clearTime);
      clearTimeout(stopSpin);
      cancelAnimationFrame(cancelFrame);
      this.lose = true;
      resetGame(this. lose);
    } else {
        let minutes = Math.floor(this.duration / 60);
        let seconds = this.duration % 60;
        clearTime = setTimeout( () => {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        if(seconds <= 10){
          this.color = "red";
        }
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.duration--;
        this.tick(this.duration);
        document.getElementById('timer').innerHTML = minutes + ":" + seconds;
        $("#timer").css({"color": this.color});

      }, 1000);
    }
  }

}

export default CountDown; 

// export const countDown = (duration) => {
//   let color = "white";
//   let lose = false;
//   if(duration < 0) {
//     document.getElementById('timer').innerHTML = "Times up!";
//       clearTimeout(clearTime);
//       clearTimeout(stopSpin);
//       cancelAnimationFrame(cancelFrame);
//       lose = true;
//     resetGame(lose);
//   } else {
//   let minutes = Math.floor(duration / 60);
//   let seconds = duration % 60;
//     clearTime = setTimeout( () => {
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     if(seconds <= 10){
//       color = "red";
//     }
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     duration--;
//     countDown(duration);
//     document.getElementById('timer').innerHTML = minutes + ":" + seconds;
//     $("#timer").css({"color": color});
//
//   }, 1000);
// }
// };
