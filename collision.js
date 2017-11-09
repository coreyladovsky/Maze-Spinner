

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
    // console.log("horizontal collision");
    return true;
  }
  if(mover_x - mover_radius > tile_x && mover_x - mover_radius < tile_x + tile_width) {
    // console.log("horizontal collison");
    return true;
  }
};

const trueCollisionCheck = (mover_x, mover_radius, mover_y, tile_y, tile_x, tile_width) => {
  if(horizontalCollisionCheck(mover_x, mover_radius, tile_x, tile_width) && verticalCollisionCheck(mover_y, mover_radius, tile_y, tile_width)) {
    return true;
  }
};

//
// number  greater then tile left and number is less than tile right
//
// number is greater than tile top, and number is less than tile bottom
