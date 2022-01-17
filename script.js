let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

//game();

/*function game() {
    
    for (let round = 0; round < 5; round++) {

    playRound(playerSelection, computerSelection);
    alert(`Current score -  ${playerScore} (you) :  ${computerScore} (computer)`);

}
    if (computerScore == playerScore) {
        alert(`It is a draw! The final score is ${computerScore} (computer) : 
        ${playerScore} (you)`);
    } else if (computerScore > playerScore){
        alert(`You lost the game! The final score is ${computerScore} (computer) : 
        ${playerScore} (you)`);
    } else {
        alert(`You won the game! The final score is ${playerScore} (you) : 
        ${computerScore} (computer)`);
    }
    } */

/* Computer makes a random choice */

function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

/* Plays 1 round and displays the outcome */

function playRound(playerSelection, computerSelection) {

   // playerSelection = prompt("Pick Rock, Paper or Scissors!");
    computerSelection = computerPlay();

    /* If DRAW */

    if (playerSelection.toLowerCase() === computerSelection) {
        alert("It's a draw!");
    } else {

        /* If player picks ROCK */

        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "paper") {
                alert("You lost! Paper beats rock.");
                computerScore++;
            } else {
                alert("You win! Rock beats scissors.");
                playerScore++;
            }

            /* If player picks PAPER */

        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "rock") {
                alert("You win! Paper beats rock.");
                playerScore++;
            } else {
                alert("You lost! Scissors beat paper.");
                computerScore++;
            }
        }

        /* If player picks SCISSORS */
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "paper") {
                alert("You win! Scissors beat paper.");
                playerScore++;
            } else {
                alert("You lost! Rock beats scissors.");
                computerScore++;
            }

            /* For everything else */

        } else {
            alert("I do not understand, please check the spelling and try again!");
            playerSelection = prompt("Pick Rock, Paper or Scissors!");
            computerSelection = computerPlay();
        }
    }

}