//This is a game of Rock Paper Scissors

// First, I need something that returns a computer choice.
// The Computer will randomly select Rock, Paper or Scissors
// I need 3 choices (Rock, Paper, Scissors)
// I need something that stores the choice

function getComputerChoice() {
    let selections = ["rock", "paper", "scissors"];
    let ComputerChoice = selections[(Math.random() * selections.length) | 0];
    return ComputerChoice;
}

// A function that plays a single round of Rock, Paper Scissors
// What is the logic here? Define Rock wins against Scissors, Paper wins against Rock etc

function playRound (playerSelection, computerSelection) {
    // get User Choice
    // let Player = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    //console.log(Player);

    // get Computer choice
    // let Computer = getComputerChoice();
    // console.log(Computer);
    // Define the Logic 
    if (playerSelection == computerSelection) {
        return "It's a tie!!!";

    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return "Too bad!, you lost, Paper beats Rock!";
            
        } else if (computerSelection == 'scissors') {
            return "Congratulations, you won! Rock beats Scissors";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection== 'rock') {
            return "Congratulations, you won! Paper beats Rock!";
        } else if (computerSelection == 'scissors') {
            return "Too bad, you lost! Scissors beat paper";
        }

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "Too bad, you lost! Rock beats scissors!";
        } else if (computerSelection == 'paper') {
            return "Congratulations, you won!, scissors beat paper";
        }
    } 
    
    }  

    // Rock beats scissors
    // Paper beats Rock
    // Scissors beat Paper;
    
// Create a function toplay 5 rounds of Rock paper Scissors
// Function should keep track of score
// Function should report the results at the end

function game() {
    for (let i = 0; i < 5; i++) {
        //inside this function, write code that plays 5 rounds
        let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();

        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        
        //code above plays one round of Rock, Paper, Scissors

        let compScore = 0;
        let playerScore = 0;
        //keeps track of the score
        

        if (result = "computer") {
            compScore += 1;
        } else if (result = "player") {
            playerScore += 1;
        }
        // code above updates the score



        //prints the results of who won each round, and then the final score
    }
}

game();