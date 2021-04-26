const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "img/background.png";

const food = new Image();
food.src = "img/food.png";

const boxSize = 32;
const score = 0;

let foodCoordinates = {
   x: Math.floor(Math.random() * 17 + 1) * boxSize,
   y: Math.floor(Math.random() * 15 + 1) * boxSize,
}

let snakeBodyArray = [];
snakeBodyArray.push({ x: 9 * boxSize, y: 10 * box });

function drawGame() {
   context.drawImage(background, 0, 0);
}

let game = setInterval(drawGame, 100);