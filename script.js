let array = [
    "rock",
    "paper",
    "scissors"
]

const playerSelection = prompt("Pick Rock, Paper or Scissors!");
const computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
game();

function game() {
    
    playRound(playerSelection, computerSelection);

    if (computerScore == playerScore) {
        alert(`You lost the game! The final score is ${computerScore} : ${playerScore}`);
    } else if (computerScore > playerScore){
        alert(`You lost the game! The final score is ${computerScore} : ${playerScore}`);
    } else {
        alert(`You won the game! The final score is ${computerScore} : ${playerScore}`);
    }
    }      

/* Computer makes a random choice */

function computerPlay() {
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

/* Plays 1 round and displays the outcome */

function playRound(playerSelection, computerSelection) {

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
            } else {
                alert("I do not understand, please check the spelling and try again!");
            }
        }  
        }

        

