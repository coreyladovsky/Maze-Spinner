// import step from "./maze_spinner.js"; 
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext("2d");
//
//     const mover = {
//       run_x: 555,
//       run_y: 337,
//       last_x: 555,
//       last_y: 337,
//       right_side: this.run_x + 7,
//       left_side: this.run_x - 7,
//       top_side: this.run_y - 7,
//       bottom_side: this.run_y + 7,
//
//       ctx,
//       start: function() {
//
//         this.ctx.fillStyle = "blue";
//         ctx.beginPath();
//         ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
//         ctx.moveTo(110, 110);
//         ctx.stroke();
//         ctx.fill()
//         this.updateMover()
//         ctx.closePath();
//
//       },
//       revertAll: function() {
//           this.run_y = this.last_y
//           this.run_x = this.last_x;
//           this.ctx.fillStyle = "blue";
//           ctx.beginPath();
//           ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
//           ctx.moveTo(110, 110);
//           ctx.stroke();
//           ctx.fill();
//           ctx.closePath();
//         },
//       revertX: function() {
//           this.run_x = this.last_x;
//           this.ctx.fillStyle = "blue";
//           ctx.beginPath();
//           ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
//           ctx.moveTo(110, 110);
//           ctx.stroke();
//           ctx.fill();
//           ctx.closePath();
//         },
//
//       revertY: function() {
//           this.run_y = this.last_y;
//           this.ctx.fillStyle = "blue";
//           ctx.beginPath();
//           ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
//           ctx.moveTo(110, 110);
//           ctx.stroke();
//           ctx.fill();
//           ctx.closePath();
//         },
//
//         movement: {
//           left: false,
//           right: false,
//           up: false,
//           down: false
//         },
//
//
//         updateMover: function() {
//           this.last_y = this.run_y
//           this.last_x = this.run_x
//           if(this.movement.up) {
//             this.run_y -= 3
//             this.velocity_y = -3
//           }
//           if(this.movement.down) {
//             this.run_y += 3
//             this.velocity_y = 3
//           }
//           if(this.movement.right) {
//             this.run_x += 3
//             this.velocity_x = 3
//           }
//           if(this.movement.left) {
//             this.run_x -= 3
//             this.velocity_x = -3
//           }
//         }
//     }
//
//
//
//     document.addEventListener("keydown", (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//         case "w":
//           mover.movement.down = false
//           mover.movement.up = true
//           break;
//         case "ArrowDown":
//         case "s":
//           mover.movement.up = false
//           mover.movement.down = true
//           break;
//         case "ArrowRight":
//         case "d":
//           mover.movement.left = false
//           mover.movement.right = true
//           break;
//         case "ArrowLeft":
//         case "a":
//           mover.movement.right = false
//           mover.movement.left = true
//           break;
//         default:
//         console.log("Quit reading the console and pay attention to the game!");
//       }
//     })
//     step()
//
//
//
//     document.addEventListener("keyup", (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//         case "w":
//         mover.movement.up = false
//           break;
//         case "ArrowDown":
//         case "s":
//         mover.movement.down = false
//         break;
//         case "ArrowRight":
//         case "d":
//         mover.movement.right = false
//         break;
//         case "ArrowLeft":
//         case "a":
//         mover.movement.left = false
//           break;
//         default:
//         console.log("Quit reading the console and pay attention to the game!");
//       }
//     })
