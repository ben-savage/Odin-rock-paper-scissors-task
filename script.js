
const choices = ['rock', 'paper', 'scissors'];
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

var playerScore = 0;
var computerScore = 0;

//FORADDINGBUTTONS
// Add reference to buttons on playerSelection
//change addEventListener from enter key to button press of R, P or S
//Put formatting on whole page


const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
// const input = document.querySelector('.playerInput');
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
    if ((cleanedPlayerSelection == rock & computerSelection == paper) 
    || (cleanedPlayerSelection == paper & computerSelection == scissors) 
    || (cleanedPlayerSelection == scissors & computerSelection == rock)) {
        addComputerScore();
        return `Computer chose ${computerSelection}. \n You lost, ${computerSelection} beats ${cleanedPlayerSelection}`
    }
    // win conditions
    if ((cleanedPlayerSelection == rock & computerSelection == scissors)
    || (cleanedPlayerSelection == paper & computerSelection == rock)
    || (cleanedPlayerSelection == scissors & computerSelection == paper)) {
        addPlayerScore();
        return `Computer chose ${computerSelection}. \n Congratulations you won, ${cleanedPlayerSelection} beats ${computerSelection}`;
    }
    }
    // makes player input to lower case, used in input bar when no buttons
//  function cleanPlayerSelection(input) {
//     return input.toLowerCase();
// }

//new addEventListener for R, P, S
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerSelection) {
    /*
    1. Takes user input of rock paper or scissors based on button pressed
    2. gets computer selection
    3. call playRound
    */
    cleanedPlayerSelection = playerSelection
    let computerSelection = getComputerChoice(choices);
    pageResponse.textContent =`${playRound(cleanedPlayerSelection, computerSelection)}`;
    }

// input.addEventListener('click', (event) => {
//     /*
//         event listener for keypress
//         exits early if function key does not equal click
//         makes player input to lowercase
//         if input isn't valid outputs error
//         else input is valid proceed
//         plays round comparing player input and computer input
//         outputs winner by updating pageResponse
//     */
//     if (event.code != 'click') {
//         return null;
//     } ;
//     let playerSelection = event.target.value; // edit event.target.value
//     // let cleanedPlayerSelection = cleanPlayerSelection(playerSelection);
    
//     // if statement now not needed
//     // if (!choices.includes(cleanedPlayerSelection)) {
//     //     pageResponse.textContent = 'incorrect input, please use rock paper or scissors';
//     // }
//         let computerSelection = getComputerChoice(choices);
//         handleClick(playerSelection);
//         pageResponse.textContent =`${playRound(cleanedPlayerSelection, computerSelection)}`;
//     });
 //adds on increment of playerScore




function addPlayerScore () {
playerScore = ++playerScore;
scoreArray = winner(playerScore, computerScore)
playerScore = scoreArray[0];
computerScore = scoreArray[1];
player.textContent = `player score is ${playerScore}`;
computer.textContent = `Computer score is ${computerScore}`;
}paper

function addComputerScore () {
computerScore = ++computerScore ;
scoreArray = winner(playerScore, computerScore)
playerScore = scoreArray[0];
computerScore = scoreArray[1];
computer.textContent = `Computer score is ${computerScore}`;
player.textContent = `player score is ${playerScore}`;
}

function winner(playerScore, computerScore) {
    // if(playerScore < 5 || computerScore < 5) {
    if (playerScore === 5) {
     alert ('player wins!');
     playerScore = 0;
     computerScore = 0;
     return [playerScore, computerScore]
     }
    if (computerScore === 5) {
     alert ('computer wins!');
     playerScore = 0;
     computerScore = 0;
     return [playerScore, computerScore]
     };
     return [playerScore, computerScore]
    // else if }
    }


// function to increase player score 1 DONE
// function to increase computer score 1 DONE
// call both functions from within playround DONE
// function to compare scores if score = 5, game = DONE
// function to reset the score to 0 on win/lose
// resets on back end DONE
// need to reset the function to update on the front end as well
// need to parse the new computerScore to outside the function