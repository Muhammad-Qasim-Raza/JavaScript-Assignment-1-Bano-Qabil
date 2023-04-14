// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var guessNumber = +(prompt("Guess a number between 1 and 10"));

// Check if the guess number is correct
if (guessNumber === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guessNumber > secretNumber) {
  alert("Number is greater than secret number.");
} else {
  alert("Number is less than secret number.");
}