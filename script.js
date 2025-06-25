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