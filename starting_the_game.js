function spaceBar(e) {
  if(e.keyCode === 32) {
    $("#opening-screen").hide();
    $("#you-win-screen").hide();
    $("#gameOverScreen").hide();
    $("#level2").hide();
    $("#canvas").hide();
    $("#level3").hide();
    $("#level1").show();

    startGame(5);
    keepSpinning([-2, -1, 1, 2], 0, "level1");
  }
}



$("#gameOverScreen").hide();
  $("#you-win-screen").hide();


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

opener([1,-1], 0, "spinner-text")
// loops("spinning-star", 50);
// loops("spinning-star2", 50);

  document.addEventListener("keypress", (e) => spaceBar(e), {once: true})
