const playerWin = "Player wins!"
const playerLose = "Computer wins!"
const tie = "Tied! Redo!"


let pWin = 0;
let cWin = 0;

function getComputerChoice () {
    let choice = Math.floor((Math.random() * 100) + 1)
    if (choice <= 33) {
        return "rock";
    }
    else if (choice > 33 && choice <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
        if (playerSelection == "rock" ) {
            switch(computerSelection) {
                case "rock":
                    return tie;
                case "paper":
                    cWin++;
                    return playerLose;
                case "scissors":
                    pWin++;
                    return playerWin;
            }
        }

        if (playerSelection == "paper") {
            switch(computerSelection) {
                case "rock":
                    pWin++;
                    return playerWin;
                case "paper":
                    return tie;
                case "scissors":
                    cWin++;
                    return playerLose;
            }

        }
        
        if (playerSelection == "scissors") {
            switch(computerSelection) {
                case "rock":
                    cWin++;
                    return playerLose;
                case "paper":
                    pWin++;
                    return playerWin;
                case "scissors":
                    return tie;
            }
            
        }

        else {
            return "Not a valid input! Try again."
        }
    return;
}

while (pWin < 5 && cWin < 5) {
    let playerSelection = prompt("Rock, paper, scissors:");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (pWin == 5) {
        console.log("You win!");
    }
    if (cWin == 5) {
        console.log("You lose!");
    }
}
