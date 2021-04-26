const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "img/background.png";

const foodImage = new Image();
foodImage.src = "img/food.png";

const boxSize = 32;
const score = 0;

let foodCoordinates = {
   x: Math.floor(Math.random() * 17 + 1) * boxSize,
   y: Math.floor(Math.random() * 15 + 3) * boxSize,
}

let snakeBodyArray = [];
snakeBodyArray.push({ x: 9 * boxSize, y: 10 * boxSize });

document.addEventListener('onkeydown', direction);

let dir;

function direction(event) {
   if (event.keyCode === 37 && dir === "right") {
      dir = "left";
   } else if (event.keyCode === 38 && dir === "down") {
      dir = "up";
   } else if (event.keyCode === 39 && dir === "left") {
      dir = "right";
   } else if (event.keyCode === 40 && dir === "up") {
      dir = "down";
   }
}

function drawGame() {
   context.drawImage(background, 0, 0);
   context.drawImage(foodImage, foodCoordinates.x, foodCoordinates.y);

   for (let i = 0; i < snakeBodyArray.length; ++i) {
      context.fillStyle = "green";
      context.fillRect(snakeBodyArray[i].x, snakeBodyArray[i].y, boxSize, boxSize);
   }

   context.fillStyle = "white";
   context.font = "50px Arial ";
   context.fill(score, boxSize * 2.5, boxSize * 1.7);
}

let game = setInterval(drawGame, 100);