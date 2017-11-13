
# Maze Spinner
Maze Spinner is an interactive game where a player is tasked with navigating through a maze. The fun occurs as the maze randomly rotates and disorients the player. [Give it a go!](https://coreyladovsky.github.io/Maze-Spinner/)


## How To Play
The goal of the game is to move the blue ball from the green square to the red square.
Use the arrow keys, or asdw to navigate around the maze.
Remember, the N on the maze will always be linked to your 'up' key.  

## Technologies
The core logic of the game is written in JavaScript with the addition of jQuery for smooth game play.
The visuals of the maze are designed with canvas.
The opening and closing screens are created with HTML and CSS.
I used font-awesome for icons and Google fonts for the main font.

## Difficulties
I battled with numerous bugs and difficulties while crafting Maze Spinner.
The first thing I grappled with was how I would get my maze to rotate at random 90 or 180 degree intervals, in random directions, and at random intervals of time. I was able to overcome this by writing three functions that use a total of three setTimeout calls. The functions keep track of degrees, angles, as well as manipulate the HTML element and will run until the dawn of time unless specifically instructed to stop.
This is where my next set of struggles began. I needed a way to stop them at the end of each level as well as disable the movement of the ball. I controlled this with jQuery so that I could turn off and on anonymous event listener functions.
My weirdest bug was in the game over call. If the ball ended up the in the red the game would call to restart over and over again because of the canvas requestAnimationFrame method. This caused my keepSpinning method to be called hundreds of times. The maze glitched like crazy. Luckily I eventually figured out to keep track with a gameOver variable that would skip the call if it had been set to true.

![One Of the Mazes](/images/level10.png)



## Wireframes
![Game Opening Image](/images/Maze_Spinner_Open_Page.png)
![Maze](/images/Maze_Spinner_maze.png)
![Game Over](/images/Maze_Spinner_game_over.png)

##To-dos
I'd like to implement music, and more levels.
Someday I may decide to add a computer player to race against.
Refactor my code into classes. 
