function computerPlay() {
    const numToGestures = ["Rock", "Paper", "Scissors"];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    computerSelection = numToGestures[computerSelectionNumber];
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
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


function game() {
    let wins = 0;
    let losses = 0;

    console.log("Hello! Play a game of Rock Paper Scissors against me. Best of 5!")

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt("Your move?"), computerPlay());
        console.log(result);

        if (result.includes("win")) {
            wins++;
        }
        if (result.includes("lose")) {
            losses++;
        }
    }

    if (wins < losses) {
        console.log("You've lost the game!");
    }
    else if (wins > losses) {
        console.log("You've won the game!")
    }
    else {
        console.log("It's a tie!")
    }
}

game();