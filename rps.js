function getComputerChoice () {
    let choice = Math.floor((Math.random() * 100) + 1)
    console.log(choice);
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
