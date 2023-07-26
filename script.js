const fruit = new Fruit();
const snake = new Snake();

const scenario = document.querySelector(".scenario")

// score and High score programing
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High Score : ${highScore}`


let snakeBody = [];
let newElement = ``




function collissionDetection() {

    // Calculate the center coordinates of the player circle
    const snakeX = snake.player.offsetLeft + snake.player.offsetWidth / 2;
    const snakeY = snake.player.offsetTop + snake.player.offsetHeight / 2;
    console.log(snakeX,snakeY)

    // Calculate the center coordinates of the fruit circle
    const fruitX = fruit.reward.offsetLeft + fruit.reward.offsetWidth / 2;
    const fruitY = fruit.reward.offsetTop + fruit.reward.offsetHeight / 2;

    // Calculate the distance between the two circles' centers
    const distance = Math.sqrt((snakeX - fruitX) ** 2 + (snakeY - fruitY) ** 2);

    // Calculate the minimum distance needed for a collision (sum of the radii)
    const minDistance = snake.player.offsetWidth / 2 + fruit.reward.offsetWidth / 2;

    // If the distance is less than the minimum distance, a collision is detected
    if (distance < minDistance) {
        console.log('Collision detected!');
        // You can perform any desired action when a collision is detected here

        // Remove the fruit from the DOM and add a new one
        fruit.reward.remove();
        fruit.createFruit()

        snakeBody[0] = [snakeX, snakeY]

for(let i = 0; i < snakeBody.length; i++ ){
    if(distance < minDistance){
        newElement.innerHTML = `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>` ;
        scenario.appendChild(newElement);
        console.log("SE COMIO LA FRUTA")
    }

}

        // score manager
        score ++
         scoreElement.innerHTML = `Score : ${score}`
         highScore = score >= highScore ? score : highScore;
         localStorage.setItem("high-score",highScore)
         highScoreElement.innerHTML = `High Score : ${highScore}`
         snakeBody.push([fruitX,fruitY])


    }
}

    // loop for colision detection
function gameLoop() {
    requestAnimationFrame(gameLoop)
    console.log("gameLoop")
    collissionDetection()
}
gameLoop()

// snakeBody growing
snakeBody[0] = [snakeX, snakeY]

for(let i = 0; i < snakeBody.length; i++ ){
    if(distance < minDistance){
        newElement = document.innerHTML(`<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`) ;
        scenario.appendChild(newElement);
        console.log("SE COMIO LA FRUTA")
    }

}


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
