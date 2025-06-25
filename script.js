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

let humanScore = 0;
let computerScore = 0;