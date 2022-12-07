
const choices = ['rock', 'paper', 'scissors'];
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

//added 2 below variables as need a way to get computerSelection out of the function
// const cleanedPlayerSelection = '';
// const computerSelection = '';



// const loseRock = 'You lost, paper beats your rock.';
// const losePaper = 'You lost, scissors beats your paper.';
// const loseScissors = 'You lost, rock beats your scissors.';
// const winRock = 'Congratulations! You win, rock beats scissors.';
// const winPaper = 'Congratulations! You win, paper beats rock.';
// const winScissors = 'Congratulations! You win, scissors beats paper.';
// const drawRock = 'You both chose rock and drew! Try again.';
// const drawPaper = 'You both chose paper and drew! Try again.';
// const drawScissors = 'You both chose scissors and drew! Try again.';

const input = document.querySelector('.playerInput');
const pageResponse = document.querySelector('.pageResponse');


function getComputerChoice(arr) {
    const computerNumber = Math.floor((Math.random() * arr.length));
    const computerSelection = arr[computerNumber];
    return computerSelection;
    }
 
    
//  function playRound(cleanedPlayerSelection, computerSelection) {
//  if (cleanedPlayerSelection == rock) while (computerSelection == rock) return drawRock;
//  if (cleanedPlayerSelection == paper) while (computerSelection == paper) return drawPaper;
//  if (cleanedPlayerSelection == scissors) while (computerSelection == scissors) return drawScissors;
//  if (cleanedPlayerSelection == rock) while (computerSelection == paper) return winRock;
//  if (cleanedPlayerSelection == paper) while (computerSelection == scissors) return losePaper;
//  if (cleanedPlayerSelection == scissors) while (computerSelection == paper) return loseScissors;
//  if (cleanedPlayerSelection == rock) while (computerSelection == scissors) return loseRock;
//  if (cleanedPlayerSelection == paper) while (computerSelection == rock) return winPaper;
//  if (cleanedPlayerSelection == scissors) while (computerSelection == paper) return winScissors;
 // }

  function playRound(cleanedPlayerSelection, computerSelection) {
    // draw conditions
    if (cleanedPlayerSelection == computerSelection) return `Computer chose ${cleanedPlayerSelection}. \n You drew, try again!`;
    // lose conditions
    if ((cleanedPlayerSelection == rock & computerSelection == scissors) 
    || (cleanedPlayerSelection == paper & computerSelection == scissors) 
    || (cleanedPlayerSelection == scissors & computerSelection == paper)) return `Computer chose ${computerSelection}. \n You lost, ${computerSelection} beats ${cleanedPlayerSelection}`;
    // win conditions
    if ((cleanedPlayerSelection == rock & computerSelection == paper)
    || (cleanedPlayerSelection == paper & computerSelection == rock)
    || (cleanedPlayerSelection == scissors & computerSelection == paper)) return `Computer chose ${computerSelection}. \n congrats you won, ${cleanedPlayerSelection} beats ${computerSelection}`;
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
function game(win, lose) {
    playRound;
    if (playRound == win) return playerScore +'1';
    if (playRound == lose) return computerScore + '1';
}
// function to increase player score 1
// function to increase computer score 1
// call both functions from within playround
//function to compare scores if score = 5, game = over

    // for (let i = 0; i < 5; i++) {
    //    let i = playerScore;
    //    let i = computerScore
    //    game()
    //  }


 // add a score keeper?
// go from 9 statememnts to three by combining them having one win, one loss, one draw
// Issue with reducing is that string computerSelection and cleanedPlayerSelection are in the function and aren't listed externally


