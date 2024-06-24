/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const ComputerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

const choices = ["rock", "paper", "scissors", "lizard", "spock"];


for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);


    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];
}

