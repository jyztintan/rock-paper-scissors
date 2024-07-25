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
    let imagePath = "";

    if (humanScore > computerScore) {
        finalMessage = "You Win the Game! :)";
        imagePath = "https://media3.giphy.com/media/uRAhwxlVBP6ied6EgB/200w.gif?cid=6c09b95237yr5gjcc9perey3ez0lwyeagsm1kd2yek08kupu&ep=v1_gifs_search&rid=200w.gif&ct=g";
    } else if (humanScore < computerScore) {
        finalMessage = "You Lose the Game! :(";
        imagePath = "https://i.gifer.com/RT5l.gif";
    } else {
        finalMessage = "The Game is a Tie!";
        imagePath = "https://media.tenor.com/46S_6vqUkNUAAAAM/fixing-tie.gif";
    }
    resultDiv.appendChild(document.createElement('br'));
    let finalNote = document.createTextNode(finalMessage);
    resultDiv.appendChild(finalNote);

    resultDiv.appendChild(document.createElement('br'));
    let resultImage = document.createElement('img');
    resultImage.className = 'result-image';
    resultImage.src = imagePath;
    resultImage.alt = "Game Result"; 
    resultDiv.appendChild(resultImage);
}

function resetGame() {
    humanScore = computerScore = 0;
    roundsPlayed = 0;
}