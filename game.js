const choices = ['Rock', 'Paper', 'Scissors'];
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
    displayChoice(humanChoice, computerChoice);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; 

    let resultMessage = document.createTextNode(`Both players chose ${humanChoice}. It's a tie this round. `);
    if (humanChoice === computerChoice) {
        resultDiv.appendChild(resultMessage);
    } else if (humanChoice === choices[0] && computerChoice === choices[2] ||
               humanChoice === choices[1] && computerChoice === choices[0] ||
               humanChoice === choices[2] && computerChoice === choices[1]) {
        humanScore++;
        resultMessage = document.createTextNode(`${humanChoice} beats ${computerChoice}. You win the round. `);
        resultDiv.appendChild(resultMessage);
    } else {
        computerScore++;
        resultMessage = document.createTextNode(`${computerChoice} beats ${humanChoice}. You lose the round. `);
        resultDiv.appendChild(resultMessage);
    }

    // Adding a line break
    resultDiv.appendChild(document.createElement('br'));

    roundsPlayed++;
    
    // Check if game should end
    if (roundsPlayed >= 5) {
        let scoreMessage = document.createTextNode(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
        resultDiv.appendChild(scoreMessage);
        displayFinalScore(resultDiv);
        resetGame();
    } else {
        // Append score message
        let scoreMessage = document.createTextNode(`Round ${roundsPlayed}/5 Score: Human ${humanScore} - Computer ${computerScore}`);
        resultDiv.appendChild(scoreMessage);
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

function displayChoice(playerChoice, computerChoice) {
    const playerDiv = document.getElementById('playerChoice');
    const computerDiv = document.getElementById('computerChoice');

    // Clear previous choices
    playerDiv.innerHTML = '';
    computerDiv.innerHTML = '';

    // Display player's choice
    const playerImage = document.createElement('img');
    playerImage.src = getImagePath(playerChoice);
    playerImage.alt = playerChoice;
    playerDiv.appendChild(playerImage);

    // Display computer's choice
    const computerImage = document.createElement('img');
    computerImage.src = getImagePath(computerChoice);
    computerImage.alt = computerChoice;
    computerDiv.appendChild(computerImage);
}

function getImagePath(choice) {
    switch(choice) {
        case 'Rock': return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3E_tf23oVS8wKfopnpRn4zfNSGx_YqyX53g&s';
        case 'Paper': return 'https://i.pinimg.com/736x/bf/35/42/bf35421dc71d47eaa6612b17108496bf.jpg';
        case 'Scissors': return 'https://www.funcarnival.com/cdn/shop/products/CAU11-015_18.jpg?v=1654893132';
        default: return ''; // Default case if something goes wrong
    }
}
