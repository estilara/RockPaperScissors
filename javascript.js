let playerScore = 0;
let computerScore = 0;

function playRound() {
    function computerPlay() {
        let options = ['rock', 'paper', 'scissors'];
        const randomSelection = options[Math.floor(Math.random() * options.length)];
        return randomSelection
    }; 
    
    function playerPlay() {
        let playerChoice = prompt("Choose one: Rock, Paper, Scissors")
        return playerChoice.toLowerCase()
    };
    
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    

    function youWon() {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    };
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return youWon()
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return youWon()
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return youWon()
    } else if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} ties with ${computerSelection}`
    } else {
        computerScore++
        return `You lost! ${computerSelection} beats ${playerSelection}`
    };
}

function game() {
    for (let i = 0; i < 5 ; i++){
        console.log(playRound())
    }

    if (playerScore > computerScore) {
        console.log(`You won! Your score is ${playerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You lost! Your score is ${playerScore}`)
    } else {
        console.log(`Tie! Your score is ${playerScore}`)
    }
}

game();

