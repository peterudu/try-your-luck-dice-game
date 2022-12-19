const displayArea = document.getElementById("display-area");
let displayText = document.getElementById("display-text");

const playerArea  = document.getElementById("player-area");
const playerImage = document.getElementById("pers-img");

const computerArea = document.getElementById("computer-area");
const computerImage = document.getElementById("computer-area");

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
    playerArea.innerHTML = `Player scored <br> ${playerDiceValue} points`;
    computerArea.innerHTML = `Computer scored <br> ${computerDiceValue} points`;
    
    let displayMessage;
    if (playerDiceValue > computerDiceValue) {
        displayMessage = "Player is winner"
    } else if (playerDiceValue < computerDiceValue) {
        displayMessage = "Computer wins"
    } else if (playerDiceValue === computerDiceValue) {
        displayMessage = "A draw"
    }
    console.log(displayMessage)
    // return displayMessage
    
};
rollDice();   
// const diceValues = rollDice();

// playerDiceValue = diceValues[0]
// computerDiceValue = diceValues[1]
// console.log(playerDiceValue);
// console.log(computerDiceValue);
// console.log(computerDiceValue);


// function displayResult(rollDice) {
//     rollDice
//     let displayMessage;
//     if (playerDiceValue > computerDiceValue) {
//         displayMessage = "Player is winner"
//     } else if (playerDiceValue < computerDiceValue) {
//         displayMessage = "Computer wins"
//     } else if (playerDiceValue === computerDiceValue) {
//         displayMessage = "A draw"
//     }
//     return displayMessage
// }
// let displayMessage = displayResult()
// console.log(displayMessage);
// function showDiceImage() {

// }

// function incrementScore() {

// }

// function runGame() {
    
// }

// let diceValueOne = <i class="fa-regular fa-dice-one"></i>
// let diceValueTwo = <i class="fa-regular fa-dice-two"></i>
// let diceValueThree = <i class="fa-regular fa-dice-three"></i>
// let diceValueFour = <i class="fa-regular fa-dice-four"></i>
// let diceValueFive = <i class="fa-regular fa-dice-five"></i>