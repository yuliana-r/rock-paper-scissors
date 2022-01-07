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
    /* If player picks ROCK */
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        alert(`Computer chose ${computerSelection}. You lose! Paper beats rock`);

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        alert(`Computer chose ${computerSelection}. It's a draw!`);

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){} 
    }
