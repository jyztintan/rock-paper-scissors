const choices = ['rock', 'paper', 'scissors'];
humanScore = computerScore = 0;

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
    var computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');
    // If both are the same inputs, it is a tie
    if (humanChoice === computerChoice) {
        console.log(`Both players chose ${humanChoice}. It's a tie!`);
        resultMessage = `Both players chose ${humanChoice}. It's a tie!`;
    // If human wins, increment human score
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`${humanChoice} beats ${computerChoice}. You Win! :)`);
        humanScore++;
        resultMessage = `${humanChoice} beats ${computerChoice}. You win! :)`;
    // Otherwise computer wins, increment computer score
    } else {
        console.log(`${computerChoice} beats ${humanChoice}. You Lose! :(`);
        computerScore++;
        resultMessage = `${computerChoice} beats ${humanChoice}. You lose! :(`;
    }
    resultMessage += ` Score: Human ${humanScore} - Computer ${computerScore}`;
    //resultDiv.innerHTML = resultMessage;
}

function playGame() {
    humanScore = computerScore = 0;
    for (var i = 0; i < 5; i++) {
        var humanChoice = getHumanChoice();
        playRound(humanChoice);
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    console.log(`Final Score: Human: ${humanScore} Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You Win! :)");
    } else if (humanScore < computerScore) {
        console.log("You Lose! :(");
    } else {
        console.log("It's a tie!");
    }
}