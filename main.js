function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = getComputerChoice();
const playerSelection = prompt('Please choose between "Rock", "Paper" or "Scissors"').toLowerCase();

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
    computerSelection;
    playerSelection;
    playRound(playerSelection, computerSelection);

    computerSelection;
    playerSelection;
    playRound(playerSelection, computerSelection);

    computerSelection;
    playerSelection;
    playRound(playerSelection, computerSelection);

    computerSelection;
    playerSelection;
    playRound(playerSelection, computerSelection);

    computerSelection;
    playerSelection;
    playRound(playerSelection, computerSelection);
    
}
game();
console.log(`PLAYER: ${playerSelection}`);
console.log(`COMPUTER: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

