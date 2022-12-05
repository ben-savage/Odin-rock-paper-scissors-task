
const choices = ['rock', 'paper', 'scissors']

const pageResponse = document.querySelector('.pageResponse')

function getComputerChoice(arr) {
    const computerNumber = Math.floor((Math.random() * arr.length));
    const computerSelection = arr[computerNumber];
    return computerSelection;
    }
 
 function comparison(playerSelection, computerSelection) {
 if (playerSelection == computerSelection) return drawStatement;
 if (playerSelection == rock) while (computerSelection = paper) return loseRock;
 if (playerSelection == paper) while (computerSelection = scissors) return losePaper;
 if (playerSelection == scissors) while (computerSelection = paper) return loseScissors;
 if (playerSelection == rock) while (computerSelection = scissors) return winRock;
 if (playerSelection == paper) while (computerSelection = rock) return winPaper;
 if (playerSelection == scissors) while (computerSelection = paper) return winScissors;
 // may need three draw statements. consider other way to write out so every permutation doesn't need a line of code
 }
 function playerSelection (input) {
    return input.toLowerCase();
    // if null return bad
 }


 pageResponse.textContent = ' test ${comparison(playerSelection, computerSelection)} !'

 // add null to playerSelection
 // going to need to reset computer response on each round of choices
 // add a score keeper?

//   playerSelection
//   computerSelection
//   input

//pageResponse



