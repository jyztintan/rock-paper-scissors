const choices = ['rock', 'paper', 'scissors'];
humanScore = computerScore = 0;
roundsPlayed = 0;

function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * 3);
    var choice = choices[randomIndex];
    console.log("Computer chose: " + choice);
    return choice
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; 

    let resultMessage = document.createTextNode(`Both players chose ${humanChoice}. It's a tie! `);
    if (humanChoice === computerChoice) {
        resultDiv.appendChild(resultMessage);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
               humanChoice === 'paper' && computerChoice === 'rock' ||
               humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        resultMessage = document.createTextNode(`${humanChoice} beats ${computerChoice}. You win! :) `);
        resultDiv.appendChild(resultMessage);
    } else {
        computerScore++;
        resultMessage = document.createTextNode(`${computerChoice} beats ${humanChoice}. You lose! :( `);
        resultDiv.appendChild(resultMessage);
    }

    // Adding a line break
    resultDiv.appendChild(document.createElement('br'));

    roundsPlayed++;
    // Append score message
    let scoreMessage = document.createTextNode(`Round ${roundsPlayed} Score: Human ${humanScore} - Computer ${computerScore}`);
    resultDiv.appendChild(scoreMessage);

    // Check if game should end
    if (roundsPlayed >= 5) {
        displayFinalScore(resultDiv);
        resetGame();
    }
}


function displayFinalScore(resultDiv) {
    let finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage = "You Win the Game! :)";
    } else if (humanScore < computerScore) {
        finalMessage = "You Lose the Game! :(";
    } else {
        finalMessage = "The Game is a Tie!";
    }
    resultDiv.appendChild(document.createElement('br'));
    let finalNote = document.createTextNode(finalMessage);
    resultDiv.appendChild(finalNote);
}

function resetGame() {
    humanScore = computerScore = 0;
    roundsPlayed = 0;
}