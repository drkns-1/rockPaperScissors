

let cpuScore = 0; 
let userScore = 0; 

function rockPaperScissors(){

// Computer makes their choice 
let options = ['rock', 'paper', 'scissors']; 
let computerChoice = options[Math.floor(Math.random()*options.length)];

// Prompts Player to enter value
let playerInput = prompt('Rock, paper, scissors?');

// Converts value to lower case 
let playerChoice = playerInput.toLowerCase(); 

function game(){
    if (playerChoice === computerChoice){
        (console.log("It's a tie, play again!"));
    }
    else if ((playerChoice === 'rock') && (computerChoice === 'scissors')){
        userScore++; 
        (console.log('You win!'));
    }
    else if ((playerChoice === 'scissors') && (computerChoice === 'paper')){
        userScore++; 
        (console.log('You win!'));
    }
    else if ((playerChoice === 'paper') && (computerChoice === 'rock')){
        userScore++; 
        (console.log('You win!'));
    }
    else{
        (console.log('You lose!')); 
        cpuScore++; 
    }    
}


if (playerChoice === 'rock') {
    game()
}
else if (playerChoice === 'paper'){
    game(); 
}
else if (playerChoice === 'scissors'){
    game(); 
}
else {
console.log('Wrong input, please try again!') 
}




console.log("Computer Score:", cpuScore);
console.log("User Score:", userScore);
console.log('Your choice:', playerChoice); 
console.log('Computer choice:', computerChoice);
console.log('----------------end of round----------------'); 

}

for (let i = 0; i < 5; i++){
    rockPaperScissors();
}