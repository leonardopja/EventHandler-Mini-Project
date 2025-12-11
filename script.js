var arr = ["images/neymar.png", "images/messi.png", "images/cristiano.png"];
var arrWord = ["neymar", "messi", "cristiano"];
var counter = 0;
var score = 0;
var highScore = 0;
var i = null;

let btnPlayAgain = document.querySelector('.playAgain');
let imgToGuess = document.getElementById("imgToGuess");
let input = document.getElementById("input");
let scoreDisplay = document.querySelector(".score");
let highScoreDisplay = document.querySelector(".highScore");
let countQuestion = document.querySelector(".countQuestion");
let message = document.querySelector(".message");

function selectRandomImage() {
    let index;
    do {
        index = Math.floor(Math.random() * arr.length);
    } while (index === i); 
    i = index;
    imgToGuess.src = arr[i];
}
function play() {
    if (i === null) selectRandomImage();

    let letter = input.value.trim().toLowerCase();
    let word = arrWord[i].toLowerCase();

    if (!letter) {
        message.textContent = "No Letter ❌";
        score -= 2;
    } else if (letter === word[0]) {
        message.textContent = "Correct Answer ✅";
        score += 5;
    } else {
        message.textContent = "Not Correct Answer ❌";
        score -= 3;
    }

    
    if (score > highScore) highScore = score;
    input.value = "";
    scoreDisplay.textContent = `Score : ${score}`;
    highScoreDisplay.textContent = `High Score : ${highScore}`;
    counter++;
    countQuestion.textContent = `Question number ${counter}`;
    if (counter >= 3) {
        message.textContent = "Game Over!";
        btnPlayAgain.classList.remove("hidden");
    } else {
        selectRandomImage(); 
    }
}
function resetGame() {
    counter = 0;
    score = 0;
    i = null;
    scoreDisplay.textContent = `Score : ${score}`;
    countQuestion.textContent = `Question number ${counter}`;
    message.textContent = "";
    btnPlayAgain.classList.add("hidden");
    selectRandomImage();
}
window.addEventListener("load", selectRandomImage);
document.querySelector(".play").addEventListener("click", play);
btnPlayAgain.addEventListener("click", resetGame);
