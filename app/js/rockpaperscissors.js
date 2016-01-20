////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

var getInput = function() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   var answer = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
   return answer;
}

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {
    var playerMove = move || getInput();
    return playerMove;
}

var getComputerMove = function(move) {
  var computerMove = move || randomPlay();
  return computerMove;
}

var getWinner = function(playerMove,computerMove) {
  var winner;
  if (computerMove == playerMove){
      winner = 'tie';
  }
  else if ((playerMove == 'rock' && computerMove == 'scissors')||
    (playerMove == 'scissors' && computerMove == 'paper') ||
    (playerMove == 'paper' && computerMove == 'rock')) {
      winner = 'player';
    }
    else {
        winner = 'computer';
    }
    return winner;
}


var playToFive = function() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var result = (getWinner(playerMove,computerMove));
        if (result == 'computer'){
            computerWins += 1;
        }
        else if (result == 'player'){
            playerWins += 1;
        }
        else{
            ties +=1;
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    if (playerWins == 5){
        console.log("Player Wins")
    }
    else {
        console.log("Computer Wins")
    }
    return [playerWins, computerWins];
}

var playToX = function(x) {
  var playerWins = 0;
  var computerWins = 0;
  var ties = 0;
  while (playerWins < x && computerWins < x){
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var result = (getWinner(playerMove,computerMove));
        if (result == 'computer'){
            computerWins += 1;
            }
        else if (result == 'player'){
            playerWins += 1;
        }
        else{
            ties +=1;
        }
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    if (playerWins == x){
        console.log("Player Wins")
        }
    else {
        console.log("Computer Wins")
    }
    return [playerWins, computerWins];
}
