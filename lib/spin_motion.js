let stopSpin;

function rotate(angle, counter, degrees, el){
  degrees += angle;
  setTimeout(() => {
    counter++ ;
    el.style.transform = `rotate(${degrees}deg)`;
    if(counter < 90) {
      setTimeout(() => {
        rotate(angle, counter, degrees, el);
      }, 5);
    }
  }, 5);
}

function randTime() {
  return Math.round(Math.random() * (5000 - 4500) + (4500));
}

export const  keepSpinning = (array, degrees, el) => {
   stopSpin = setTimeout(()=> {
    let counter = 0;
    let angle = array[Math.round(Math.random() * 3)];
    rotate(angle, counter, degrees, el);
    degrees += (angle * 90);
    keepSpinning(array, degrees, el);
  }, randTime());
};
