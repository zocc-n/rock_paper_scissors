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


function getPlayerChoice(){
    let playerChoice = prompt('Rock, paper or scissors?').toLowerCase();
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        console.log('Plyer choice: ' + playerChoice);
        return playerChoice;    
    }else{
        console.log('Invalid input.');
        getPlayerChoice();
    }
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


function game(){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection);
}


game();