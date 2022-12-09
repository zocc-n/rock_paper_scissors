function getComputerChoice(){
    let randNum = Math.random();
    let computerChoice;
    if(randNum >= 0.6666){
       computerChoice = 'rock';
    }
    else if(randNum < 0.6666 || randNum >= 0.3333){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissors'
    }
    console.log(randNum);
    return computerChoice;
}


function getPlayerChoice(){
    let playerChoice = prompt('Rock, paper or scissors?').toLowerCase();
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        console.log(playerChoice);
        return playerChoice;    
    }else{
        console.log('Invalid input.')
        getPlayerChoice();
    }
}

getPlayerChoice();