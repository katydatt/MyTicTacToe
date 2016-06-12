
var turn = "X";
var  winner = null; // to change player's turnn at the begin


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
// window.addEventListener('DOMContentLoaded', function() {
var startGame = function() {
  for (var i =1; i <= 9; i++) { //clears all my boxes
    clearBox(i);
  }

  setMessage(turn + " gets to start.");
}

var setMessage = function(msg) {
  document.getElementById("message").innerHTML = msg;
}



function switchTurn() {

          if(checkWinner(turn)) {
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
        
        function checkForTie(){
          for(var i = 1; i < 10 ; i++) {
            if(getBox(i) === ""){
                console.log('not a tie');
                return false;
              }
            } return true;
        }

        function checkRow(a, b, c, move) {
          var result = false;
          if(getBox(a) === move && getBox(b) === move && getBox(c) === move) {
            result = true;
          }

          return result;
        }

        function getBox(number) {
          return document.getElementById("box" + number).innerHTML;

        }

        function clearBox(number) {
          return document.getElementById("box" + number).innerHTML = "";
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
