/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opening_spin_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_level1_js__ = __webpack_require__(3);


// import { resetGame } from 'lib/reset_game.js';
// import { countDown } from 'lib/countdown_clock.js';
// import { collision } from 'lib/collision.js';



function spaceBar(e) {
  if(e.keyCode === 32) {
    $("#opening-screen").hide();
    $("#you-win-screen").hide();
    $("#gameOverScreen").hide();
    $("#level2").hide();
    $("#canvas").hide();
    $("#level3").hide();
    $("#level1").show();

    Object(__WEBPACK_IMPORTED_MODULE_2__levels_level1_js__["a" /* startGame */])(30);
    Object(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["a" /* keepSpinning */])([-2, -1, 1, 2], 0, document.getElementById("level1"));
  }
}



$("#gameOverScreen").hide();
  $("#you-win-screen").hide();


// let looper;
// let deg = 0;
// function loops(el,speed){
// var item = document.getElementById(el);
//   item.style.transform = `rotate(${deg}deg)`;
// looper = setTimeout(() => {
//   loops(el, 50)
// }, 5);
// deg++;
// if(deg > 359){
//   deg = 1;
// }
// }

Object(__WEBPACK_IMPORTED_MODULE_1__opening_spin_js__["a" /* opener */])([1,-1], 0, "spinner-text");


document.addEventListener("keypress", spaceBar, {once: true});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stopSpin; });
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

