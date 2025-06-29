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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        ++humanScore;
        div.textContent = `You win, ${humanChoice} beats ${computerChoice}, the score is ${computerScore}-${humanScore} your way`;
    } else if (humanChoice === computerChoice) {
        div.textContent = `Draw, the score is ${computerScore}-${humanScore} your way`;             
    } else {
        ++computerScore;
        div.textContent = `You lose, ${computerChoice} beats ${humanChoice}, the score is ${computerScore}-${humanScore} your way`;
    }

    if (humanScore === 5) {
        div.textContent = "You win the game!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        div.textContent = "You lose the game!";
        humanScore = 0;
        computerScore = 0;
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const body = document.querySelector("body");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});

const buttons = document.createElement("div");
buttons.id = "buttonContainer";

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);
body.appendChild(buttons);

const div = document.createElement("div");
body.appendChild(div);