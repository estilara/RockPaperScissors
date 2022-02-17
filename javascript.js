const btns = document.querySelectorAll("button");
const score = document.querySelector(".numbers");

let playerScore = 0;
let computerScore = 0;

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
        game();
    });
});


const container = document.querySelector(".resultsContainer")

function addResult() {
    const results = document.createElement("p");
    container.appendChild(results);
    return results
}


function displayResults(str) {
    addResult().textContent = str;
}

function displayBoldResults(str) {
    addResult().textContent = str;
    let lastChild = container.lastChild;
    lastChild.style.fontWeight = '700';
}

function playRound() {

    function youWon() {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    };
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        newPlayerScore();
        displayResults(youWon());
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        ++playerScore;
        newPlayerScore();
        displayResults(youWon());
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        newPlayerScore();
        displayResults(youWon());
    } else if (playerSelection === computerSelection) {
        displayResults(`Tie! ${playerSelection} ties with ${computerSelection}`)
    } else {
        ++computerScore
        newComputerScore();
        displayResults(`You lost! ${computerSelection} beats ${playerSelection}`)
    };

}


function game() {
    if (playerScore == 6 || computerScore == 6) {
        if (playerScore > computerScore) {
            displayBoldResults(`You won the game! Your score is ${playerScore}`)
        } else if (playerScore < computerScore) {
            displayBoldResults(`You lost the game! Your score is ${playerScore}`)
        } else {
            displayBoldResults(`It's a Tie! Your score is ${playerScore}`)
        }
    }
}