  let looper;
  let degrees = 0;
function spinner(el,speed){
	var item = document.getElementById(el);
		item.style.transform = `rotate(${degrees}deg)`;
  looper = setTimeout(() => {
    spinner("canvas", 30)
  }, 30);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	// document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}
spinner("canvas", 30)

let counter = 0

Math.round(Math.random() * 3)
