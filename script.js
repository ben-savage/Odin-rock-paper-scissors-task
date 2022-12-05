
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

console.log(pageResponse);

function getComputerChoice(arr) {
    const computerNumber = Math.floor((Math.random() * arr.length));
    const computerSelection = arr[computerNumber];
    return computerSelection;
    }
 
    
 function comparison(cleanedPlayerSelection, computerSelection) {
//  if (cleanedPlayerSelection = computerSelection) return drawStatement;
 if (cleanedPlayerSelection == rock) while (computerSelection == rock) return drawRock;
 if (cleanedPlayerSelection == paper) while (computerSelection == paper) return drawPaper;
 if (cleanedPlayerSelection == scissors) while (computerSelection == scissors) return drawScissors;
 if (cleanedPlayerSelection == rock) while (computerSelection == paper) return winRock;
 if (cleanedPlayerSelection == paper) while (computerSelection == scissors) return losePaper;
 if (cleanedPlayerSelection == scissors) while (computerSelection == paper) return loseScissors;
 if (cleanedPlayerSelection == rock) while (computerSelection == scissors) return loseRock;
 if (cleanedPlayerSelection == paper) while (computerSelection == rock) return winPaper;
 if (cleanedPlayerSelection == scissors) while (computerSelection == paper) return winScissors;
 // may need three draw statements. consider other way to write out so every permutation doesn't need a line of code
 }

 function cleanPlayerSelection(input) {
    return input.toLowerCase();
    // if null return bad
 }

//  input.addEventListener
//  const response = document.querySelector('.input');

input.addEventListener('change', (event) => {
    let playerSelection = event.target.value;
    let cleanedPlayerSelection = cleanPlayerSelection(playerSelection);
    console.log(pageResponse);
    //other answer for playerSelection to be 3 strings of accepted answers?
    
    if (choices.includes(cleanedPlayerSelection)) {
        let computerSelection = getComputerChoice(choices);
        let cleanedPlayerSelection = cleanPlayerSelection(playerSelection);
        console.log('4' + computerSelection);
        pageResponse.textContent =`${comparison(cleanedPlayerSelection, computerSelection)}`;
        console.log('5' + pageResponse);
        console.log('6' + comparison(cleanedPlayerSelection, computerSelection));
    }
    else {
        pageResponse.textContent = 'incorrect input, please use rock paper or scissors';
    }});
 // pageResponse.textContent = 'test ${comparison(playerSelection, computerSelection)} !'
 
 // add null to playerSelection
 // going to need to reset computer response on each round of choices (add query selector)
 // add a score keeper?

//   playerSelection
//   computerSelection
//   input
//pageResponse




// needs updating to the response.


