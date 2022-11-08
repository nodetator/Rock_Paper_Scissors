//This is a game of Rock Paper Scissors

// First, I need something that returns a computer choice.
// The Computer will randomly select Rock, Paper or Scissors
// I need 3 choices (Rock, Paper, Scissors)
// I need something that stores the choice
console.log("This is a game of Rock, Paper Scissors, the player, you, will play 5 rounds of rock, papers, scissors against the computer! Let's go!!!")


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
        console.log("HAHAHHAHAH you tied!, player and computer both get 0 points for this round");
        return "tie";

    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log("Sadly, you lost this round");
            return "computer";
            
        } else if (computerSelection == 'scissors') {
            console.log("Congratz! You won against the computer!");
            return "player";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection== 'rock') {
            console.log("Congratz! You won against the computer!");
            return "player";
        } else if (computerSelection == 'scissors') {
            console.log("Sadly, you lost this round");
            return "computer";
        }

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log("Sadly, you lost this round");
            return "computer";
        } else if (computerSelection == 'paper') {
            console.log("Congratz! You won against the computer!");
            return "player";
        }
    } 
    
    }  

    // Rock beats scissors
    // Paper beats Rock
    // Scissors beat Paper;
    
// Create a function to play 5 rounds of Rock paper Scissors
// Function should keep track of score
// Function should report the results at the end

function game() {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        //inside this function, write code that plays 5 rounds
        let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();

        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        //keeps track of the score
        if (result == "computer") {
            compScore += 1;
        } else if (result == "player") {
            playerScore += 1;
        }
    }

    console.log('And the Final Score is Computer = ' + compScore + ', Player = ' + playerScore);

    // bottom code prints out the final winner
    if (compScore == playerScore) {
        console.log("You tied with the Computer");
    } else if (compScore > playerScore) {
        console.log("Noobhai you lost!");
    } else if (playerScore > compScore) {
        console.log("You won against the computer!");
    }
}

game();