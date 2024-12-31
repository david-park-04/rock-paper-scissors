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
// playGame
// 
// Handles game logic. Plays 5 rounds before ending.
//
// Parameters: None
// Returns: None
//
function playGame() {
    //
    // Scores
    //
    let humanScore = 0;
    let computerScore = 0;

    // 
    // Display text
    //
    let resultText = document.querySelector(".result");
    let scoreText = document.querySelector(".score");

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
            resultText.textContent = `Tie! Both chose ${humanChoice}`;
        }
        // Winning outcomes
        else if ((humanChoice === "Rock" && computerChoice === "Scissors") 
            || (humanChoice === "Paper" && computerChoice === "Rock")
            || (humanChoice === "Scissors" && computerChoice === "Paper")) {
            resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;

            humanScore++;
            scoreText.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }
        else {
            resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;

            computerScore++;
            scoreText.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        }

        //
        // Check for game end
        //
        if (humanScore === 5 || computerScore === 5) {
            disableButtons();
        }
    }

    // 
    // disableButtons
    //
    // Removes event listener for buttons
    // 
    // Parameters: None
    // Returns: None
    // 
    function disableButtons() {
        document.querySelectorAll(".choices button").forEach(button => {
            button.disabled = true; // Disable all buttons
        });
    }

    // Event listener for buttons
    const choice = document.querySelector(".choices");
    choice.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const humanChoice = event.target.id;
            const computerChoice = getComputerChoice();
            
            playRound(humanChoice, computerChoice);
        }
    });
}

playGame();