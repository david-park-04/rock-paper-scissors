//
// Rock, Paper, Scissors
//
// Classic game of rock, paper, scissors played in the console.
//

//
// getComputerChoice
// 
// Randomly selects the computer's choice of rock, paper, or scissors.
//
// Parameters: None
// Returns: Computer's choice (String)
//
function getComputerChoice() {
    // Generate a random number between 0 and less than 3
    let choice = Math.random() * 3;

    if (choice <= 1) {
        return "Rock";
    } 
    else if (choice <= 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