const  keepSpinning = (array, degrees, el) => {
   stopSpin = setTimeout(()=> {
    let counter = 0;
    let angle = array[Math.round(Math.random() * 3)];
    rotate(angle, counter, degrees, el);
    degrees += (angle * 90);
    keepSpinning(array, degrees, el);
  }, randTime());
};
/* harmony export (immutable) */ __webpack_exports__["a"] = keepSpinning;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function rotation(angle, counter, degrees, el){
  degrees += angle;
  // console.log(degrees);
  setTimeout(() => {
    counter++ ;
    let item = document.getElementById(el);
    item.style.transform = `rotate(${degrees}deg)`;
    if(counter < 7) {
      setTimeout(() => {
        rotation(angle, counter, degrees, el);
      }, 10);
    }
  }, 10);
}


 const opener = (array, degrees, el) => {
   setTimeout(()=> {
    let counter = 0;
    let angle = array[Math.round(Math.random() * 1)];
    rotation(angle, counter, degrees, el);
    degrees += angle ;
    opener(array, degrees, el);
  }, 2000);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = opener;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mover_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__level2__ = __webpack_require__(8);






const startGame = (timer)  => {
  let nextLevel;
   Object(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* countDown */])(timer);
  let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('level1');
  let ctx = canvas.getContext("2d");
    // let draw_reset = () => {
    //   ctx.fillStyle = "white";
    //   ctx.font = "30px Arial";
    //   ctx.fillText("N",330,25);
    //   ctx.beginPath();
    //   ctx.arc(350, 350, 320, 0, Math.PI * 2, true);
    //   ctx.moveTo(110, 110);
    //   ctx.fillStyle = "yellow";
    //   ctx.stroke();
    //   ctx.fill();
    //   ctx.closePath();
    //
    //
      let maze = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,3,1,1,1,1,1,1,1,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,3,1,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,1,2,2,3,3,3,3,1,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,4,4,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ];

      let mover = new __WEBPACK_IMPORTED_MODULE_1__mover_js__["a" /* default */](82, 337, ctx);

    let gamedrawing =  new __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__["a" /* default */](maze, ctx, mover, "#level2", __WEBPACK_IMPORTED_MODULE_4__level2__["a" /* level2 */], 30);
    //   for(let y = 0; y < maze.length; y++) {
    //     for(let x = 0; x < maze[y].length; x++) {
    //       let tile = maze[y][x];
    //       if(maze[y][x] === 1) {
    //         ctx.fillStyle = "black";
    //         ctx.fillRect(x * 25, y * 25, 25, 25);
    //
    //         if(trueCollisionCheck(mover.run_x + 7, mover.run_y, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {
    //           mover.revertX();
    //         }
    //         if(trueCollisionCheck(mover.run_x + 7, mover.run_y - 0.5, y  * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y - 3.5, y * 25, x * 25, 25)) {
    //           mover.revertX();
    //         }
    //         if(trueCollisionCheck(mover.run_x + 7, mover.run_y + 3.5, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y + 3.5, y * 25, x * 25, 25)) {
    //           mover.revertX();
    //         }
    //         if(trueCollisionCheck(mover.run_x, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x, mover.run_y - 7, y * 25, x * 25, 25)) {
    //           mover.revertY();
    //         }
    //         if(trueCollisionCheck(mover.run_x + 3.6, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x + 3.6, mover.run_y - 7, y * 25, x * 25, 25)) {
    //           mover.revertY();
    //         }
    //         if(trueCollisionCheck(mover.run_x - 3.6, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 3.6, mover.run_y - 7, y * 25, x * 25, 25)) {
    //           mover.revertY();
    //         }
    //
    //       } else if(maze[y][x] === 2) {
    //         ctx.fillStyle = "green";
    //         ctx.fillRect(x * 25, y * 25, 25, 25)
    //
    //
    //       } else if(maze[y][x] === 3) {
    //         ctx.fillStyle = "white";
    //         ctx.fillRect(x * 25, y * 25, 25, 25)
    //       } else if(maze[y][x] === 4) {
    //         ctx.fillStyle = "red";
    //         ctx.fillRect(x * 25, y * 25, 25, 25)
    //
    //         if(trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {
    //
    //           if(gameOver === false) {
    //             nextLevel()
    //           }
    //            gameOver = true ;
    //
    //
    //
    //
    //         }
    //       }
    //     }
    //   }
    // };
    //
    // nextLevel = function nextLevel() {
    //   clearTimeout(clearTime);
    //   clearTimeout(stopSpin);
    //   $("#timer").css({"color": "white"});
    //   document.getElementById('timer').innerHTML = "Ready!";
    //
    //   $("#level1").hide()
    //   $("#level2").show()
    //   let item = document.getElementById("level2");
    //   item.style.transform = `rotate(0deg)`;
    //   keepSpinning([-2, -1, 1, 2], 0, item);
    //   level2(30);
    // }



    // let mover = {
    //   run_x: 82,
    //   run_y: 337,
    //   last_x: 82,
    //   last_y: 337,
    //   right_side: this.run_x + 7,
    //   left_side: this.run_x - 7,
    //   top_side: this.run_y - 7,
    //   bottom_side: this.run_y + 7,
    //
    //   ctx,
    //   start: function() {
    //
    //     this.ctx.fillStyle = "blue";
    //     ctx.beginPath();
    //     ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //     ctx.moveTo(110, 110);
    //     ctx.stroke();
    //     ctx.fill()
    //     this.updateMover()
    //     ctx.closePath();
    //
    //   },
    //   revertAll: function() {
    //       this.run_y = this.last_y
    //       this.run_x = this.last_x;
    //       this.ctx.fillStyle = "blue";
    //       ctx.beginPath();
    //       ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //       ctx.moveTo(110, 110);
    //       ctx.stroke();
    //       ctx.fill();
    //       ctx.closePath();
    //     },
    //   revertX: function() {
    //       this.run_x = this.last_x;
    //       this.ctx.fillStyle = "blue";
    //       ctx.beginPath();
    //       ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //       ctx.moveTo(110, 110);
    //       ctx.stroke();
    //       ctx.fill();
    //       ctx.closePath();
    //     },
    //
    //   revertY: function() {
    //       this.run_y = this.last_y;
    //       this.ctx.fillStyle = "blue";
    //       ctx.beginPath();
    //       ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //       ctx.moveTo(110, 110);
    //       ctx.stroke();
    //       ctx.fill();
    //       ctx.closePath();
    //     },
    //
    //     movement: {
    //       left: false,
    //       right: false,
    //       up: false,
    //       down: false
    //     },
    //
    //
    //     updateMover: function() {
    //       this.last_y = this.run_y
    //       this.last_x = this.run_x
    //       if(this.movement.up) {
    //         this.run_y -= 3
    //         this.velocity_y = -3
    //       }
    //       if(this.movement.down) {
    //         this.run_y += 3
    //         this.velocity_y = 3
    //       }
    //       if(this.movement.right) {
    //         this.run_x += 3
    //         this.velocity_x = 3
    //       }
    //       if(this.movement.left) {
    //         this.run_x -= 3
    //         this.velocity_x = -3
    //       }
    //     }
    // }
    //
    function step() {
      ctx.clearRect(0,0, 700, 700);
      gamedrawing.draw_reset();
      mover.start();
      cancelFrame = requestAnimationFrame(step);
    }
    //
    $(document).on("keydown", (e) => {
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
    });
    step();



    $(document).on("keyup", (e) => {
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
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = startGame;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collision__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__next_level_js__ = __webpack_require__(9);



class GameDrawing {
  constructor(maze, ctx, mover, elId, lvlFn, duration) {
    this.maze = maze;
    this.ctx = ctx;
    this.mover = mover;
    this.gameOver = false;
    this.elId = elId;
    this.lvlFn = lvlFn;
    this.duration = duration;
  }

  draw_reset() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Arial";
    this.ctx.fillText("N",330,25);
    this.ctx.beginPath();
    this.ctx.arc(350, 350, 320, 0, Math.PI * 2, true);
    this.ctx.moveTo(110, 110);
    this.ctx.fillStyle = "yellow";
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

    for(let y = 0; y < this.maze.length; y++) {
      for(let x = 0; x < this.maze[y].length; x++) {
        let tile = this.maze[y][x];
        if(this.maze[y][x] === 1) {
          this.ctx.fillStyle = "black";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);

          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x + 7, this.mover.run_y, y * 25, x * 25, 25) || Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x - 7, this.mover.run_y, y * 25, x * 25, 25)) {
            this.mover.revertX();
          }
          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x + 7, this.mover.run_y - 0.5, y  * 25, x * 25, 25) || Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x - 7, this.mover.run_y - 3.5, y * 25, x * 25, 25)) {
            this.mover.revertX();
          }
          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x + 7, this.mover.run_y + 3.5, y * 25, x * 25, 25) || Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x - 7, this.mover.run_y + 3.5, y * 25, x * 25, 25)) {
            this.mover.revertX();
          }
          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x, this.mover.run_y + 7, y * 25, x * 25, 25) || Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x, this.mover.run_y - 7, y * 25, x * 25, 25)) {
            this.mover.revertY();
          }
          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x + 3.6, this.mover.run_y + 7, y * 25, x * 25, 25) || Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x + 3.6, this.mover.run_y - 7, y * 25, x * 25, 25)) {
            this.mover.revertY();
          }
          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x - 3.6, this.mover.run_y + 7, y * 25, x * 25, 25) || Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x - 3.6, this.mover.run_y - 7, y * 25, x * 25, 25)) {
            this.mover.revertY();
          }

        } else if(this.maze[y][x] === 2) {
          this.ctx.fillStyle = "green";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);


        } else if(this.maze[y][x] === 3) {
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);
        } else if(this.maze[y][x] === 4) {
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(x * 25, y * 25, 25, 25);

          if(Object(__WEBPACK_IMPORTED_MODULE_0__collision__["a" /* trueCollisionCheck */])(this.mover.run_x - 7, this.mover.run_y, y * 25, x * 25, 25)) {

            if(this.gameOver === false) {
              Object(__WEBPACK_IMPORTED_MODULE_1__next_level_js__["a" /* nextLevel */])(this.elId, this.lvlFn, this.duration);
            }
             this.gameOver = true ;




          }
        }
      }
    }

  }
}

