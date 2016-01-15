////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  var playerMove = move || getInput();
  return playerMove;
}

function getComputerMove(move) {
  var computerMove = move || randomNumber randomPlay();
  return computerMove;
}

function getWinner(playerMove,computerMove) {
  var winner;
  if ((playerMove == 'rock' && computerMove == 'scissors')||
    (playerMove == 'scissors' && computerMove == 'paper') ||
    (playerMove == 'paper' && computerMove == 'rock')) {
      winner = 'player';
    }
    else if ((computerMove == 'rock' && playerMove == 'scissors')||
    (computerMove == 'scissors' && playerMove == 'paper') ||
    (computerMove == 'paper' && playerMove == 'rock')) {
        winner = 'computer';
    }
    else {
      winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins != 5 && computerWins != 5) {
      console.log(getWinner(getPlayerMove, getComputerMove) + 
        " is the winner");
      if (winner == 'player'){
        playerWins += 1
      }
      else if (winner == 'computer') {
        computerWins += 1
      }
      console.log("player has " + playerWins + " wins")
      console.log("computer has " + computerWins + " wins")
    }
    return [playerWins, computerWins];
}

