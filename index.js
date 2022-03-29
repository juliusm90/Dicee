
// Player1 Dice Roll

var randomNumber1 = Math.floor(Math.random() * 5 + 1); // 1 - 6

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

document.querySelector("img").setAttribute("src", randomImageSource);


// Player2 Dice Roll

var randomNumber2 = Math.floor(Math.random() * 5 + 1); // 1 - 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




// Winner Declairation

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
