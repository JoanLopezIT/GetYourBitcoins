class Snake {
    constructor() {
        // Select scenario
        this.scenario = document.querySelector(".scenario")

        // Create player in DOM
        this.player = document.createElement("div");
        this.player.className = "snakeClass";

        // Set initial position of the player
        this.player.style.top = 0;
        this.player.style.left = 0;
        this.player.style.position = "absolute";

        // Styling player
        this.player.style.width = "30px";
        this.player.style.height = "30px";
        this.player.style.borderRadius = "50%";
        this.player.style.backgroundColor = "brown";

        // Add player to Scenario
        this.scenario.appendChild(this.player)

        // Give player a direction
        this.direction = "right"; // Initial direction of the player
        this.gridSize = 30; // Grid size (number of pixels per cell)
        this.movementSpeed = 300; // player movement speed in milliseconds (lower value = faster movement)

        // Call the moveSnake function to start the constant movement
        this.moveSnake();
    }

    // Function to move the player constantly
    moveSnake() {
        switch (this.direction) {
            case "up":
                this.player.style.top = `${(parseInt(this.player.style.top) - this.gridSize + 390) % 390}px`;
                break;
            case "down":
                this.player.style.top = `${(parseInt(this.player.style.top) + this.gridSize) % 390}px`;
                break;
            case "left":
                this.player.style.left = `${(parseInt(this.player.style.left) - this.gridSize + 390) % 390}px`;
                break;
            case "right":
                this.player.style.left = `${(parseInt(this.player.style.left) + this.gridSize) % 390}px`;
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
