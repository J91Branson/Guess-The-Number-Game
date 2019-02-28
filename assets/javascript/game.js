var numberToGuess = Math.floor(Math.random()*120) + 19;
var wins = 0
var losses = 0
var numberToGuessText = document.getElementById("number-to-guess-text")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
// Number To Guess gets shown from this:
numberToGuessText.textContent= "Number To Guess: " + numberToGuess;
// Wins:
winsText.textContent= "Wins: " + wins;
// Losses:
lossesText.textContent= "Losses: " + losses;


