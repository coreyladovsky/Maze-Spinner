

const verticalCollisionCheck = (mover_y, mover_radius, tile_y, tile_height) => {
  if(mover_y + mover_radius > tile_y && mover_y + mover_radius < tile_y + tile_height){
    return true;
  }
  if(mover_y - mover_radius > tile_y && mover_y - mover_radius < tile_y + tile_height){
    return true;
  }

};


const horizontalCollisionCheck = (mover_x, mover_radius, tile_x, tile_width) => {
  if(mover_x + mover_radius > tile_x && mover_x + mover_radius < tile_x + tile_width) {
    return true;
  }
  if(mover_x - mover_radius > tile_x && mover_x - mover_radius < tile_x + tile_width) {
    return true;
  }
};

const trueCollisionCheck = (mover_x, mover_radius, mover_y, tile_y, tile_x, tile_width) => {
  if(horizontalCollisionCheck(mover_x, mover_radius, tile_x, tile_width) &&
    verticalCollisionCheck(mover_y, mover_radius, tile_y, tile_width)) {
    return true;
  }
};


// let spins;
// let degrees = 0;
// function spinner(el, speed) {
//   let item = document.getElementById(el);
//   item.style.transform = 'rotate(1deg)';
//   spins = setTimeout(spinner(el, 50), speed);
//   degrees++;
//   if(degrees > 359) {
//     degrees = 1;
//   }
// }
