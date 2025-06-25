function getComputerChoice() {
    let n = Math.random();

    if (n > (2/3)) {
        return "rock";
    } else if (n > (1/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter 'rock', 'paper' or 'scissors'");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw")               
    } else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game with the score being ${humanScore}-${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose the game with the score being ${humanScore}-${computerScore}`)
    } else {
        console.log(`You draw the game with the score being ${humanScore}-${computerScore}`)
    }
}


let humanScore = 0;
let computerScore = 0;

playGame();