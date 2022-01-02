const userSelection = document.querySelectorAll('[data-selection]'); 

let cpuScore = 1; 
let userScore = 1;
let roundCounter = 1;


userSelection.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})


function cpuSelection() {
    let options = ['rock', 'paper', 'scissors']; 
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice; 
    
}

function makeSelection(selection) {

    const cpuChoice = cpuSelection();
    userOutcome.style.opacity = '100%';

    if (selection === cpuChoice) {
        console.log("It's a tie!");
        document.getElementById("userOutcome").innerText = selection;
        document.getElementById("cpuOutcome").innerText = cpuChoice;
        document.getElementById("roundCount").innerText = roundCounter;
        userOutcome.style.opacity = '50%';
        cpuOutcome.style.opacity = '50%';
        roundCounter++;
        
    } else if ((selection === 'rock') && (cpuChoice === 'scissors')){
        console.log('You win!');
        document.getElementById("userPoints").innerHTML = userScore;
        document.getElementById("userOutcome").innerText = selection;
        document.getElementById("cpuOutcome").innerText = cpuChoice;
        document.getElementById("roundCount").innerText = roundCounter;
        cpuOutcome.style.opacity = '50%';
        userScore++;
        roundCounter++;

    } else if ((selection === 'paper') && (cpuChoice === 'rock')){
        console.log('You win!');
        document.getElementById("userPoints").innerHTML = userScore;
        document.getElementById("userOutcome").innerText = selection;
        document.getElementById("cpuOutcome").innerText = cpuChoice;
        document.getElementById("roundCount").innerText = roundCounter;
        cpuOutcome.style.opacity = '50%';
        userScore++;
        roundCounter++;

    } else if ((selection === 'scissors') && (cpuChoice === 'paper')){
        console.log('You win!');
        document.getElementById("userPoints").innerHTML = userScore;
        document.getElementById("userOutcome").innerText = selection;
        document.getElementById("cpuOutcome").innerText = cpuChoice;
        document.getElementById("roundCount").innerText = roundCounter;
        cpuOutcome.style.opacity = '50%';
        userScore++;
        roundCounter++;

    } else {
        console.log('You lose!');
        document.getElementById("cpuPoints").innerHTML = cpuScore;
        document.getElementById("userOutcome").innerText = selection;
        document.getElementById("cpuOutcome").innerText = cpuChoice;
        document.getElementById("roundCount").innerText = roundCounter;
        userOutcome.style.opacity = '50%';
        cpuOutcome.style.opacity = '100%'; 
        cpuScore ++;
        roundCounter++;

    }

}

