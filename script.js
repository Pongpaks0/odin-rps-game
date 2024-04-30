let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch (value) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase()
}

function win() {
    console.log("You win!")
    humanScore++
    logScore()
}

function lose() {
    console.log("You lose!")
    computerScore++
    logScore()
}

function draw() {
    console.log("Draw!")
    logScore()
}

function logScore() {
    console.log("Human: " + humanScore + ", Computer: " + computerScore);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock": return draw();
            case "paper": return lose();
            case "scissors": return win();
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock": return win();
            case "paper": return draw();
            case "scissors": return lose();
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock": return lose();
            case "paper": return win();
            case "scissors": return draw();
        }
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
}

playGame(rock)