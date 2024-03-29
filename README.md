# Project 1: Connect4 Game
Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top to bottom. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

## Technologies Used:
- HTML5.
- CSS3.
- JavaScript.
- jQuery.

## Development Process and Problem-Solving Strategy:
First thing I did was building the structure of the game in HTML, I used a div container, and inside the container there was four columns, each column in a seperate div, and inside each column there is 4 dots or circules, and each dot had an id name. Than using Flex techniqe in CSS I was able to build to build the structure of the game as shown below:


![GitHub Logo](/project1/board.png)

## Unsolved Problems Which Would Be Fixed in Future Iterations:
- Adding a score to the winner.
- Adding animations to smooth the play.
- Restart the board when a the game finishes without pressing the "newgame" button.
- Increasing the number of columns and rows.

## How I Solved For the Winner:


![GitHub Logo](/project1/Concept.JPG)

The picture above explains how the code will check each row or diagonal or column wins or tie. By creating a for loop, the loop will check if any "r" + i will contain 4 elements in their array, and if it does, this means the condition is met, and there is a winner.

## Link
https://hatimalattas.github.io/project1-connect4/index.html
