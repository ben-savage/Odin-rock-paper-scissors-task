
const choices = ['rock', 'paper', 'scissors'];
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
// const drawStatement = 'you drew, try again!';
const loseRock = 'you lost, paper beats your rock';
const losePaper = 'you lost, scissors beats your paper';
const loseScissors = 'you lost, rock beats your scissors';
const winRock = 'Congratulations! You win, rock beats scissors';
const winPaper = 'Congratulations! You win, paper beats rock';
const winScissors = 'Congratulations! You win, scissors beats paper';
const drawRock = 'you both chose rock and drew! Try again';
const drawPaper = 'You both chose paper and drew! Try again';
const drawScissors = 'You both chose scissors and drew! Try again';

const input = document.querySelector('.playerInput');
const pageResponse = document.querySelector('.pageResponse');

// console.log(pageResponse);

function getComputerChoice(arr) {
    const computerNumber = Math.floor((Math.random() * arr.length));
    const computerSelection = arr[computerNumber];
    return computerSelection;
    }
 
    
 function comparison(cleanedPlayerSelection, computerSelection) {
 if (cleanedPlayerSelection == rock) while (computerSelection == rock) return drawRock;
 if (cleanedPlayerSelection == paper) while (computerSelection == paper) return drawPaper;
 if (cleanedPlayerSelection == scissors) while (computerSelection == scissors) return drawScissors;
 if (cleanedPlayerSelection == rock) while (computerSelection == paper) return winRock;
 if (cleanedPlayerSelection == paper) while (computerSelection == scissors) return losePaper;
 if (cleanedPlayerSelection == scissors) while (computerSelection == paper) return loseScissors;
 if (cleanedPlayerSelection == rock) while (computerSelection == scissors) return loseRock;
 if (cleanedPlayerSelection == paper) while (computerSelection == rock) return winPaper;
 if (cleanedPlayerSelection == scissors) while (computerSelection == paper) return winScissors;
 
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
        compares player input and computer input
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
        pageResponse.textContent =`${comparison(cleanedPlayerSelection, computerSelection)}`;
    }});

  
 
 // add a score keeper?
// go from 9 statememnts to three by combining them having one win, one loss, one draw 


