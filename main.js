function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = getComputerChoice();
let playerSelection = prompt('Please choose between "Rock", "Paper" or "Scissors"').toLowerCase();

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Nice! You tied";
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return `You Lose! paper beats rock`;
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return `You Lose! scissors beats paper`;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return `You Lose! rock beats scissors`;
    }
    else{
        return "CONGRATULATIONS! You win";
    }
}

function game(){
    for (i = 1; i <= 4; i++){
    getComputerChoice();
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Please choose between "Rock", "Paper" or "Scissors"').toLowerCase();
    playRound(playerSelection, computerSelection);

    console.log(`PLAYER: ${playerSelection}`);
    console.log(`COMPUTER: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    }

}
console.log(`PLAYER: ${playerSelection}`);
console.log(`COMPUTER: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
game();

