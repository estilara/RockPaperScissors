const btns = document.querySelectorAll("button");
const score = document.querySelector(".numbers");

function newComputerScore() {
    const computerScoreContainer = score.firstElementChild;
    if (computerScore++) {
        computerScoreContainer.textContent = computerScore;
    }
} 

function newPlayerScore() {
    const playerScoreContainer = score.lastElementChild;
    if (playerScore++) {
        playerScoreContainer.textContent = playerScore;
    }
    
} 


btns.forEach((button) => {
    button.addEventListener('click', () => {
        const optionName = button.querySelector("img");
        playerSelection = optionName.alt.toLowerCase();
        
        function computerPlay() {
            let options = ['rock', 'paper', 'scissors'];
            const randomSelection = options[Math.floor(Math.random() * options.length)];
            return randomSelection
        }; 
        
        computerSelection = computerPlay();
        playRound();
    });
});


function addResult() {
    const results = document.createElement("p");
    const container = document.querySelector(".resultsContainer")
    container.appendChild(results);
    return results
}

let playerScore = 0;
let computerScore = 0;

function displayResults(str) {
    addResult().textContent = str;
}

function playRound() {

    function youWon() {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    };
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        newPlayerScore()
        displayResults(youWon())
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        newPlayerScore()
        displayResults(youWon())
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        newPlayerScore()
        displayResults(youWon())
    } else if (playerSelection === computerSelection) {
        displayResults(`Tie! ${playerSelection} ties with ${computerSelection}`)
    } else {
        computerScore++
        newComputerScore()
        displayResults(`You lost! ${computerSelection} beats ${playerSelection}`)
    };

    if (playerScore++ || computerScore++) {

    }
}


/*function game() {
    for (let i = 0; i < 5 ; i++){
        playRound();

        if (playerScore > computerScore) {
            displayResults(`You won! Your score is ${playerScore}`)
        } else if (playerScore < computerScore) {
            displayResults(`You lost! Your score is ${playerScore}`)
        } else {
            displayResults(`Tie! Your score is ${playerScore}`)
        }
    }

    
}*/