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

console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())