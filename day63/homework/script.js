let userScore = 0;
let computerScore = 0;

while (userScore < 3 && computerScore < 3) {
    
    let userChoice = prompt("choose rock, paper or scissors: ").toLowerCase();
    let computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("your choice: " + userChoice);
    console.log("computer choice: " + computerChoice);

    if (computerChoice === userChoice) {
        console.log("draw!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("you won this round!");
        userScore += 1;
    } else {
        console.log("computer won this round!");
        computerScore += 1;
    }

    console.log("your score: " + userScore + "  computer: " + computerScore);
}

if (userScore === 3) {
    console.log("you won this round!");
} else {
    console.log("computer won this game!");
}