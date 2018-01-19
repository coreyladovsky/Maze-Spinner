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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return stopSpin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rotator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rotatie; });
 let stopSpin;
 let rotator;
 let rotatie;

function rotate(angle, counter, degrees, el){
  degrees += angle;
  rotator = setTimeout(() => {
    counter++ ;
    el.style.transform = `rotate(${degrees}deg)`;
    if(counter < 90) {
       rotatie = setTimeout(() => {
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_game_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_game_js__ = __webpack_require__(3);




let clearTime;

class CountDown {
  constructor() {
    this.duration;
    this.color = "white";
    this.lose = false;
    this.clearTime;
  }

  stop_tick() {
    clearTimeout(this.clearTime);
  }

  tick(duration) {
    if(duration < 0) {
      document.getElementById('timer').innerHTML = "Times up!";
      clearTimeout(this.clearTime);
      clearTimeout(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["d" /* stopSpin */]);
      cancelAnimationFrame(__WEBPACK_IMPORTED_MODULE_2__levels_game_js__["cancelFrame"]);
      this.lose = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__reset_game_js__["a" /* resetGame */])(this.lose);
    } else {
      let minutes = Math.floor(duration / 60);
      let seconds = duration % 60;
      this.clearTime = setTimeout( () => {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        if(seconds <= 10){
          this.color = "red";
        } else {
          this.color = "white";
        }
        seconds = seconds < 10 ? "0" + seconds : seconds;
        duration--;
        this.tick(duration);
        document.getElementById('timer').innerHTML = minutes + ":" + seconds;
        $("#timer").css({"color": this.color});

      }, 1000);
    }
  }

}

/* harmony default export */ __webpack_exports__["b"] = (CountDown);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin_motion_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opening_spin_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_game_js__ = __webpack_require__(3);




window.levelNumber = 0;
window.newGame = false ;

const spaceBar = (e) => {
  if(e.keyCode === 32) {
    levelNumber = 0;
    $("#gameOverScreen").hide();
    $("#you-win-screen").hide();

    if(newGame) {
      newGame.stopGame();
    }

    newGame = new __WEBPACK_IMPORTED_MODULE_2__levels_game_js__["b" /* default */]();
    newGame.play();

    let item = document.getElementById("game");
    item.style.transform = `rotate(0deg)`;
    Object(__WEBPACK_IMPORTED_MODULE_0__spin_motion_js__["a" /* keepSpinning */])([-2, -1, 1, 2], 0, item);
    $("#opening-screen").hide();
    $("#game").show();
  }
};
/* harmony export (immutable) */ __webpack_exports__["spaceBar"] = spaceBar;


$("#gameOverScreen").hide();
$("#you-win-screen").hide();

Object(__WEBPACK_IMPORTED_MODULE_1__opening_spin_js__["a" /* opener */])([1,-1], 0, "spinner-text");


document.addEventListener("keypress", spaceBar, {once: true});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mover_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spin_motion_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mover_movement_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levelArray_js__ = __webpack_require__(4);








class Game {
  constructor() {
    this.cancelFrame;
    this.game = document.getElementById("game");
    this.ctx = this.game.getContext("2d");
    this.mover = new __WEBPACK_IMPORTED_MODULE_1__mover_js__["a" /* default */](82, 337, this.ctx);
    this.gameOver = false;
    this.gameDrawing = new __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__["a" /* default */](this.ctx, this.mover);
    this.step = this.step.bind(this);
    this.currentLevel = 0;
    this.clock = new __WEBPACK_IMPORTED_MODULE_2__countdown_clock_js__["b" /* default */]();
  }

  step() {
    this.ctx.clearRect(0,0, 700, 700);
    this.gameDrawing.draw_reset();
    this.mover.start();
    this.cancelFrame = requestAnimationFrame(this.step);
    if (this.currentLevel !== levelNumber) {
      this.currentLevel ++ ;
      this.nextLevel();
    }
  }

  startClock() {
    this.clock.tick(__WEBPACK_IMPORTED_MODULE_5__levelArray_js__["a" /* levelArray */][levelNumber][1]);
  }

  stopClock() {
    this.clock.stop_tick();
  }

  clockReset() {
    this.stopClock();
    document.getElementById('timer').innerHTML = "Ready!";
    $("#timer").css({"color": "white"});
    this.startClock();
  }

  stopGame() {
    cancelAnimationFrame(this.cancelFrame);
  }

  newPieces() {
    this.mover = new __WEBPACK_IMPORTED_MODULE_1__mover_js__["a" /* default */](82, 337, this.ctx);
    this.gameDrawing = new __WEBPACK_IMPORTED_MODULE_0__gamedrawing_js__["a" /* default */](this.ctx, this.mover, this.duration);
  }

  startSpin() {
    this.game.style.transform = `rotate(0deg)`;
    Object(__WEBPACK_IMPORTED_MODULE_3__spin_motion_js__["a" /* keepSpinning */])([-2, -1, 1, 2], 0, this.game);
  }

  nextLevel() {
    clearTimeout(__WEBPACK_IMPORTED_MODULE_3__spin_motion_js__["d" /* stopSpin */]);
    clearTimeout(__WEBPACK_IMPORTED_MODULE_3__spin_motion_js__["c" /* rotator */]);
    clearTimeout(__WEBPACK_IMPORTED_MODULE_3__spin_motion_js__["b" /* rotatie */]);
    this.newPieces();
    this.startSpin();
    this.clockReset();
    this.move();
  }

  move() {
    $(document).on("keydown", Object(__WEBPACK_IMPORTED_MODULE_4__mover_movement_js__["a" /* keydownListner */])(this.mover));
    $(document).on("keyup", Object(__WEBPACK_IMPORTED_MODULE_4__mover_movement_js__["b" /* keyupListner */])(this.mover));
  }

  play() {
    this.clockReset();
    this.step();
    this.move();
  }
}

/* harmony default export */ __webpack_exports__["b"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_level1_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_level2_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels_level3_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels_level5_js__ = __webpack_require__(12);







const levelArray = [[__WEBPACK_IMPORTED_MODULE_0__levels_level1_js__["a" /* maze1 */], 30], [__WEBPACK_IMPORTED_MODULE_1__levels_level2_js__["a" /* maze2 */], 30], [__WEBPACK_IMPORTED_MODULE_2__levels_level3_js__["a" /* maze3 */],40], [__WEBPACK_IMPORTED_MODULE_3__levels_level5_js__["a" /* maze5 */], 40] ];
/* harmony export (immutable) */ __webpack_exports__["a"] = levelArray;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__countdown_clock_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spin_motion_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starting_the_game_js__ = __webpack_require__(2);






const resetGame = (status) => {
  if(!status) {
    $("#you-win-screen").show();
  } else {
    $("#gameOverScreen").show();
  }

  clearTimeout(__WEBPACK_IMPORTED_MODULE_0__countdown_clock_js__["a" /* clearTime */]);
  clearTimeout(__WEBPACK_IMPORTED_MODULE_1__spin_motion_js__["d" /* stopSpin */]);
  let lastGame = newGame
  newGame = false;

  lastGame.stopClock();
  lastGame.stopGame();
  $(document).off("keydown");
  $(document).off("keyup");


  document.addEventListener("keypress", __WEBPACK_IMPORTED_MODULE_2__starting_the_game_js__["spaceBar"], {once: true});
};
/* harmony export (immutable) */ __webpack_exports__["a"] = resetGame;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


function rotation(angle, counter, degrees, el){
  degrees += angle;

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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collision__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levelArray_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_game_js__ = __webpack_require__(5);



class GameDrawing {
  constructor(ctx, mover) {
    this.maze = __WEBPACK_IMPORTED_MODULE_1__levelArray_js__["a" /* levelArray */][levelNumber][0];
    this.ctx = ctx;
    this.mover = mover;
    this.gameOver = false;
    this.nextMaze = levelNumber + 1;
    this.draw_reset = this.draw_reset.bind(this);
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

    if(!this.gameOver) {

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
              levelNumber++;
              this.gameOver = true ;

              if(levelNumber === __WEBPACK_IMPORTED_MODULE_1__levelArray_js__["a" /* levelArray */].length) {
                setTimeout(() => {
                  newGame.stopGame();
                  newGame.stopClock();
                  Object(__WEBPACK_IMPORTED_MODULE_2__reset_game_js__["a" /* resetGame */])();
                }, 0);

              }

            }
          }
        }
      }

    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GameDrawing);


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

  const maze1 = [
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
/* harmony export (immutable) */ __webpack_exports__["a"] = maze1;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

  const maze2 = [
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
/* harmony export (immutable) */ __webpack_exports__["a"] = maze2;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const maze3 = [
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
/* harmony export (immutable) */ __webpack_exports__["a"] = maze3;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


  const maze5 = [
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
/* harmony export (immutable) */ __webpack_exports__["a"] = maze5;



/***/ }),
/* 13 */
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

    updateMover() {
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
/* 14 */
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



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map