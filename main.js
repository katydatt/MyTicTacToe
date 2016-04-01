        
var turn = "X";
var  winner = null; // to change player's turn at the begin


//Set message to keep track of what's happening

var setMessage = function(msg) {
  document.getElementById("message").innerHTML = msg;
}   

  // Main function
  var nextMove = function(box) {
      if(winner !== null){
        setMessage(winner +" already won the game");
        
       }
      else if(box.innerHTML === ""){
        box.innerHTML = turn;
        switchTurn();  
       }

      else {
        setMessage("Choose another box.");

       }
  }

// as it says, switch turns
function switchTurn() {
      
      if (checkWinner(turn)) {
          setMessage("Congratulations, " + turn + " wins!");
          winner = turn; // whoever wins is gonna start the game
      }

      else if(turn === "X") {
          turn = "O";
          setMessage("It's " + turn + " turn.");
          }

      else {
          turn = "X";
          setMessage("Its " + turn + " turn.");

          }

}



  // Give "" value to my boxes
 function clearBox(number) {
    return document.getElementById("box" + number).innerHTML = "";
  }



// to apply my ClearBox function to all my boxes
var startGame = function() {
  for (var i =1; i <= 9; i++) {
    clearBox(i);
  }
  setMessage(turn + " gets to start.");
} 

  function getBox(number) {
      return document.getElementById("box" + number).innerHTML;
  }

  // Check that my rows/colums/diagonals have same  move value
  function checkRow(a, b, c, move) {
    var result = false;
    if(getBox(a) === move && getBox(b) === move && getBox(c) === move) {
       result = true;
     }
    return result;
  }


// Check all the combination to win
  function checkWinner(move) {
    var result = false;
      if( checkRow(1, 2, 3, move) ||
          checkRow(4, 5, 6, move) ||
          checkRow(7, 8, 9, move) ||
          checkRow(1, 4, 7, move) ||
          checkRow(2, 5, 8, move) ||
          checkRow(3, 6, 9, move) ||
          checkRow(1, 5, 9, move) ||
          checkRow(3, 5, 7, move)) {

          result = true;
          }
 
          return result;

  }


var btnReset = document.getElementById('reset');

btnReset.addEventListener('click', function() {
      winner = null;
      startGame();
});


var consoleDiv = document.getElementsByClassName("console")[0];

consoleDiv.addEventListener("click", function(event) {
  // event.target === the box to go in
  nextMove(event.target);
  var hasWon = checkWinner();
  

});

startGame();





  







