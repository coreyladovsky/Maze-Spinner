

export const keydownListner = (mover) => (e) => {
 switch (e.key) {
   case "ArrowUp":
   case "w":
     mover.movement.down = false;
     mover.movement.up = true;
     break;
   case "ArrowDown":
   case "s":
     mover.movement.up = false;
     mover.movement.down = true;
     break;
   case "ArrowRight":
   case "d":
     mover.movement.left = false;
     mover.movement.right = true;
     break;
   case "ArrowLeft":
   case "a":
     mover.movement.right = false;
     mover.movement.left = true;
     break;
   default:
   console.log("Please keep your eyes and attention on the game!");
   console.log("https://github.com/coreyladovsky");
 }

};


export const keyupListner = (mover) => (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
    mover.movement.up = false;
      break;
    case "ArrowDown":
    case "s":
    mover.movement.down = false;
    break;
    case "ArrowRight":
    case "d":
    mover.movement.right = false;
    break;
    case "ArrowLeft":
    case "a":
    mover.movement.left = false;
      break;
    default:
    console.log("Please keep your eyes and attention on the game!");
  }
};
