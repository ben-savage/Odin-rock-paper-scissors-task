
const choices = ['rock', 'paper', 'scissors'];
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

var playerScore = 0;
var computerScore = 0;

const input = document.querySelector('.playerInput');
const pageResponse = document.querySelector('.pageResponse');
const player = document.querySelector('.players');
const computer = document.querySelector('.computers')
const endGame = document.querySelector('.endGame')

player.textContent = `player score is ${playerScore}`;
computer.textContent = `Computer score is ${computerScore}`;


function getComputerChoice(arr) {
    const computerNumber = Math.floor((Math.random() * arr.length));
    const computerSelection = arr[computerNumber];
    return computerSelection;
    }
 
  function playRound(cleanedPlayerSelection, computerSelection) {
    // draw conditions
    if (cleanedPlayerSelection == computerSelection) return `Computer chose ${cleanedPlayerSelection}. \n You drew, try again!`;
    // lose conditions
    if ((cleanedPlayerSelection == rock & computerSelection == scissors) 
    || (cleanedPlayerSelection == paper & computerSelection == scissors) 
    || (cleanedPlayerSelection == scissors & computerSelection == paper)) {
        addComputerScore();
        return `Computer chose ${computerSelection}. \n You lost, ${computerSelection} beats ${cleanedPlayerSelection}`
    }
     
    // win conditions
    if ((cleanedPlayerSelection == rock & computerSelection == paper)
    || (cleanedPlayerSelection == paper & computerSelection == rock)
    || (cleanedPlayerSelection == scissors & computerSelection == paper)) {
        addPlayerScore();
        return `Computer chose ${computerSelection}. \n Congratulations you won, ${cleanedPlayerSelection} beats ${computerSelection}`;
    }
    }

 function cleanPlayerSelection(input) {
    return input.toLowerCase();
  
 }


input.addEventListener('keypress', (event) => {
    /*
        event listener for keypress
        exits early if function key does not equal enter
        makes player input to lowercase
        if input isn't valid outputs error
        else input is valid proceed
        plays round comparing player input and computer input
        outputs winner by updating pageResponse
    */
    if (event.code != 'Enter') {
        return null;
    } ;
    
    
    let playerSelection = event.target.value;
    let cleanedPlayerSelection = cleanPlayerSelection(playerSelection);
    
    
    
    if (!choices.includes(cleanedPlayerSelection)) {
        pageResponse.textContent = 'incorrect input, please use rock paper or scissors';
    }
    else {
        let computerSelection = getComputerChoice(choices);
        let cleanedPlayerSelection = cleanPlayerSelection(playerSelection);
        pageResponse.textContent =`${playRound(cleanedPlayerSelection, computerSelection)}`;
    }});
 
    //function just added needs writing properly
// function game(win, lose) {
//     playRound;
//     if (playRound == win) return playerScore +'1';
//     if (playRound == lose) return computerScore + '1';
// }

function addPlayerScore () {
playerScore = ++playerScore;
player.textContent = `player score is ${playerScore}`;
winner(playerScore, computerScore)
}

function addComputerScore () {
computerScore = ++computerScore ;
computer.textContent = `Computer score is ${computerScore}`;
winner(playerScore, computerScore)
}

function winner(playerScore, computerScore) {
    if (playerScore == 5) {alert ('player wins!');
    var playerScore = 0;
    var computerScore = 0};
    if (computerScore == 5) {
    alert ('computer wins!');
    var playerScore = 0;
    var computerScore = 0;
};
}


// function to increase player score 1 DONE
// function to increase computer score 1 DONE
// call both functions from within playround DONE
//function to compare scores if score = 5, game = over TO DO