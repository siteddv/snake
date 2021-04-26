const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "img/background.png";

const food = new Image();
food.src = "img/food.png";

const box = 32;
const score = 0;

function drawGame() {
   context.drawImage(background, 0, 0);
}

let game = setInterval(drawGame, 100);