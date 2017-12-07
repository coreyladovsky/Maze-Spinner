

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

  this.ctx = ctx;

}

  start() {

    this.ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    ctx.moveTo(110, 110);
    ctx.stroke();
    ctx.fill()
    this.updateMover()
    ctx.closePath();

  }
  revertAll() {
      this.run_y = this.last_y
      this.run_x = this.last_x;
      this.ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
      ctx.moveTo(110, 110);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  revertX() {
      this.run_x = this.last_x;
      this.ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
      ctx.moveTo(110, 110);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }

  revertY() {
      this.run_y = this.last_y;
      this.ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
      ctx.moveTo(110, 110);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }




    updateMover(){
      this.last_y = this.run_y
      this.last_x = this.run_x
      if(this.movement.up) {
        this.run_y -= 3
        this.velocity_y = -3
      }
      if(this.movement.down) {
        this.run_y += 3
        this.velocity_y = 3
      }
      if(this.movement.right) {
        this.run_x += 3
        this.velocity_x = 3
      }
      if(this.movement.left) {
        this.run_x -= 3
        this.velocity_x = -3
      }
    }
}

function step() {
  ctx.clearRect(0,0, 700, 700)
  draw_reset()
  mover.start()
  cancelFrame = requestAnimationFrame(step)
}

$(document).on("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
      mover.movement.down = false
      mover.movement.up = true
      break;
    case "ArrowDown":
    case "s":
      mover.movement.up = false
      mover.movement.down = true
      break;
    case "ArrowRight":
    case "d":
      mover.movement.left = false
      mover.movement.right = true
      break;
    case "ArrowLeft":
    case "a":
      mover.movement.right = false
      mover.movement.left = true
      break;
    default:
    console.log("Please keep your eyes and attention on the game!");
    console.log("https://github.com/coreyladovsky");
  }
})
step()



$(document).on("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
    mover.movement.up = false
      break;
    case "ArrowDown":
    case "s":
    mover.movement.down = false
    break;
    case "ArrowRight":
    case "d":
    mover.movement.right = false
    break;
    case "ArrowLeft":
    case "a":
    mover.movement.left = false
      break;
    default:
    console.log("Please keep your eyes and attention on the game!");
  }
})
