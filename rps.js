let cWin = 0;
let pWin = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("#result");
const scoreboard = document.querySelector("#scoreboard");


const playerWin = "Player wins!"
const playerLose = "Computer wins!"
const tie = "Tied! Redo!"

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
        
}

function ScoreboardUpdate() {
    if (pWin == 5) {
        alert("You win!")
        scoreboard.textContent = "You won! Pick your throw to try again"
        pWin = 0
        cWin = 0
    } else if (cWin == 5) {
        alert("You lose!")
        scoreboard.textContent = "You lost! Pick your throw to try again"
        pWin = 0
        cWin = 0
    } else {
    scoreboard.textContent = "Player:" + pWin + " CPU:" + cWin;
    }
}

rockButton.addEventListener("click", function (e) {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    result.textContent = (playRound(playerSelection, computerSelection))
    ScoreboardUpdate();
})

paperButton.addEventListener("click", function (e) {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    result.textContent = (playRound(playerSelection, computerSelection))
    ScoreboardUpdate();
})

scissorsButton.addEventListener("click", function (e) {
    let computerSelection = getComputerChoice();
    let playerSelection = 'scissors';
    result.textContent = (playRound(playerSelection, computerSelection))
    ScoreboardUpdate();
})