/* harmony default export */ __webpack_exports__["a"] = (GameDrawing);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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


//     render() {
//
//
//
// $(document).on("keydown", (e) => {
//   switch (e.key) {
//     case "ArrowUp":
//     case "w":
//       this.movement.down = false;
//       this.movement.up = true;
//       break;
//     case "ArrowDown":
//     case "s":
//       this.movement.up = false;
//       this.movement.down = true;
//       break;
//     case "ArrowRight":
//     case "d":
//       this.movement.left = false;
//       this.movement.right = true;
//       break;
//     case "ArrowLeft":
//     case "a":
//       this.movement.right = false;
//       this.movement.left = true;
//       break;
//     default:
//     console.log("Please keep your eyes and attention on the game!");
//     console.log("https://github.com/coreyladovsky");
//   }
// });
//
//
// $(document).on("keyup", (e) => {
//   switch (e.key) {
//     case "ArrowUp":
//     case "w":
//     this.movement.up = false;
//       break;
//     case "ArrowDown":
//     case "s":
//     this.movement.down = false;
//     break;
//     case "ArrowRight":
//     case "d":
//     this.movement.right = false;
//     break;
//     case "ArrowLeft":
//     case "a":
//     this.movement.left = false;
//       break;
//     default:
//     console.log("Please keep your eyes and attention on the game!");
//   }
// });
//
// }
 }

