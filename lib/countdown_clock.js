import { stopSpin } from './spin_motion.js';
import { resetGame } from './reset_game.js';
import { cancelFrame } from './levels/game.js';

export let clearTime;

class CountDown {
  constructor() {
    this.duration;
    this.color = "white";
    this.lose = false;
    this.clearTime;
  }

  stop_tick() {
    clearTimeout(this.clearTime);
  }

  tick(duration) {
    if(duration < 0) {
      document.getElementById('timer').innerHTML = "Times up!";
      clearTimeout(this.clearTime);
      clearTimeout(stopSpin);
      cancelAnimationFrame(cancelFrame);
      this.lose = true;
      resetGame(this.lose);
    } else {
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;
      this.clearTime = setTimeout( () => {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        if(seconds <= 10){
          this.color = "red";
        } else {
          this.color = "white"; 
        }
        seconds = seconds < 10 ? "0" + seconds : seconds;
        duration--;
        this.tick(duration);
        document.getElementById('timer').innerHTML = minutes + ":" + seconds;
        $("#timer").css({"color": this.color});

      }, 1000);
    }
  }

}

export default CountDown;
