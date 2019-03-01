var numberToGuess = Math.floor(Math.random()*120) + 19;
var wins = 0;
var losses = 0;
var numberToGuessText = $("#number-to-guess-text");
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var currentPoints = 0;
var currentPointsText = $("#current-points-text");
var buttonValue1 = $("#button1");
var buttonValue2 = $("#button2");
var buttonValue3 = $("#button3");
var buttonValue4 = $("#button4");
reset();
console.log(numberToGuess);
// Number To Guess gets shown from this:
numberToGuessText.text("Number To Guess: " + numberToGuess);
// Wins:
winsText.text("Wins: " + wins);
// Losses:
lossesText.text("Losses: " + losses);
// Random number assigned to buttons each time:
function reset() {
    numberToGuess = Math.floor(Math.random()*120) + 19;
    numberToGuessText.text("Number To Guess: " + numberToGuess);
    currentPointsText.text("Current Points: " + currentPoints);
    currentPoints = 0;
    winsText.text("Wins: " + wins);
    lossesText.text("Losses: " + losses);
    buttonNumber1 = Math.floor(Math.random()*12) + 1;
    buttonNumber2 = Math.floor(Math.random()*12) + 1;
    buttonNumber3 = Math.floor(Math.random()*12) + 1;
    buttonNumber4 = Math.floor(Math.random()*12) + 1;
    buttonValue1.attr ("data-buttonPoints", buttonNumber1);
    buttonValue2.attr ("data-buttonPoints", buttonNumber2);
    buttonValue3.attr ("data-buttonPoints", buttonNumber3);
    buttonValue4.attr ("data-buttonPoints", buttonNumber4);
};
    
$("#button1").on("click", function () {
    currentPoints += buttonNumber1;
    winLose();
    $("#current-points-text").text("Current Points: " + currentPoints);
});


function winLose() {
    if (currentPoints === numberToGuess) {
        alert("You Win!");
        wins++;
        reset();
        console.log(numberToGuess);
    }
    else if (currentPoints >= numberToGuess) {
        alert("You Lose!");
        losses++;
        reset();        
        console.log(numberToGuess);
    }
}

$("#button2").on("click", function () {
    currentPoints += buttonNumber2;
    winLose();
    $("#current-points-text").text("Current Points: " + currentPoints);
});


function winLose() {
    if (currentPoints === numberToGuess) {
        alert("You Win!");
        wins++;
        reset();
        console.log(numberToGuess);
    }
    else if (currentPoints >= numberToGuess) {
        alert("You Lose!");
        losses++;
        reset();        
        console.log(numberToGuess);
    }
}

$("#button3").on("click", function () {
    currentPoints += buttonNumber3;
    winLose();
    $("#current-points-text").text("Current Points: " + currentPoints);
});


function winLose() {
    if (currentPoints === numberToGuess) {
        alert("You Win!");
        wins++;
        reset();
        console.log(numberToGuess);
    }
    else if (currentPoints >= numberToGuess) {
        alert("You Lose!");
        losses++;
        reset();        
        console.log(numberToGuess);
    }
}

$("#button4").on("click", function () {
    currentPoints += buttonNumber4;
    winLose();
    $("#current-points-text").text("Current Points: " + currentPoints);
});


function winLose() {
    if (currentPoints === numberToGuess) {
        alert("You Win!");
        wins++;
        reset();
        console.log(numberToGuess);
    }
    else if (currentPoints >= numberToGuess) {
        alert("You Lose!");
        losses++;
        reset();        
        console.log(numberToGuess);
    }
}