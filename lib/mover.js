

class Mover {
  constructor(x, y, ctx) {
    this.run_x = x;
    this.run_y = y;
    this.last_x = x ;
    this.last_y = y ;
    this.ctx = ctx;

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

    start() {
      this.ctx.fillStyle = "blue";
      this.ctx.beginPath();
      this.ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true);
      this.ctx.moveTo(110, 110);
      this.ctx.stroke();
      this.ctx.fill();
      this.updateMover();
      this.ctx.closePath();
    }

    revertAll() {
        this.run_y = this.last_y;
        this.run_x = this.last_x;
        this.ctx.fillStyle = "blue";
        this.ctx.beginPath();
        this.ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true);
        this.ctx.moveTo(110, 110);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
      }
    revertX() {
        this.run_x = this.last_x;
        this.ctx.fillStyle = "blue";
        this.ctx.beginPath();
        this.ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true);
        this.ctx.moveTo(110, 110);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
      }

    revertY() {
        this.run_y = this.last_y;
        this.ctx.fillStyle = "blue";
        this.ctx.beginPath();
        this.ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true);
        this.ctx.moveTo(110, 110);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
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

export default Mover;
