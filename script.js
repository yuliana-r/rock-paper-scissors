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

//game();

function game() {

    while (playerScore < 5 || computerScore < 5) {
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            alert("Game over");
            break;
        }
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
                computerScore++;
                roundOutcome.textContent = "You lost! Paper beats rock.";
                currentScore.textContent = `${playerScore} : ${computerScore}`;
            } else {
                playerScore++;
                roundOutcome.textContent = "You win! Rock beats scissors.";
                currentScore.textContent = `${playerScore} : ${computerScore}`;
            }

            /* If player picks PAPER */

        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                playerScore++;
                roundOutcome.textContent = "You win! Paper beats rock.";
                currentScore.textContent = `${playerScore} : ${computerScore}`;
            } else {
                computerScore++;
                roundOutcome.textContent = "You lost! Scissors beat paper.";
                currentScore.textContent = `${playerScore} : ${computerScore}`;
            }
        }

        /* If player picks SCISSORS */
        else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                playerScore++;
                roundOutcome.textContent = "You win! Scissors beat paper.";
                currentScore.textContent = `${playerScore} : ${computerScore}`;
            } else {
                computerScore++;
                roundOutcome.textContent = "You lost! Rock beats scissors.";
                currentScore.textContent = `${playerScore} : ${computerScore}`;
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
    updateChoice(playerSelection, computerSelection);

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