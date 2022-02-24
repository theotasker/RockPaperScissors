function computerPlay() {
    let computerChoice = ""
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        computerChoice = "rock"
    }
    else if (randomNumber == 1) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function playerSelection() {
    let playerInput = window.prompt("What is your choice, rock, paper, or scissors?")
    playerInput = playerInput.toLowerCase()
    while (true) {
        if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
            return playerInput
        }
        else {
            playerInput = window.prompt("Invalid selection, please try again. What is your choice, rock, paper, or scissors?")
        }
    }
}

function playRound(computer, player) {
    if ((player === "paper" && computer === "rock") || (player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper")) {
        return "You win! " + player.charAt(0).toUpperCase() + player.slice(1) + " beats " + computer + "!"
    }
    else if ((player === "paper" && computer === "scissors") || (player === "rock" && computer === "paper") || (player === "scissors" && computer === "rock")) {
        return "You lose! " + computer.charAt(0).toUpperCase() + computer.slice(1) + " beats " + player + "!"
    }
    else {
        return "It's a tie!"
    }
}

function game(rounds) {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let result = playRound(computerPlay(), playerSelection());
        console.log(result);
        if (result.includes("You win")) {
            playerScore++;
        }
        else if (result.includes("You lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win, final score " + playerScore + " to " + computerScore)
    }
    else if (playerScore < computerScore) {
        console.log("You lose, final score " + playerScore + " to " + computerScore)
    }
    else {
        console.log("It's a tie, final score " + playerScore + " to " + computerScore)
    }
}

game(5)