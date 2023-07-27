class Snake {
    constructor() {
        // Select scenario
        this.scenario = document.querySelector(".scenario")

        // Create player in DOM
        this.player = document.createElement("div");
        this.player.className = "snakeClass";

        // Add player to Scenario
        this.scenario.appendChild(this.player)

        // Set initial position of the player
        this.player.style.top = 0;
        this.player.style.left = 0;
        this.player.style.position = "absolute";

        // Styling player
        this.player.style.width = "30px";
        this.player.style.height = "30px";
        this.player.style.borderRadius = "50%";
        this.player.style.backgroundColor = "brown";
        this.player.style.backgroundImage = "url('./snake_images/pacmanRight.gif')";




        // Give player a direction
        this.direction = "right"; // Initial direction of the player
        this.gridSize = 30; // Grid size (number of pixels per cell)
        this.movementSpeed = 150; // player movement speed in milliseconds (lower value = faster movement)

        // Call the moveSnake function to start the constant movement
        this.moveSnake();
    }

    // Function to move the player constantly
    moveSnake() {
        let scenarioWidth = this.scenario.offsetWidth
        let scenarioHeight = this.scenario.offsetHeight
        switch (this.direction) {
            case "up":
                this.player.style.top = `${(parseInt(this.player.style.top) - this.gridSize + scenarioHeight) % scenarioHeight}px`;
                break;
            case "down":
                this.player.style.top = `${(parseInt(this.player.style.top) + this.gridSize) % scenarioHeight}px`;
                break;
            case "left":
                this.player.style.left = `${(parseInt(this.player.style.left) - this.gridSize + scenarioWidth) % scenarioWidth}px`;
                break;
            case "right":
                this.player.style.left = `${(parseInt(this.player.style.left) + this.gridSize) % scenarioWidth}px`;
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

// Event listener
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    playerMove(event.key);
});
