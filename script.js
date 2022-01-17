let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerChoice = document.getElementById('user');
const computerChoice = document.getElementById('computer');
const roundOutcome = document.getElementById('outcome');
const currentScore = document.getElementById('currentScore');

game();

function game() {

    for (let round = 0; round < 5; round++) {

    playRound(playerSelection, computerSelection);
    //console.log(`Current score -  ${playerScore} (you) :  ${computerScore} (computer)`);
    currentScore.textContent = `${playerScore} : ${computerScore}`;

}
    // if (computerScore == playerScore) {
    //     console.log(`It is a draw! The final score is ${computerScore} (computer) : 
    //     ${playerScore} (you)`);
    // } else if (computerScore > playerScore){
    //     console.log(`You lost the game! The final score is ${computerScore} (computer) : 
    //     ${playerScore} (you)`);
    // } else {
    //     console.log(`You won the game! The final score is ${playerScore} (you) : 
    //     ${computerScore} (computer)`);
    // }
    }

/* Computer makes a random choice */

function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}

/* Plays 1 round and displays the outcome */

function playRound(playerSelection, computerSelection) {

    /* If DRAW */

    if (playerSelection === computerSelection) {
        roundOutcome.textContent = "It's a tie!";
    } else {

        /* If player picks ROCK */

        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                roundOutcome.textContent = "You lost! Paper beats rock.";
                computerScore++;
            } else {
                roundOutcome.textContent = "You win! Rock beats scissors.";
                playerScore++;
            }

            /* If player picks PAPER */

        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                roundOutcome.textContent = "You win! Paper beats rock.";
                playerScore++;
            } else {
                roundOutcome.textContent = "You lost! Scissors beat paper.";
                computerScore++;
            }
        }

        /* If player picks SCISSORS */
        else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                roundOutcome.textContent = "You win! Scissors beat paper.";
                playerScore++;
            } else {
                roundOutcome.textContent  = "You lost! Rock beats scissors.";
                computerScore++;
            }
        }
    }
}

const rockImage = document.createElement('img');
rockImage.src ="./images/rock.png"
const paperImage = document.createElement('img');
paperImage.src ="./images/paper.png"
const scissorsImage = document.createElement('img');
scissorsImage.src ="./images/scissors.png"

rockBtn.addEventListener('click', () => handleChoice('rock'));
paperBtn.addEventListener('click', () => handleChoice('paper'));
scissorsBtn.addEventListener('click', () => handleChoice('scissors'));

function handleChoice(playerSelection) {

    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateChoice(playerSelection, computerSelection);

}

function updateChoice(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            //playerChoice.appendChild(rockImage);
            playerChoice.textContent = "rock";
            break;
        case 'paper':
            //playerChoice.appendChild(paperImage);
            playerChoice.textContent = "paper";
            break;
        case 'scissors':
            //playerChoice.appendChild(scissorsImage);
            playerChoice.textContent = "scissors";
            break;
    }

    switch (computerSelection) {
        case 'rock':
            //computerChoice.appendChild(rockImage);
            computerChoice.textContent = "rock";
            break;
        case 'paper':
            //computerChoice.appendChild(paperImage);
            computerChoice.textContent = "paper";
            break;
        case 'scissors':
            //computerChoice.appendChild(scissorsImage);
            computerChoice.textContent = "scissors";
            break;
    }
}

