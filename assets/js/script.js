const displayArea = document.getElementById("display-result")
let displayContent = displayArea.innerHTML;

const playerArea  = document.getElementById("player-area")
const playerImage = document.getElementById("pers-img")

const computerArea = document.getElementById("computer-area")
const computerImage = document.getElementById("computer-area")

const gameButton = document.getElementById("roll-dice");
gameButton.addEventListener("click", function (){
    rollDice();
});



// first finish loading the DOM before running the game
// document.addEventListener("DOMContentLoaded", rollDice) {
//     let startButton = document.getElementsByTagName("button");
// }

// function rollDice(number) {
//     let rolledDiceValue = Math.floor(Math.random() * number) + 1;
//     return rolledDiceValue
// };

function rollDice() {
    // create dice values for player and computer
    let playerDice = Math.floor(Math.random() * 6) + 1;
    let computerDice = Math.floor(Math.random() * 6) + 1;
    let diceValues = [playerDice, computerDice];
    playerDiceValue = diceValues[0];
    computerDiceValue = diceValues[1]
    console.log(playerDiceValue)
    console.log(computerDiceValue)
    return diceValues
};
// rollDice();
// let diceValues = rollDice();
// playerDiceValue = diceValues[0]
// computerDiceValue = diceValues[1]
// console.log(playerDiceValue);
// console.log(computerDiceValue);
// console.log(computerDiceValue);


// function displayResult() {

// }

// function showDiceImage() {

// }

// function incrementScore() {

// }

// function runGame() {
    
// }