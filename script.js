let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice())
    })
})

const results = document.querySelector("#results")
const scores = document.querySelector("#scores")

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

function win(computerChoice) {
    results.textContent = "The computer picked " + computerChoice + ", You win!"
    humanScore++
    logScore()
}

function lose(computerChoice) {
    results.textContent = "The computer picked " + computerChoice + ", You lose!"
    computerScore++
    logScore()
}

function draw(computerChoice) {
    results.textContent = "The computer picked " + computerChoice + ", Draw!"
    logScore()
}

function logScore() {
    const text = "Human: " + humanScore + ", Computer: " + computerScore
    scores.textContent = text;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) return draw(computerChoice);
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "paper": return lose(computerChoice);
            case "scissors": return win(computerChoice);
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock": return win(computerChoice);
            case "scissors": return lose(computerChoice);
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock": return lose(computerChoice);
            case "paper": return win(computerChoice);
        }
    }
}