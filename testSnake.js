class Snake {
    constructor() {
        // Select scenario
        this.scenario = document.querySelector(".scenario")

        // Create Snake in DOM
        this.snake = document.createElement("div");
        this.snake.className = "snakeClass";

        // Set initial position of the snake
        this.snake.style.top = 0;
        this.snake.style.left = 0;
        this.snake.style.position = "absolute";

        // Styling snake
        this.snake.style.width = "30px";
        this.snake.style.height = "30px";
        this.snake.style.borderRadius = "50%";
        this.snake.style.backgroundColor = "brown";

        // Add Snake to Scenario
        this.scenario.appendChild(this.snake)

        // Give Snake a direction
        this.direction = "right"; // Initial direction of the snake
        this.gridSize = 30; // Grid size (number of pixels per cell)
        this.movementSpeed = 300; // Snake movement speed in milliseconds (lower value = faster movement)

        // Call the moveSnake function to start the constant movement
        this.moveSnake();
    }

    // Function to move the snake constantly
    moveSnake() {
        switch (this.direction) {
            case "up":
                this.snake.style.top = `${(parseInt(this.snake.style.top) - this.gridSize + 390) % 390}px`;
                break;
            case "down":
                this.snake.style.top = `${(parseInt(this.snake.style.top) + this.gridSize) % 390}px`;
                break;
            case "left":
                this.snake.style.left = `${(parseInt(this.snake.style.left) - this.gridSize + 390) % 390}px`;
                break;
            case "right":
                this.snake.style.left = `${(parseInt(this.snake.style.left) + this.gridSize) % 390}px`;
                break;
            default:
                break;
        }

        // Call the moveSnake function again after a delay to create a continuous movement
        setTimeout(() => this.moveSnake(), this.movementSpeed);
    }

    // Function to change the direction of the snake
    setDirection(direction) {
        this.direction = direction;
    }
}



function playerMove(keyPressed) {
    let currentDirection = snakeInstance.direction

    switch (keyPressed) {
        case "ArrowUp":
            if (currentDirection !== "up" && currentDirection !== "down") {
                snakeInstance.setDirection("up");
                console.log("Go UP")
            }
            break;
        case "ArrowDown":
            if (currentDirection !== "up" && currentDirection !== "down") {
                snakeInstance.setDirection("down");
                console.log("Go DOWN")
            }
            break;
        case "ArrowRight":
            if (currentDirection !== "left" && currentDirection !== "right") {
                snakeInstance.setDirection("right");
                console.log("Go RIGHT")
            }
            break;
        case "ArrowLeft":
            if (currentDirection !== "left" && currentDirection !== "right") {
                snakeInstance.setDirection("left");
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
