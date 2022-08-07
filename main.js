//Game will play against the computer:
//create fxn getComputerChoice()
//create an array with rock, paper, scissors
//initialize variable randomNumber to choose a random number between index 0 & the array length - 1
//if myArray[randomNumber] === rock 

//if myArray[randomNumber] === paper

//if myArray[randomNumber] === scissors

let myArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()* myArray.length);
    let computerChoice = myArray[randomChoice];
    return computerChoice;
}

//initialize rockPaperScissors fxn
//2 parameters for the fxn: playerSelection & getComputerChoice
//input the computer's choice & the player's choice into the function
//compare the player's vs computer's choice.

function playRound(playerSelection, computerChoice) {
    console.log(`Your choice is: ${playerSelection}`);
    console.log(`Computer's choice is: ${computerChoice}`);
    if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        let playerWins = "win";
        return playerWins;
    }
    if (playerSelection === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper covers rock!");
        let playerWins = "lose";
        return playerWins;
    }
    if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        let playerWins = "lose";
        return playerWins;
    }
    if (playerSelection === "paper" && computerChoice === "rock") {
        console.log("You win! Paper covers rock!");
        let playerWins = "win";
        return playerWins;
    }
   if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper")
        let playerWins = "win";
        return playerWins;
    }
   if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        let playerWins = "lose";
        return playerWins;
    }
    if (playerSelection === computerChoice) {
        // console.log("A tie in playRound() has been found"); 
        let tie = "tie";
        return tie;
    }
}

//5 round game
//keeps score
//reports a winner or loser at the end

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <5; i++) {
        console.log(`Round ${i + 1}:`);
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        let computerChoice = getComputerChoice();
        let gameResult = playRound(playerSelection, computerChoice);
        if (gameResult === "win") {
            playerScore += 1;
            console.log(`Score is: ${playerScore}/${computerScore}`);
        }
        else if (gameResult === "lose") {
            computerScore += 1;
            console.log(`Score is: ${playerScore}/${computerScore}`);
        }
        else {
            console.log("It's a tie!");
            console.log(`Score is still ${playerScore}/${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win! The final score is ${playerScore}/${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`You lose! The final score is ${playerScore}/${computerScore}`);
    }
    else if (playerSelection === getComputerChoice) {
        console.log("The final result is a tie!");
    }
    }

game();

