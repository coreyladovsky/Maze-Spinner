

class Mover {
  constructor(x, y, ctx) {
    this.run_x = x;
    this.run_y = y;
    this.last_x = x ;
    this.last_y = y ;

    this.right_side = this.run_x + 7;
    this.left_side = this.run_x - 7;
    this.top_side = this.run_y - 7;
    this.bottom_side = this.run_y + 7;

    this.movement = {
      left: false,
      right: false,
      up: false,
      down: false
    };
  }

    updateMover(){
      this.last_y = this.run_y;
      this.last_x = this.run_x;
      if(this.movement.up) {
        this.run_y -= 3;
        this.velocity_y = -3;
      }
      if(this.movement.down) {
        this.run_y += 3;
        this.velocity_y = 3;
      }
      if(this.movement.right) {
        this.run_x += 3;
        this.velocity_x = 3;
      }
      if(this.movement.left) {
        this.run_x -= 3;
        this.velocity_x = -3;
      }
    }
}

$(document).on("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
      this.movement.down = false;
      this.movement.up = true;
      break;
    case "ArrowDown":
    case "s":
      this.movement.up = false;
      this.movement.down = true;
      break;
    case "ArrowRight":
    case "d":
      this.movement.left = false;
      this.movement.right = true;
      break;
    case "ArrowLeft":
    case "a":
      this.movement.right = false;
      this.movement.left = true;
      break;
    default:
    console.log("Please keep your eyes and attention on the game!");
    console.log("https://github.com/coreyladovsky");
  }
});


$(document).on("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
    this.movement.up = false;
      break;
    case "ArrowDown":
    case "s":
    this.movement.down = false;
    break;
    case "ArrowRight":
    case "d":
    this.movement.right = false;
    break;
    case "ArrowLeft":
    case "a":
    this.movement.left = false;
      break;
    default:
    console.log("Please keep your eyes and attention on the game!");
  }
});
