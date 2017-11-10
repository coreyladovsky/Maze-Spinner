

const verticalCollisionCheck = (mover_y, tile_y, tile_height) => {
  if(mover_y  > tile_y && mover_y < tile_y + tile_height){
    return true;
  }
  if(mover_y  > tile_y && mover_y < tile_y + tile_height){
    return true;
  }

};


const horizontalCollisionCheck = (mover_x, tile_x, tile_width) => {
  if(mover_x  > tile_x && mover_x  < tile_x + tile_width) {
    return true;
  }
  if(mover_x  > tile_x && mover_x  < tile_x + tile_width) {
    return true;
  }
};

const trueCollisionCheck = (mover_x, mover_y, tile_y, tile_x, tile_width) => {
  if(horizontalCollisionCheck(mover_x, tile_x, tile_width) &&
    verticalCollisionCheck(mover_y, tile_y, tile_width)) {
    return true;
  }
};
