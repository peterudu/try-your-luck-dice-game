let displayText = document.getElementById("display-text");
const playerArea  = document.getElementById("player-area");
const computerArea = document.getElementById("computer-area");
const gameButton = document.getElementById("roll-dice");
gameButton.addEventListener("click", function (){
    rollDice();
});

function rollDice() {
    // create dice values for player and computer
    let playerDice = Math.floor(Math.random() * 6) + 1;
    let computerDice = Math.floor(Math.random() * 6) + 1;
    let diceValues = [playerDice, computerDice];
    playerDiceValue = diceValues[0];
    computerDiceValue = diceValues[1]
    playerArea.innerHTML = `Player scored <br> ${playerDiceValue} points`;
    computerArea.innerHTML = `Computer scored <br> ${computerDiceValue} points`;
    
    // display winner of dice roll 
    let displayMessage;
    if (playerDiceValue > computerDiceValue) {
        displayMessage = "Player is winner"
    } else if (playerDiceValue < computerDiceValue) {
        displayMessage = "Computer wins"
    } else if (playerDiceValue === computerDiceValue) {
        displayMessage = "A draw"
    }
    displayText.innerHTML = displayMessage;
}; 
