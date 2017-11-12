function spaceBar(e) {
  if(e.keyCode === 32) {
    $("#opening-screen").hide()
    $("#gameOverScreen").hide()
    startGame(3);
    keepSpinning([-2, -1, 1, 2], 0, "canvas");
    // countDown(40);
  }
  // document.removeEventListener("keypress", (e) => SpaceBar(e))
}



$("#gameOverScreen").hide()

let looper;
let deg = 0;
function loops(el,speed){
var item = document.getElementById(el);
  item.style.transform = `rotate(${deg}deg)`;
looper = setTimeout(() => {
  loops(el, 50)
}, 5);
deg++;
if(deg > 359){
  deg = 1;
}
}


loops("spinning-star", 50);
loops("spinning-star2", 50);

  document.addEventListener("keypress", (e) => spaceBar(e), {once: true})
