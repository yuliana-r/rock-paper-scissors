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
const gameOutcome = document.getElementById('gameOutcome');
const restart = document.getElementById('restart');
const overlay = document.getElementById('overlay');

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
                roundOutcome.textContent = "You lost! Rock beats scissors.";
                computerScore++;
            }
        }
    }
}

rockBtn.addEventListener('click', () => handleChoice('rock'));
paperBtn.addEventListener('click', () => handleChoice('paper'));
scissorsBtn.addEventListener('click', () => handleChoice('scissors'));

function handleChoice(playerSelection) {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScore();
    updateChoice(playerSelection, computerSelection);
    isGameOver();
}

function updateChoice(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerChoice.innerHTML = "<img src='./images/rock.png'>";
            break;
        case 'paper':
            playerChoice.innerHTML = "<img src='./images/paper.png'>";
            break;
        case 'scissors':
            playerChoice.innerHTML = "<img src='./images/scissors.png'>";
            break;
    }

    switch (computerSelection) {
        case 'rock':
            computerChoice.innerHTML = "<img src='./images/rock.png'>";
            break;
        case 'paper':
            computerChoice.innerHTML = "<img src='./images/paper.png'>";
            break;
        case 'scissors':
            computerChoice.innerHTML = "<img src='./images/scissors.png'>";
            break;
    }
}

function updateScore() {
    currentScore.textContent = `${playerScore} : ${computerScore}`;
}

function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        overlay.style.display = "block";
        if (playerScore > computerScore) {
            gameOutcome.textContent = "PAW-some - you won the game!";
        } else {
            gameOutcome.textContent = "CLAW-ful - you lost the game!"
        }

    }
}

restart.addEventListener('click', restartGame);

function restartGame() {
    overlay.style.display = "none";
    computerScore = 0;
    playerScore = 0;
    playerChoice.innerHTML = "";
    computerChoice.innerHTML = "";
    currentScore.textContent = `${playerScore} : ${computerScore}`;
    roundOutcome.textContent = "First to score 5 points wins the game!";
}