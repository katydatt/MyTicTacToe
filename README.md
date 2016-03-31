Tic Tac Toe
===========

### WDI FIRST PROJECT.

In our first project for this course we had to build a Tic Tac Toe game *from scratch.*

The languages that I used are : 
  
  + HTML, 
  + Javascript and 
  + CSS.

It's been really hard and frustrating for me, cause I had no idea where to start from and define every and each step I should have followed. So I kept it very simple and I sticked with the basics.

In my html file I created a grid of divs, where <div class='console'> will contain all the other smaller boxes which my console is formed by; created a button which I can reset the board with.

In my main.js is where all the magic happens.
 I created a series of functions that will help me to set every point of the game step by step . 

Defining a Move; a startGame which clears my console every time a new game is starting;
a setMessage that gives me hints for what is happening; switchTurn which does exactly what it says; checkWinner checks all the single possible combinations of winning after all the boxes has been defined from getBox and getRow ,that helped me writing a more readable code.
After all these functions , I asked to my button to responde to each user's click and reset my console, clearing all the boxes. 

And at last but not least I asked my console to responde to user's click and make all my function written above working.

And my CSS file of course made my html look like the way it does. I tried to make it as a responsive web site, so for a max-width of 40em I set other values to my css properties .

Check it out here : [Tic Tac Toe](http://katydatt.github.io/MyTicTacToe/).

![wireframe](https://github.com/katydatt/MyTicTacToe/blob/master/TicTacToe.png?raw=true).