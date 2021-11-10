function computerPlay() {
    const numToGestures = ["Rock", "Paper", "Scissors"];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    computerSelection = numToGestures[computerSelectionNumber];
    return computerSelection;
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {
        return "Tie! Play again!";
    }
    
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    }

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    }
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    }
}

let textInterface = document.querySelector(".text-interface");
let winCountBox = document.querySelector(".wins>div");
let lossCountBox = document.querySelector(".losses>div");
let tieCountBox = document.querySelector(".ties>div");

let rockButton = document.querySelector("button.rock");
let paperButton = document.querySelector("button.paper");
let scissorsButton = document.querySelector("button.scissors");

rockButton.addEventListener("click", buttonClick);
paperButton.addEventListener("click", buttonClick);
scissorsButton.addEventListener("click", buttonClick);

let wins = 0;
let losses = 0;
let ties = 0;


function buttonClick(e) {
    let clickedButton = e.target.textContent;
    let result = playRound(clickedButton);

    textInterface.innerHTML = result;

    if (result.includes("win")) {
        wins++;
    }
    else if (result.includes("lose")) {
        losses++;
    }
    else {
        ties++;
    }
    updateScore();
}

function updateScore() {
    winCountBox.innerHTML = wins;
    lossCountBox.innerHTML = losses;
    tieCountBox.innerHTML = ties;

    if (wins + losses + ties > 4) {
        endGame();
    }
    
}

function endGame() {
    let replayChoice;
    if (wins > losses) {
        replayChoice = confirm("You win! Play again?");
    }
    else if (losses > wins) {
        replayChoice = confirm("You lose! Play again?");
    }
    else {
        replayChoice = confirm("It's a tie! Play again?");
    }

    if (replayChoice == true) {
        wins = 0;
        losses = 0;
        ties = 0;
        updateScore();
        textInterface.innerHTML = "Play a game of Rock Paper Scissors against me. Best to 5!";
    }
    else {
        rockButton.removeEventListener("click", buttonClick);
        paperButton.removeEventListener("click", buttonClick);
        scissorsButton.removeEventListener("click", buttonClick);
    }
}