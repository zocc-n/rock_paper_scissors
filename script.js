let playerSelection;
let computerChoice;

function getComputerChoice(){
    let randNum = Math.random();
    let computerChoice;
    if(randNum >= 0.6666){
       computerChoice = 'rock';
    }
    else if(randNum < 0.6666 && randNum >= 0.3333){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissors'
    }
    console.log(randNum);
    console.log('Computer choice: ' + computerChoice);
    return computerChoice;
}

document.querySelector('#rock').addEventListener('click', playRock);
document.querySelector('#paper').addEventListener('click', playPaper);
document.querySelector('#scissors').addEventListener('click', playScissors);

function playRock(){
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}

function playPaper(){
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}

function playScissors(){
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}


function playRound(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        console.log('Draw');
    }
    else if((computerSelection == 'rock' && playerSelection == 'scissors') || 
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')){
        console.log('You lose');
    }
    else{
        console.log('You win');
    }
}
