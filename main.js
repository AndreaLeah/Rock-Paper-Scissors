let myArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()* myArray.length);
    let computerChoice = myArray[randomChoice];
    return computerChoice;
}

// Button Variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const butt1div = document.getElementById('yes');
const butt2div = document.getElementById('no');
let yesBtn = document.createElement('button');
yesBtn.innerText = "yes";
let noBtn = document.createElement('button');
noBtn.innerText = "no";
const audio = new Audio("FartSound.m4a");


// Declarations
let gameResult;
let compC;
let endOfGame;
let playerScore = 0;
let computerScore = 0;
let round = 1;
let choice;
let yourChoiceReplacement;
let computerChoiceReplacement;
let scoreboardText;
let scoreboard;
let endOfGamePrompt;

// Functions
function playRound(playerSelection, computerChoice) {
    if (round < 6) {
        console.log(`Round ${round}:`);
        console.log(`Your choice is: ${playerSelection}`);
        console.log(`Computer's choice is: ${computerChoice}`);

        if (playerSelection === "rock" && computerChoice === "scissors" || playerSelection === "paper" && computerChoice === "rock" || playerSelection === "scissors" && computerChoice === "paper") {
            scoreboardText = document.getElementById('result').innerText = `You win! ${playerSelection} beats ${computerChoice}`;

            console.log(`You win! ${playerSelection} beats ${computerChoice}`);
            let playerWins = "win";
            return playerWins;
        }
        if (playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
            scoreboardText = document.getElementById('result').innerText = `You lose! ${computerChoice} beats ${playerSelection}`;

            console.log(`You lose! ${computerChoice} beats ${playerSelection}`);
            let playerWins = "lose";
            return playerWins;
        }

        if (playerSelection === computerChoice) {
            scoreboardText = document.getElementById('result').innerText = `It's a tie! ${playerSelection} and ${computerChoice} are the same.`;
            let tie = "tie";
            return tie;
        }}
    else {
        round += 1;
        return;
    }}

function game(playerSelection, gameResult, computerChoice) {
        
    if (round < 5) {
        // Result Calculation
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
        scoreboard = document.getElementById('score').innerText = `Score is: ${playerScore}/${computerScore}`;
    }

    else {
        // Final Score Calculation
        if (playerScore > computerScore) {
            scoreboardText = document.getElementById('result').innerText = `You win! ${playerSelection} beats ${computerChoice}`;
            console.log(`You win! The final score is ${playerScore}/${computerScore}`);
        }
        else if (computerScore > playerScore) {
            scoreboardText = document.getElementById('result').innerText = `You win! ${playerSelection} beats ${computerChoice}`;
            console.log(`You lose! The final score is ${playerScore}/${computerScore}`);
        }
        else if (playerSelection === getComputerChoice) {
            scoreboardText = document.getElementById('result').innerText = `You win! ${playerSelection} beats ${computerChoice}`;
            console.log("The final result is a tie!");
        }
        scoreboard = document.getElementById('score').innerText = `The Final Score Is: ${playerScore}/${computerScore}`;
    }
    round += 1;
}

function roundText () {
    if (round < 6) {
    roundTextReplacement = document.getElementById('round').innerText = `Round: ${round}`;
    return roundTextReplacement;
    }
    else {
        return;
    }
}

function yourChoice (choice) {
    if (round < 6) {
        yourChoiceReplacement = document.getElementById('player').innerText = `Your Choice: ${choice}`;
        return yourChoiceReplacement;
        }
        else {
            return;
        }
}

function computersChoice (compC) {
    if (round < 6) {
        computerChoiceReplacement = document.getElementById('computer').innerText = `Computer's Choice: ${compC}`;
        return computerChoiceReplacement;
        }
        else {
            return;
        }
}

function winLoseTie () {
    scoreboardText = document.getElementById('result').innerText = ``;
}

function gameReset () {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
}

function gameWrapper () {
    roundText();
    compC = getComputerChoice();
    gameResult = playRound(choice, compC);
    yourChoice(choice);
    computersChoice(compC);
    game(choice, gameResult);
    if (round == 6) {
        endOfGamePrompt = document.getElementById('endofgameprompt').innerText = "Would you like to play again?"; 
        butt1div.append(yesBtn);
        butt2div.append(noBtn);
    }
    yesBtn.addEventListener('click', function(e) {
        location.reload();
    });
    noBtn.addEventListener('click', function(e) {
        audio.play();
    });

}

// Event Listeners
rock.addEventListener('click', function(e) {
    choice = "rock";
    gameWrapper();

});
paper.addEventListener('click', function(e) {
    choice = "paper";
    gameWrapper();

});
scissors.addEventListener('click', function(e) {
    choice = "scissors";
    gameWrapper();
});
