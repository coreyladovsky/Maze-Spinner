
  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext("2d")
    const draw_reset = () => {
      ctx.fillStyle = "white"
      ctx.font = "30px Arial";
      ctx.fillText("N",330,25);
      ctx.beginPath();
      ctx.arc(350, 350, 320, 0, Math.PI * 2, true)
      ctx.moveTo(110, 110);
      ctx.fillStyle = "yellow"
      ctx.stroke();
      ctx.fill();
      ctx.closePath();


      const maze = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,1,1,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,3,3,3,1,3,1,1,3,1,3,3,3,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,3,1,3,1,3,3,1,3,1,3,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,3,1,3,1,3,1,3,1,3,3,1,3,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,3,3,3,3,1,3,1,3,1,3,1,3,1,1,3,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,3,1,1,1,1,3,3,3,1,3,3,3,1,3,3,1,3,3,3,1,0,0,0,0],
        [0,0,0,1,3,3,3,3,1,1,1,1,1,1,1,1,1,3,1,3,3,1,3,1,0,0,0,0],
        [0,0,1,1,1,1,1,3,1,3,3,3,3,3,3,3,3,3,1,3,1,1,3,1,0,0,0,0],
        [0,0,1,2,2,3,1,3,1,3,1,1,1,1,1,1,1,1,1,3,3,1,3,1,0,0,0,0],
        [0,0,1,1,1,3,1,3,1,3,1,3,3,3,3,1,3,3,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,1,3,1,3,1,3,3,3,1,1,3,1,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,1,3,3,3,1,1,1,1,1,3,3,1,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,3,3,3,3,3,1,1,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,1,3,3,3,3,1,1,1,1,1,1,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,1,3,1,1,1,1,1,3,3,3,1,3,1,3,1,3,1,4,1,0,0,0,0],
        [0,0,0,0,0,1,3,1,3,3,3,1,3,1,3,1,3,1,3,1,3,1,4,1,0,0,0,0],
        [0,0,0,0,0,1,3,3,3,1,3,1,3,1,3,1,3,1,3,1,3,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,3,1,3,1,3,1,3,1,3,3,3,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,3,3,3,1,3,3,3,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ]
      for(let y = 0; y < maze.length; y++) {
        for(let x = 0; x < maze[y].length; x++) {
          let tile = maze[y][x]
          if(maze[y][x] === 1) {
            ctx.fillStyle = "black";
            ctx.fillRect(x * 25, y * 25, 25, 25)

            if(trueCollisionCheck(mover.run_x + 7, mover.run_y, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {
              mover.revertX();
            }
            if(trueCollisionCheck(mover.run_x + 7, mover.run_y - 3.5, y  * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y - 3.5, y * 25, x * 25, 25)) {
              mover.revertX();
            }
            if(trueCollisionCheck(mover.run_x + 7, mover.run_y + 3.5, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y + 3.5, y * 25, x * 25, 25)) {
              mover.revertX();
            }
            if(trueCollisionCheck(mover.run_x, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x, mover.run_y - 7, y * 25, x * 25, 25)) {
              mover.revertY();
            }
            if(trueCollisionCheck(mover.run_x + 3.6, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x + 3.6, mover.run_y - 7, y * 25, x * 25, 25)) {
              mover.revertY();
            }
            if(trueCollisionCheck(mover.run_x - 3.6, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 3.6, mover.run_y - 7, y * 25, x * 25, 25)) {
              mover.revertY();
            }

          } else if(maze[y][x] === 2) {
            ctx.fillStyle = "green";
            ctx.fillRect(x * 25, y * 25, 25, 25)


          } else if(maze[y][x] === 3) {
            ctx.fillStyle = "white";
            ctx.fillRect(x * 25, y * 25, 25, 25)
          } else if(maze[y][x] === 4) {
            ctx.fillStyle = "red";
            ctx.fillRect(x * 25, y * 25, 25, 25)

            if(trueCollisionCheck(mover.run_x, mover.run_y - 7, y * 25, x * 25, 25)) {
              gameOver();
            }
          }
        }
      }
    };

    function gameOver() {
      $("#gameOverScreen").show();
      // document.removeEventListener("keydown");
      
      clearTimeout(stopSpin);

      document.addEventListener("keypress", (e)=>{
        if(e.keyCode === 32) {
          $("#gameOverScreen").hide();
          // document.removeEventListener("keypress")
          // keepSpinning();
        }
      });

    }

    const mover = {
      run_x: 555,
      run_y: 337,
      last_x: 555,
      last_y: 337,
      right_side: this.run_x + 7,
      left_side: this.run_x - 7,
      top_side: this.run_y - 7,
      bottom_side: this.run_y + 7,
      velocity_y: 0,
      velocity_x: 0,
      ctx,
      start: function() {

        this.ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
        ctx.moveTo(110, 110);
        ctx.stroke();
        ctx.fill()
        this.updateMover()
        ctx.closePath();

      },
      revertAll: function() {
          this.run_y = this.last_y
          this.run_x = this.last_x;
          this.ctx.fillStyle = "blue";
          ctx.beginPath();
          ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
          ctx.moveTo(110, 110);
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
        },
      revertX: function() {
          this.run_x = this.last_x;
          this.ctx.fillStyle = "blue";
          ctx.beginPath();
          ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
          ctx.moveTo(110, 110);
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
        },

      revertY: function() {
          this.run_y = this.last_y;
          this.ctx.fillStyle = "blue";
          ctx.beginPath();
          ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
          ctx.moveTo(110, 110);
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
        },

        movement: {
          left: false,
          right: false,
          up: false,
          down: false
        },


        updateMover: function() {
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
      requestAnimationFrame(step)
    }

    document.addEventListener("keydown", (e) => {
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
        console.log("Quit reading the console and pay attention to the game!");
      }
    })
    step()



    document.addEventListener("keyup", (e) => {
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
        console.log("Quit reading the console and pay attention to the game!");
      }
    })

  })
