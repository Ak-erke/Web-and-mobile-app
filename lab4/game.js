// Variables for dice images and result text
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const resultText = document.getElementById('result');
let rollCount = 0; // Counter

// Function to roll dice
function rollDice() {
    const dice1Roll = Math.floor(Math.random() * 6) + 1;
    const dice2Roll = Math.floor(Math.random() * 6) + 1;
    dice1.src = `img/dice${dice1Roll}.png`;
    dice2.src = `img/dice${dice2Roll}.png`;
    resultText.textContent = `You rolled a ${dice1Roll} and a ${dice2Roll}. Total: ${dice1Roll + dice2Roll}`;
    rollCount++;
    if (dice1Roll === dice2Roll) {
        resultText.textContent += " - You rolled doubles!";
    }
}

// Button click event
document.getElementById('rollButton').addEventListener('click', rollDice);

