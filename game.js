const choices = ['rock', 'paper', 'scissors'];
humanScore = computerScore = 0;
roundsPlayed = 0;

function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * 3);
    var choice = choices[randomIndex];
    console.log("Computer chose: " + choice);
    return choice
}


function getHumanChoice() {
    var choice = prompt("Please choose rock, paper, or scissors.");
    choice = choice.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];

    while (!validChoices.includes(choice)) {
        choice = prompt(`${choice} is not a valid choice. Please choose rock, paper, or scissors`);
    }
    console.log("Human chose: " + choice);
    return choice;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');
    let resultMessage;
    // If both are the same inputs, it is a tie
    if (humanChoice === computerChoice) {
        console.log("Tie");
        resultMessage = `Both players chose ${humanChoice}. It's a tie! <br>`;
    // If human wins, increment human score
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log("Win");
        resultMessage = `${humanChoice} beats ${computerChoice}. You win! :) <br>`;
    // Otherwise computer wins, increment computer score
    } else {
        computerScore++;
        console.log("Lose");
        resultMessage = `${computerChoice} beats ${humanChoice}. You lose! :( <br>`;
    }
    roundsPlayed++;
    resultMessage += `Round ${roundsPlayed} Score: Human ${humanScore} - Computer ${computerScore}`;
    resultDiv.innerHTML = resultMessage;
    if (roundsPlayed >= 5) {
        displayFinalScore();
        resetGame();
    }
}

function displayFinalScore() {
    const resultDiv = document.getElementById('result');
    let finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage += "You Win the Game! :)";
    } else if (humanScore < computerScore) {
        finalMessage += "You Lose the Game! :(";
    } else {
        finalMessage += "The Game is a Tie!";
    }
    finalMessage += `<br> Final Score - Human: ${humanScore}, Computer: ${computerScore}.`
    resultDiv.innerHTML = finalMessage;
    
}

function resetGame() {
    humanScore = computerScore = 0;
    roundsPlayed = 0;
}