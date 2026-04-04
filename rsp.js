const playerDisplay = document.getElementById
("player-choice");
const playerDisplay = document.getElementById
("computer-choice");
const resultDisplay = document.getElementById
("resultDisplay");

const choices = [ "Rock", "Paper", "Scissors"];

function Game(playerChoice){
	
	const computerChoice= choices[Math.floor(Math.random() * 3)];

	const getResult = (playerChoice, computerChoice) =>
	playerChoice === computerChoice ? "IT'S A TIE!" : 
	(playerChoice === "Rock" && computerChoice === "Scissors") || 
	(playerChoice ===  "Paper" && computerChoice === "Rock") || 
	(playerChoice ===  "Scissors" && computerChoice === "Paper")
	? "YOU WIN!"
	: "YOU LOSE!"
}
