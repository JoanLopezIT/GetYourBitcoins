const fruit = new Fruit();
const snake = new Snake();



function collissionDetection() {

    // Calculate the center coordinates of the player circle
    const snakeX = snake.snake.offsetLeft + snake.snake.offsetWidth / 2;
    const snakeY = snake.snake.offsetTop + snake.snake.offsetHeight / 2;
    console.log(snakeX,snakeY)

    // Calculate the center coordinates of the fruit circle
    const fruitX = fruit.fruit.offsetLeft + fruit.fruit.offsetWidth / 2;
    const fruitY = fruit.fruit.offsetTop + fruit.fruit.offsetHeight / 2;

    // Calculate the distance between the two circles' centers
    const distance = Math.sqrt((snakeX - fruitX) ** 2 + (snakeY - fruitY) ** 2);

    // Calculate the minimum distance needed for a collision (sum of the radii)
    const minDistance = snake.snake.offsetWidth / 2 + fruit.fruit.offsetWidth / 2;

    // If the distance is less than the minimum distance, a collision is detected
    if (distance < minDistance) {
        console.log('Collision detected!');
        // You can perform any desired action when a collision is detected here

        // Remove the fruit from the DOM
        fruit.fruit.remove();
    }
}


function gameLoop() {
    requestAnimationFrame(gameLoop)
    console.log("gameLoop")
    collissionDetection()
}
gameLoop()

// Player Movement direction

function playerMove(keyPressed) {
    let currentDirection = snake.direction

    switch (keyPressed) {
        case "ArrowUp":
            if (currentDirection !== "up" && currentDirection !== "down") {
                snake.setDirection("up");
                console.log("Go UP")
            }
            break;
        case "ArrowDown":
            if (currentDirection !== "up" && currentDirection !== "down") {
                snake.setDirection("down");
                console.log("Go DOWN")
            }
            break;
        case "ArrowRight":
            if (currentDirection !== "left" && currentDirection !== "right") {
                snake.setDirection("right");
                console.log("Go RIGHT")
            }
            break;
        case "ArrowLeft":
            if (currentDirection !== "left" && currentDirection !== "right") {
                snake.setDirection("left");
                console.log("Go LEFT")
            }
            break;
    }
}


// Event listener
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    playerMove(event.key);
});
