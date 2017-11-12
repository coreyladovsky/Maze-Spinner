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
// var degrees = 0 ;
// let counter = 0;
// let array = [-2, -1, 1, 2];
// let angle;
let stopSpin;

function rotate(angle, counter, degrees, el){
  degrees += angle;
  // console.log(degrees);
  setTimeout(() => {
    counter++ ;

    if(counter < 90) {
      setTimeout(() => {
        rotate(angle, counter, degrees, el);
      }, 10);
    }
  }, 10);
}

function randTime() {
  return 3000
  return Math.round(Math.random() * (7000 - 4000) + (4000));
}

 function keepSpinning(array, degrees, el) {
   stopSpin = setTimeout(()=> {
    let counter = 0;
    let angle = array[Math.round(Math.random() * 3)];
    rotate(angle, counter, degrees, el);
    degrees += (angle * 90);
    keepSpinning(array, degrees, el);
  }, randTime());
}

// keepSpinning();

// function gameOver() {
//
// }
