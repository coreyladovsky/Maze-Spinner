//   let looper;
//   let degrees = 0;
// function spinner(el,speed){
// 	var item = document.getElementById(el);
// 		item.style.transform = `rotate(${degrees}deg)`;
//   looper = setTimeout(() => {
//     spinner("canvas", 30)
//   }, 30);
// 	degrees++;
// 	if(degrees > 359){
// 		degrees = 1;
// 	}
// 	// document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
// }
// spinner("canvas", 30)
var degrees = 0 ;
let counter = 0;
let array = [-2, -1, 1, 2];
let angle;

function rotate(angle){
  degrees += angle;
  setTimeout(() => {
    counter++ ;
    let item = document.getElementById("canvas");
    item.style.transform = `rotate(${degrees}deg)`;
    if(counter < 90) {
      setTimeout(() => {
        rotate(angle);
      }, 10);
    }
  }, 10);
}

function randTime() {
  return Math.round(Math.random() * (7000 - 4000) + (4000));
}

function keepSpinning() {
  setTimeout(()=> {
    counter = 0;
    angle = array[Math.round(Math.random() * 3)];
    rotate(angle);
    keepSpinning();
  }, randTime());
}

keepSpinning();
