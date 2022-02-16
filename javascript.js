const btns = document.querySelectorAll("button");

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

//need to make a function to keep creating <p> when button is clicked
function addScore() {
    const results = document.createElement("p");
    const container = document.querySelector(".resultsContainer")
    container.appendChild(results);
    return results
}

const scoreDisplay = addScore();

let playerScore = 0;
let computerScore = 0;

function displayResults(str) {
    scoreDisplay.textContent = str;
}

function playRound() {

    function youWon() {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    };

    
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        displayResults(youWon())
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        displayResults(youWon())
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        displayResults(youWon())
    } else if (playerSelection === computerSelection) {
        displayResults(`Tie! ${playerSelection} ties with ${computerSelection}`)
    } else {
        computerScore++
        displayResults(`You lost! ${computerSelection} beats ${playerSelection}`)
    };
}



/*function game() {
    for (let i = 0; i < 5 ; i++){
        playRound()
    }

    if (playerScore > computerScore) {
        displayResults(`You won! Your score is ${playerScore}`)
    } else if (playerScore < computerScore) {
        displayResults(`You lost! Your score is ${playerScore}`)
    } else {
        displayResults(`Tie! Your score is ${playerScore}`)
    }
}*/