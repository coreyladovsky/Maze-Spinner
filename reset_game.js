function resetGame() {
  $("#gameOverScreen").show();
  document.addEventListener("keypress", (e) => {
  if(e.keyCode === 32) {
    $("#opening-screen").hide();
    $("#gameOverScreen").hide();
    $("#level2").hide();
    $("#canvas").hide();
    $("#level3").hide();
    $("#level1").show();
    let item = document.getElementById("level1");
    item.style.transform = `rotate(0deg)`;
    keepSpinning([-2, -1, 1, 2], 0, "level1");
    startGame(30);
  }}, {once: true});
}
