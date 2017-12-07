export let clearTime;

export const countDown = (duration) => {
  let color = "white"
  if(duration < 0) {
    document.getElementById('timer').innerHTML = "Times up!";
      clearTimeout(clearTime);
      clearTimeout(stopSpin);
    resetGame();
  } else {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
    clearTime = setTimeout( () => {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if(seconds <= 10){
      color = "red"
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    duration--;
    countDown(duration);
    document.getElementById('timer').innerHTML =minutes + ":" + seconds;
    $("#timer").css({"color": color});

  }, 1000);
}
};
