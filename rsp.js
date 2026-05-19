const playerDisplay = document.getElementById
("player-choice");
const computerDisplay = document.getElementById
("computer-choice");
const resultDisplay = document.getElementById
("resultDisplay");

const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const tiesDisplay = document.getElementById("ties");

const choices = [ "rock", "paper", "scissors"];

// SCORE VARIABLES
let wins = 0;
let losses = 0;
let ties = 0;


function Game(playerChoice){
	
	const computerChoice= choices[Math.floor(Math.random() * 3)];

     let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
        ties++;
    }

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WIN!";
        wins++;
    }

    else {
        result = "YOU LOSE!";
        losses++;
    }

      // UPDATE TEXT
    playerDisplay.textContent =
        `PLAYER: ${playerChoice}`;

    computerDisplay.textContent =
        `COMPUTER: ${computerChoice}`;

    resultDisplay.textContent = result;

    // UPDATE SCOREBOARD
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;

    // RESULT COLORS
    resultDisplay.style.backgroundColor =
        result === "IT'S A TIE!"
            ? "blue"
            : result === "YOU WIN!"
            ? "green"
            : "red";

    resultDisplay.style.border =
        "2px solid transparent";

    resultDisplay.style.color = "white";
}


// RESET FUNCTION
function resetScore() {

    wins = 0;
    losses = 0;
    ties = 0;

    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;

    playerDisplay.textContent = "PLAYER:";
    computerDisplay.textContent = "COMPUTER:";
    resultDisplay.textContent = "RESULT";

    resultDisplay.style.backgroundColor = "white";
    resultDisplay.style.color = "black";
    resultDisplay.style.border =
        "3px solid rgb(31, 121, 31)";
}

	