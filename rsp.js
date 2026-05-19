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

    
	const getResult = (playerChoice, computerChoice) =>
	playerChoice === computerChoice ? "IT'S A TIE!" : 
	(playerChoice === "rock" && computerChoice === "scissors") || 
	(playerChoice ===  "paper" && computerChoice === "rock") || 
	(playerChoice ===  "scissors" && computerChoice === "paper")
	? "YOU WIN!"
	: "YOU LOSE!"

	  const result = getResult(playerChoice, computerChoice);

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

	
    resultDisplay.style.backgroundColor =
        result === "IT'S A TIE!"
            ? "blue"
            : result === "YOU WIN!"
            ? "green"
            : "red";

    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";
}


	