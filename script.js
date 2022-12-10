let playerSelection;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

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
        document.querySelector('#roundStatus').innerText = 'Draw';
    }
    else if((computerSelection == 'rock' && playerSelection == 'scissors') || 
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper')){
        document.querySelector('#roundStatus').innerText = 'You lose';
        computerScore++;
    }
    else{
        document.querySelector('#roundStatus').innerText = 'You win';
        playerScore++;
    }

    updateScore();
    checkForWinner();
}

function updateScore(){
    document.querySelector('#playerScore').innerText = playerScore;
    document.querySelector('#computerScore').innerText = computerScore;
}

function checkForWinner(){
    if(computerScore == 5 || playerScore == 5){
        if(computerScore > playerScore){
            document.querySelector('#result').innerText = 'GAME OVER! YOU LOST!';
        } else{
            document.querySelector('#result').innerText = 'CONGRATULATIONS! YOU WON!';
        }
        document.querySelector('#rock').setAttribute('disabled', 'disabled');
        document.querySelector('#paper').setAttribute('disabled', 'disabled');
        document.querySelector('#scissors').setAttribute('disabled', 'disabled');

        document.querySelector('#playAgain').style.display = 'block';
    }
}

document.querySelector('#playAgain').addEventListener('click', startNewGame);

function startNewGame(){
    document.querySelector('#playAgain').style.display = 'none';
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    computerScore = 0;
    playerScore = 0;
    document.querySelector('#result').innerText = '';
    document.querySelector('#roundStatus').innerText = '';
}