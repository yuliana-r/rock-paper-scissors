let array = [
    "rock",
    "paper",
    "scissors"
]

function computerPlay() {
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

const playerSelection = prompt("Pick Rock, Paper or Scissors!");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {

    /* If DRAW */

    if (playerSelection.toLowerCase() === computerSelection) {
        alert("It's a draw!");
    } else {
        
        /* If player picks ROCK */

        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "paper") {
                alert("You lost! Paper beats rock.");
            } else {
                alert("You win! Rock beats scissors. comp choice");
            }

            /* If player picks PAPER */

        } else if (playerSelection.toLowerCase() === "paper") {
                if (computerSelection === "rock") {
                    alert("You win! Paper beats rock.");
                } else {
                    alert("You lost! Scissors beat paper.");
                }
            }

            /* If player picks SCISSORS */

            else if (playerSelection.toLowerCase() === "scissors") {
                if (computerSelection === "paper") {
                    alert("You win! Scissors beat paper.");
                } else {
                    alert("You lost! Rock beats scissors.");
                }
            } else {
                alert("I do not understand, please check the spelling and try again!");
            }
        }  
        }
