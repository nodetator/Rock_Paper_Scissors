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

function playRound (playerSelection, ComputerChoice) {
    // get User Choice
    let Player = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    console.log(Player);

    // get Computer choice
    let Computer = getComputerChoice();
    console.log(Computer);

    // Define the Logic 

    if (Player == Computer) {
        console.log("It's a tie!!!");

    } else if (Player == 'rock') {
        if (Computer == 'paper') {
            console.log("Too bad!, you lost, Paper beats Rock!");
        } else if (Computer == 'scissors') {
            console.log("Congratulations, you won! Rock beats Scissors");
        }
    } else if (Player == 'paper') {
        if (Computer == 'rock') {
            console.log("Congratulations, you won! Paper beats Rock!");
        } else if (Computer == 'scissors') {
            console.log("Too bad, you lost! Scissors beat paper");
        }

    } else if (Player == 'scissors') {
        if (Computer == 'rock') {
            console.log("Too bad, you lost! Rock beats scissors!");
        } else if (Computer == 'paper') {
            console.log("Congratulations, you won!, scissors beat paper");
        }
    }

    
    }  

console.log(playRound());
    // Rock beats scissors
    // Paper beats Rock
    // Scissors beat Paper;
    



// Fourth, define a function that keeps score of a games best 3 out of 5


