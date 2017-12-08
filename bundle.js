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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__next_level_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_level1_js__ = __webpack_require__(3);







const spaceBar = (e) => {
  if(e.keyCode === 32) {
    Object(__WEBPACK_IMPORTED_MODULE_2__next_level_js__["a" /* nextLevel */])("#level1", __WEBPACK_IMPORTED_MODULE_3__levels_level1_js__["b" /* level1 */], 30);
  }
};
/* harmony export (immutable) */ __webpack_exports__["spaceBar"] = spaceBar;


$("#gameOverScreen").hide();
$("#you-win-screen").hide();

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mover_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__level2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mover_movement_js__ = __webpack_require__(12);







let cancelFrame;

const level1 = (timer)  => {
  let nextLevel;
   Object(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* countDown */])(timer);
  // let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('level1');
  let ctx = canvas.getContext("2d");

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

    function step() {
      ctx.clearRect(0,0, 700, 700);
      gamedrawing.draw_reset();
      mover.start();
      cancelFrame = requestAnimationFrame(step);
    }

    step();

    $(document).on("keydown", Object(__WEBPACK_IMPORTED_MODULE_5__mover_movement_js__["a" /* keydownListner */])(mover));
    $(document).on("keyup", Object(__WEBPACK_IMPORTED_MODULE_5__mover_movement_js__["b" /* keyupListner */])(mover));

};
/* harmony export (immutable) */ __webpack_exports__["b"] = level1;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collision__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__next_level_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__winner_screen_js__ = __webpack_require__(14);




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

 }

/* harmony default export */ __webpack_exports__["a"] = (Mover);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_game_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_level1_js__ = __webpack_require__(3);




let clearTime;

const countDown = (duration) => {
  let color = "white";
  let lose = false;
  if(duration < 0) {
    document.getElementById('timer').innerHTML = "Times up!";
      clearTimeout(clearTime);
      clearTimeout(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["b" /* stopSpin */]);
      cancelAnimationFrame(__WEBPACK_IMPORTED_MODULE_2__levels_level1_js__["a" /* cancelFrame */]);
      lose = true;
    Object(__WEBPACK_IMPORTED_MODULE_1__reset_game_js__["a" /* resetGame */])(lose);
  } else {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
    clearTime = setTimeout( () => {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if(seconds <= 10){
      color = "red";
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    duration--;
    countDown(duration);
    document.getElementById('timer').innerHTML = minutes + ":" + seconds;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mover_movement_js__ = __webpack_require__(12);







const level2 = (timer) => {
  let nextLevel;
  Object(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* countDown */])(timer);
  let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('level2');
  let ctx = canvas.getContext("2d");

  let maze = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

    function step() {
      ctx.clearRect(0,0, 700, 700);
      gamedrawing.draw_reset();
      mover.start();
      cancelFrame = requestAnimationFrame(step);
    }

    step();
    $(document).on("keydown", Object(__WEBPACK_IMPORTED_MODULE_5__mover_movement_js__["a" /* keydownListner */])(mover));
    $(document).on("keyup", Object(__WEBPACK_IMPORTED_MODULE_5__mover_movement_js__["b" /* keyupListner */])(mover));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = level2;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_game_js__ = __webpack_require__(11);





    const nextLevel = (showLevel, nextLevelFn, duration) => {
      if (nextLevelFn === __WEBPACK_IMPORTED_MODULE_2__reset_game_js__["a" /* resetGame */]) {
        Object(__WEBPACK_IMPORTED_MODULE_2__reset_game_js__["a" /* resetGame */])();
        return;
      }
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
      $("#level5").hide();


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mover_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__level5_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mover_movement_js__ = __webpack_require__(12);







const level3 = (timer) => {
  let nextLevel;
  Object(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* countDown */])(timer);
  let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('level3');
  let ctx = canvas.getContext("2d");

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


  let mover = new __WEBPACK_IMPORTED_MODULE_1__mover_js__["a" /* default */](82, 337, ctx);

  let gamedrawing =  new __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__["a" /* default */](maze, ctx, mover, "#level5", __WEBPACK_IMPORTED_MODULE_4__level5_js__["a" /* level5 */], 40);

  function step() {
    ctx.clearRect(0,0, 700, 700);
    gamedrawing.draw_reset();
    mover.start();
    cancelFrame = requestAnimationFrame(step);
  }

  step();

  $(document).on("keydown", (e) => {Object(__WEBPACK_IMPORTED_MODULE_5__mover_movement_js__["a" /* keydownListner */])(mover, e);});
  $(document).on("keyup", (e) => {Object(__WEBPACK_IMPORTED_MODULE_5__mover_movement_js__["b" /* keyupListner */])(mover, e);});



};
/* harmony export (immutable) */ __webpack_exports__["a"] = level3;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_level1__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mover_movement_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__starting_the_game_js__ = __webpack_require__(0);









const resetGame = (status) => {
  if(!status) {
    $("#you-win-screen").show();
    clearTimeout(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["a" /* clearTime */]);
    clearTimeout(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["b" /* stopSpin */]);
  } else {
    $(document).off("keydown");
    $(document).off("keyup");
    $("#gameOverScreen").show();
  }


  document.addEventListener("keypress", __WEBPACK_IMPORTED_MODULE_4__starting_the_game_js__["spaceBar"], {once: true});

};
/* harmony export (immutable) */ __webpack_exports__["a"] = resetGame;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const keydownListner = (mover) => (e) => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = keydownListner;



const keyupListner = (mover) => (e) => {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = keyupListner;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mover_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mover_movement_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_game_js__ = __webpack_require__(11);







const level5 = (timer) =>  {
  Object(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* countDown */])(timer);
  let cancelFrame;
  let gameOver = false;
  let canvas = document.getElementById('level5');
  let ctx = canvas.getContext("2d");

  let maze = [
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
      ];

      let mover = new __WEBPACK_IMPORTED_MODULE_1__mover_js__["a" /* default */](82, 337, ctx);

      let gamedrawing =  new __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__["a" /* default */](maze, ctx, mover, "#level5", __WEBPACK_IMPORTED_MODULE_5__reset_game_js__["a" /* resetGame */], 40);

      function step() {
        ctx.clearRect(0,0, 700, 700);
        gamedrawing.draw_reset();
        mover.start();
        cancelFrame = requestAnimationFrame(step);
      }

      step();

      $(document).on("keydown", (e) => {Object(__WEBPACK_IMPORTED_MODULE_4__mover_movement_js__["a" /* keydownListner */])(mover, e);});
      $(document).on("keyup", (e) => {Object(__WEBPACK_IMPORTED_MODULE_4__mover_movement_js__["b" /* keyupListner */])(mover, e);});




};
/* harmony export (immutable) */ __webpack_exports__["a"] = level5;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reset_game_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spin_motion_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(6);





const restartGame = () => {
  $("#you-win-screen").show();
  clearTimeout(__WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["a" /* clearTime */]);
  clearTimeout(__WEBPACK_IMPORTED_MODULE_1__spin_motion_js__["b" /* stopSpin */]);
  Object(__WEBPACK_IMPORTED_MODULE_0__reset_game_js__["a" /* resetGame */])();
};
/* unused harmony export restartGame */



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map