/* harmony default export */ __webpack_exports__["a"] = (Mover);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_game_js__ = __webpack_require__(11);



let clearTime;

const countDown = (duration) => {
  let color = "white"
  if(duration < 0) {
    document.getElementById('timer').innerHTML = "Times up!";
      clearTimeout(clearTime);
      clearTimeout(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["b" /* stopSpin */]);
    Object(__WEBPACK_IMPORTED_MODULE_1__reset_game_js__["a" /* resetGame */])();
  } else {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
    clearTime = setTimeout( () => {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if(seconds <= 10){
      color = "red"
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    duration--;
    countDown(duration);
    document.getElementById('timer').innerHTML =minutes + ":" + seconds;
    $("#timer").css({"color": color});

  }, 1000);
}
};
/* harmony export (immutable) */ __webpack_exports__["b"] = countDown;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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
/* harmony export (immutable) */ __webpack_exports__["a"] = trueCollisionCheck;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mover_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__level3__ = __webpack_require__(10);






const level2 = (timer) => {
  let nextLevel;
  Object(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* countDown */])(timer);
  let cancelFrame;
    let gameOver = false;
    let canvas = document.getElementById('level2');
    let ctx = canvas.getContext("2d");
    // let draw_reset = () => {
    //   ctx.fillStyle = "white";
    //   ctx.font = "30px Arial";
    //   ctx.fillText("N",330,25);
    //   ctx.beginPath();
    //   ctx.arc(350, 350, 320, 0, Math.PI * 2, true);
    //   ctx.moveTo(110, 110);
    //   ctx.fillStyle = "yellow";
    //   ctx.stroke();
    //   ctx.fill();
    //   ctx.closePath();


      let maze = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,4,1,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,3,3,3,3,3,3,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,1,3,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,0,0],
        [0,0,0,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,3,1,0,0,0,0,0],
        [0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,1,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,0,0,0,0,0],
        [0,0,1,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,0,0,0,0,0],
        [0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,1,0,0,0,0,0],
        [0,0,0,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,3,1,0,0,0,0,0],
        [0,0,0,1,3,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,3,1,0,0,0,0,0],
        [0,0,0,1,3,3,3,3,3,3,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ];

      let mover = new __WEBPACK_IMPORTED_MODULE_1__mover_js__["a" /* default */](82, 337, ctx);

    let gamedrawing =  new __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__["a" /* default */](maze, ctx, mover, "#level3", __WEBPACK_IMPORTED_MODULE_4__level3__["a" /* level3 */], 40);

    //   for(let y = 0; y < maze.length; y++) {
    //     for(let x = 0; x < maze[y].length; x++) {
    //       let tile = maze[y][x];
    //       if(maze[y][x] === 1) {
    //         ctx.fillStyle = "black";
    //         ctx.fillRect(x * 25, y * 25, 25, 25);
    //
    //         if(trueCollisionCheck(mover.run_x + 7, mover.run_y, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {
    //           mover.revertX();
    //         }
    //         if(trueCollisionCheck(mover.run_x + 7, mover.run_y - 0.5, y  * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y - 3.5, y * 25, x * 25, 25)) {
    //           mover.revertX();
    //         }
    //         if(trueCollisionCheck(mover.run_x + 7, mover.run_y + 3.5, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y + 3.5, y * 25, x * 25, 25)) {
    //           mover.revertX();
    //         }
    //         if(trueCollisionCheck(mover.run_x, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x, mover.run_y - 7, y * 25, x * 25, 25)) {
    //           mover.revertY();
    //         }
    //         if(trueCollisionCheck(mover.run_x + 3.6, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x + 3.6, mover.run_y - 7, y * 25, x * 25, 25)) {
    //           mover.revertY();
    //         }
    //         if(trueCollisionCheck(mover.run_x - 3.6, mover.run_y + 7, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 3.6, mover.run_y - 7, y * 25, x * 25, 25)) {
    //           mover.revertY();
    //         }
    //
    //       } else if(maze[y][x] === 2) {
    //         ctx.fillStyle = "green";
    //         ctx.fillRect(x * 25, y * 25, 25, 25)
    //
    //
    //       } else if(maze[y][x] === 3) {
    //         ctx.fillStyle = "white";
    //         ctx.fillRect(x * 25, y * 25, 25, 25)
    //       } else if(maze[y][x] === 4) {
    //         ctx.fillStyle = "red";
    //         ctx.fillRect(x * 25, y * 25, 25, 25)
    //
    //         if(trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {
    //
    //           if(gameOver === false) {
    //             nextLevel()
    //           }
    //            gameOver = true ;
    //
    //
    //         }
    //       }
    //     }
    //   }
    // };

    // nextLevel = function nextLevel() {
    //   clearTimeout(clearTime);
    //   clearTimeout(stopSpin);
    //   $("#timer").css({"color": "white"});
    //   document.getElementById('timer').innerHTML = "Ready!";
    //   $("#level2").hide()
    //   let item = document.getElementById("level3");
    //   item.style.transform = `rotate(0deg)`;
    //   $("#level3").show();
    //   level3(40);
    //   keepSpinning([-2, -1, 1, 2], 0, document.getElementById("level3"));
    // }
    //
    //
    // let mover = {
    //   run_x: 82,
    //   run_y: 337,
    //   last_x: 82,
    //   last_y: 337,
    //   right_side: this.run_x + 7,
    //   left_side: this.run_x - 7,
    //   top_side: this.run_y - 7,
    //   bottom_side: this.run_y + 7,
    //
    //   ctx,
    //   start: function() {
    //
    //     this.ctx.fillStyle = "blue";
    //     ctx.beginPath();
    //     ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //     ctx.moveTo(110, 110);
    //     ctx.stroke();
    //     ctx.fill()
    //     this.updateMover()
    //     ctx.closePath();
    //
    //   },
    //   revertAll: function() {
    //       this.run_y = this.last_y
    //       this.run_x = this.last_x;
    //       this.ctx.fillStyle = "blue";
    //       ctx.beginPath();
    //       ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //       ctx.moveTo(110, 110);
    //       ctx.stroke();
    //       ctx.fill();
    //       ctx.closePath();
    //     },
    //   revertX: function() {
    //       this.run_x = this.last_x;
    //       this.ctx.fillStyle = "blue";
    //       ctx.beginPath();
    //       ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //       ctx.moveTo(110, 110);
    //       ctx.stroke();
    //       ctx.fill();
    //       ctx.closePath();
    //     },
    //
    //   revertY: function() {
    //       this.run_y = this.last_y;
    //       this.ctx.fillStyle = "blue";
    //       ctx.beginPath();
    //       ctx.arc(this.run_x, this.run_y, 7, 0, Math.PI * 2, true)
    //       ctx.moveTo(110, 110);
    //       ctx.stroke();
    //       ctx.fill();
    //       ctx.closePath();
    //     },
    //
    //     movement: {
    //       left: false,
    //       right: false,
    //       up: false,
    //       down: false
    //     },
    //
    //
    //     updateMover: function() {
    //       this.last_y = this.run_y
    //       this.last_x = this.run_x
    //       if(this.movement.up) {
    //         this.run_y -= 3
    //         this.velocity_y = -3
    //       }
    //       if(this.movement.down) {
    //         this.run_y += 3
    //         this.velocity_y = 3
    //       }
    //       if(this.movement.right) {
    //         this.run_x += 3
    //         this.velocity_x = 3
    //       }
    //       if(this.movement.left) {
    //         this.run_x -= 3
    //         this.velocity_x = -3
    //       }
    //     }
    // }

    function step() {
      ctx.clearRect(0,0, 700, 700);
      gamedrawing.draw_reset();
      mover.start();
      cancelFrame = requestAnimationFrame(step);
    }
    //
    $(document).on("keydown", (e) => {
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
    });
    step();



    $(document).on("keyup", (e) => {
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
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = level2;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countdown_clock_js__ = __webpack_require__(6);




    const nextLevel = (showLevel, nextLevelFn, duration) => {
      clearTimeout(__WEBPACK_IMPORTED_MODULE_1__countdown_clock_js__["a" /* clearTime */]);
      clearTimeout(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["b" /* stopSpin */]);
      $("#timer").css({"color": "white"});
      document.getElementById('timer').innerHTML = "Ready!";


      $("#opening-screen").hide();
      $("#you-win-screen").hide();
      $("#gameOverScreen").hide();
      $("#level1").hide();
      $("#level2").hide();
      $("#level3").hide();
      $("#canvas").hide();


      $(showLevel).show();

      let item = document.getElementById(showLevel.slice(1));
      item.style.transform = `rotate(0deg)`;
      Object(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["a" /* keepSpinning */])([-2, -1, 1, 2], 0, item);
      nextLevelFn(duration);
    };
/* harmony export (immutable) */ __webpack_exports__["a"] = nextLevel;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const level3 = (timer) => {
  let nextLevel;
  countDown(timer);
  let cancelFrame;
    let gameOver = false;
    let canvas = document.getElementById('level3');
    let ctx = canvas.getContext("2d");
    let draw_reset = () => {
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";
      ctx.fillText("N",330,25);
      ctx.beginPath();
      ctx.arc(350, 350, 320, 0, Math.PI * 2, true);
      ctx.moveTo(110, 110);
      ctx.fillStyle = "yellow";
      ctx.stroke();
      ctx.fill();
      ctx.closePath();


      let maze = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0],
        [0,0,0,0,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,0,0,0,0],
        [0,0,0,0,1,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,1,0,0,0,0],
        [0,0,0,0,1,3,1,3,1,1,1,1,1,1,1,1,1,1,1,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,1,3,1,3,1,3,3,3,3,3,3,3,3,3,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,1,3,1,3,1,3,1,1,1,1,1,1,1,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,1,1,1,3,1,3,1,3,1,3,3,3,3,3,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,1,2,2,3,1,3,1,3,1,3,1,1,1,1,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,1,1,1,1,1,3,1,3,1,3,1,4,1,1,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,3,1,3,1,4,3,3,3,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,3,1,3,1,1,1,1,1,1,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,3,1,3,3,3,3,3,3,3,3,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,3,1,1,1,1,1,1,1,1,1,1,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,3,3,3,3,3,3,3,3,3,3,3,3,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ];
      for(let y = 0; y < maze.length; y++) {
        for(let x = 0; x < maze[y].length; x++) {
          let tile = maze[y][x];
          if(maze[y][x] === 1) {
            ctx.fillStyle = "black";
            ctx.fillRect(x * 25, y * 25, 25, 25);

            if(trueCollisionCheck(mover.run_x + 7, mover.run_y, y * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {
              mover.revertX();
            }
            if(trueCollisionCheck(mover.run_x + 7, mover.run_y - 0.5, y  * 25, x * 25, 25) || trueCollisionCheck(mover.run_x - 7, mover.run_y - 3.5, y * 25, x * 25, 25)) {
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

            if(trueCollisionCheck(mover.run_x - 7, mover.run_y, y * 25, x * 25, 25)) {

              if(gameOver === false) {
                nextLevel()
              }
               gameOver = true ;


            }
          }
        }
      }
    };

    nextLevel = function nextLevel() {
      clearTimeout(clearTime);
      clearTimeout(stopSpin);
      $("#timer").css({"color": "white"});
      document.getElementById('timer').innerHTML = "Ready!";
      $("#level3").hide()
      $("#canvas").show();
      let item = document.getElementById("canvas");
      item.style.transform = `rotate(0deg)`;
      startLevel5(40);
      keepSpinning([-2, -1, 1, 2], 0, document.getElementById("canvas"));
    }


    let mover = {
      run_x: 82,
      run_y: 337,
      last_x: 82,
      last_y: 337,
      right_side: this.run_x + 7,
      left_side: this.run_x - 7,
      top_side: this.run_y - 7,
      bottom_side: this.run_y + 7,

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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = level3;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_level1__ = __webpack_require__(3);




const resetGame = () => {
  $(document).off("keydown")
  $("#gameOverScreen").show();
  document.addEventListener("keypress", (e) => {
  if(e.keyCode === 32) {
    $("#you-win-screen").hide();
    $("#opening-screen").hide();
    $("#gameOverScreen").hide();
    $("#level2").hide();
    $("#canvas").hide();
    $("#level3").hide();
    $("#level1").show();
    let item = document.getElementById("level1");
    item.style.transform = `rotate(0deg)`;
    Object(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["a" /* keepSpinning */])([-2, -1, 1, 2], 0, item);
    Object(__WEBPACK_IMPORTED_MODULE_1__levels_level1__["a" /* startGame */])(30);
  }}, {once: true});
};
/* harmony export (immutable) */ __webpack_exports__["a"] = resetGame;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map