function getComputerChoice(){
    let randNum = Math.random();
    let computerChoice;
    if(randNum >= 0.6666){
       computerChoice = 'Rock';
    }
    else if(randNum < 0.6666 || randNum >= 0.3333){
        computerChoice = 'Paper';
    }
    else{
        computerChoice = 'Scissors'
    }
    console.log(randNum);
    return computerChoice;
}

console.log(getComputerChoice());