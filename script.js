//
// Rock, Paper, Scissors
//
// Classic game of rock, paper, scissors played in the console.
// Game ends after 5 rounds.
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

//
// getHumanChoice
// 
// Retrieves the user's choice and returns it.
// 
// Parameters: None
// Returns: User's choice (String)
//
function getHumanChoice() {
    let choice = prompt("Type (r) for Rock, (p) for Paper, or (s) for Scissors.");

    if (choice === "r") {
        return "Rock";
    }
    else if (choice === "p") {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//
// playGame
// 
// Handles game logic. Plays 5 rounds before ending.
//
// Parameters: None
// Returns: None
//
function playGame() {
    // 
    // Player score variables
    //
    let humanScore = 0;
    let computerScore = 0;

    //
    // playRound
    //
    // Plays a single round of Rock, Paper, Scissors, printing the result of the round.
    //
    // Parameters: humanChoice (String), computerChoice (String)
    // Returns: None
    //
    function playRound(humanChoice, computerChoice) {
        // Human choice and computer choice are the same
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both players chose ${humanChoice}`);
        }

        // All possible outcomes
        if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                console.log("You lose! Paper beats rock.");

                computerScore++;
            }
            else if (computerChoice === "Scissors") {
                console.log("You win! Rock beats scissors.");

                humanScore++;
            }
        }
        else if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                console.log("You win! Paper beats rock.");

                humanScore++;
            }
            else if (computerChoice === "Scissors") {
                console.log("You lose! Scissors beats paper.");

                computerScore++;
            }
        }
        else if (humanChoice === "Scissors") {
            if (computerChoice === "Rock") {
                console.log("You lose! Rock beats scissors.");

                computerScore++;
            }
            else if (computerChoice === "Paper") {
                console.log("You win! Scissors beats paper.");

                humanScore++;
            }
        }
    }

    // Play for 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Game over!");
    console.log(`Player score: ${humanScore}, Computer score: ${computerScore}`);
}

playGame();