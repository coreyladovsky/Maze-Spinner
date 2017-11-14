function countDown(duration) {
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
    seconds = seconds < 10 ? "0" + seconds : seconds;
    duration--;
    countDown(duration);
    document.getElementById('timer').innerHTML =minutes + ":" + seconds;

  }, 1000);
}
}
