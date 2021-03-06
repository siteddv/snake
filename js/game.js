const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "img/background.png";

const foodImage = new Image();
foodImage.src = "img/food.png";

const homepage = new Image();
homepage.src = "img/homepage.jpg";

const boxSize = 32;
let score = 0;
let isHomepageTurnOn = true;

let foodCoordinates = {
   x: Math.floor(Math.random() * 17 + 1) * boxSize,
   y: Math.floor(Math.random() * 15 + 3) * boxSize,
}

let snakeBodyArray = [];
snakeBodyArray.push({ x: 9 * boxSize, y: 10 * boxSize });

document.addEventListener('keydown', direction);

let dir;

function direction(event) {
   let isFirst = false;
   if (isHomepageTurnOn) {
      isHomepageTurnOn = false;
      if (dir === undefined) {
         isFirst = true;
      } else {
         location.reload();
      }
   }
   if (event.keyCode === 37 && dir !== "right") {
      dir = "left";
   } else if (event.keyCode === 38 && dir !== "down") {
      dir = "up";
   } else if (event.keyCode === 39 && dir !== "left") {
      dir = "right";
   } else if (event.keyCode === 40 && dir !== "up") {
      dir = "down";
   }

   if (isFirst) {
      game = setInterval(drawGame, 150);
   }
}

function eatTail(head, arr) {
   for (let i = 0; i < arr.length; ++i) {
      if (head.x === arr[i].x && head.y === arr[i].y) {
         isHomepageTurnOn = true;
         clearInterval(game);
         drawGame();
      }
   }
}

function drawHomepage() {
   if (isHomepageTurnOn) {
      context.drawImage(homepage, 0, 0);
      context.fillStyle = "#000";
      context.font = "40px Verdana";
      context.fillText("Your score: " + score, 170, 450);
      clearInterval(game);
      return true;
   }
   return false;
}

function drawGameplayInterface() {
   context.drawImage(background, 0, 0);
   context.drawImage(foodImage, foodCoordinates.x, foodCoordinates.y);
}

function drawSnake() {
   context.fillStyle = "red";
   context.fillRect(snakeBodyArray[0].x, snakeBodyArray[0].y, boxSize, boxSize);

   for (let i = 1; i < snakeBodyArray.length; ++i) {
      context.fillStyle = "green";
      context.fillRect(snakeBodyArray[i].x, snakeBodyArray[i].y, boxSize, boxSize);
   }
}

function drawCurrentScore() {
   context.fillStyle = "white";
   context.font = "50px Arial ";
   context.fillText(score, boxSize * 2.5, boxSize * 1.7);
}

function drawGame() {

   if (drawHomepage()) {
      return;
   };

   drawGameplayInterface();

   drawSnake();

   drawCurrentScore();

   let snakeHeadX = snakeBodyArray[0].x;
   let snakeHeadY = snakeBodyArray[0].y;

   if (snakeHeadX === foodCoordinates.x && snakeHeadY === foodCoordinates.y) {
      ++score;

      foodCoordinates = {
         x: Math.floor(Math.random() * 17 + 1) * boxSize,
         y: Math.floor(Math.random() * 15 + 3) * boxSize,
      }
   } else {
      snakeBodyArray.pop();
   }

   if (snakeHeadX < boxSize || snakeHeadX > boxSize * 17 ||
      snakeHeadY < 3 * boxSize || snakeHeadY > boxSize * 17) {
      isHomepageTurnOn = true;
      clearInterval(game);
      drawGame();
   }

   if (dir === "left") snakeHeadX -= boxSize;
   if (dir === "right") snakeHeadX += boxSize;
   if (dir === "up") snakeHeadY -= boxSize;
   if (dir === "down") snakeHeadY += boxSize;

   const newHead = {
      x: snakeHeadX,
      y: snakeHeadY,
   }

   eatTail(newHead, snakeBodyArray);

   snakeBodyArray.unshift(newHead);

}
debugger;
let game = setInterval(drawGame, 150);