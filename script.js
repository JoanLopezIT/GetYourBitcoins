window.onload = function () {
    console.log('SCRIPT JS IS WORKING');
    const startButton = document.getElementById("start-button");
    // const restartButton = document.getElementById("restart-button");
    let game;
    startButton.addEventListener("click", function () {
        console.log('START BUTTON IS WORKING');
        startGame();
        setTimeout(() => {
            console.log("IT HAPPENDS")
            game = new Game();
            game.gameOver()
        }, 60000);  

    });

    function startGame() {
        console.log("start game");
        game = new Game();
        game.start();
    }
 
}

const fruit = new Fruit();
const snake = new Snake();
const venom = new VenomousFruit()

const scenario = document.querySelector(".scenario")

// score and High score programing
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let highScoreInitialScreen = document.querySelector("#startScore")
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High Score : ${highScore}`
highScoreInitialScreen.innerHTML = `High Score : ${highScore}`

// let snakeBody = [];
// snakeBody[0] = [snakeX, snakeY]

function collissionDetection() {

    // Calculate the center coordinates of the player circle
    const snakeX = snake.player.offsetLeft + snake.player.offsetWidth / 2;
    const snakeY = snake.player.offsetTop + snake.player.offsetHeight / 2;
    console.log(snakeX, snakeY)

    // Calculate the center coordinates of the fruit circle
    const fruitX = fruit.reward.offsetLeft + fruit.reward.offsetWidth / 2;
    const fruitY = fruit.reward.offsetTop + fruit.reward.offsetHeight / 2;
    // Calculate the center coordinates of the venom circle
    const venomX = venom.poison.offsetLeft + venom.poison.offsetWidth / 2;
    const venomY = venom.poison.offsetTop + venom.poison.offsetHeight / 2;

    // Calculate the distance between the two circles' centers
    const distanceFruit = Math.sqrt((snakeX - fruitX) ** 2 + (snakeY - fruitY) ** 2);
    const distanceVenom = Math.sqrt((snakeX - venomX) ** 2 + (snakeY - venomY) ** 2);
    // Calculate the minimum distance needed for a collision (sum of the radii)
    const minDistanceFruit = snake.player.offsetWidth / 2 + fruit.reward.offsetWidth / 2;
    const minDistanceVenom = snake.player.offsetWidth / 2 + venom.poison.offsetWidth / 2;

    // If the distance is less than the minimum distance, a collision is detected
    if (distanceFruit < minDistanceFruit) {
        console.log('Fruit Collision detected!');
        // Remove the fruit from the DOM and add a new one
        fruit.reward.remove();
        fruit.createFruit()

        // score manager
        score+= 100
        scoreElement.innerHTML = `Score : ${score}`
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore)
        highScoreElement.innerHTML = `High Score : ${highScore}`
        const bitcoinSound = new Audio('./snake_images/BitcoinSound.wav');
        bitcoinSound.play()

        //          snakeBody.push([fruitX,fruitY])

        //          snakeBody.push([snakeX, snakeY]);

        //  let newElement = `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`

        //          for(let i = 0; i < snakeBody.length; i++ ){
        //            if(fruit.reward.remove == true){
        //                 newElement += `<div class="snakeClass" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>` ;
        //                 console.log('snake body growing')
        //             }
        //             scenario.innerHTML = newElement

        //          }
        //  snakeBody[0] = [snakeX, snakeY]

    } else if (distanceVenom < minDistanceVenom) {
        console.log('Venom Collision detected!');
        // Remove the venom from the DOM and add a new one
        venom.poison.remove();
        venom.createVenomousFruit()

        // score manager
        score-=50
        scoreElement.innerHTML = `Score : ${score}`
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore)
        highScoreElement.innerHTML = `High Score : ${highScore}`
        const euroSound = new Audio('./snake_images/euroSound.wav');
        euroSound.play()
    }
}


// loop for colision detection
function gameLoop() {
    collissionDetection()
    requestAnimationFrame(gameLoop)

}
gameLoop()

// snakeBody growing
// snakeBody[0] = [snakeX, snakeY]

// for(let i = 0; i < snakeBody.length; i++ ){
//     if(fruit.reward.remove == true){
//         newElement += document.innerHTML(`<div class="snakeClass" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`) ;
//         console.log('snake body growing')
//     }
//     scenario.innerHTML = newElement

// }


// Player Movement direction

function playerMove(keyPressed) {
    let currentDirection = snake.direction

    switch (keyPressed) {
        case "ArrowUp":
            if (currentDirection !== "up" && currentDirection !== "down") {
                snake.setDirection("up");
                console.log("Go UP")
                snake.player.style.backgroundImage = "url('./snake_images/pacmanUp.gif')";
            }
            break;
        case "ArrowDown":
            if (currentDirection !== "up" && currentDirection !== "down") {
                snake.setDirection("down");
                console.log("Go DOWN")
                snake.player.style.backgroundImage = "url('./snake_images/pacmanBot.gif')";

            }
            break;
        case "ArrowRight":
            if (currentDirection !== "left" && currentDirection !== "right") {
                snake.setDirection("right");
                console.log("Go RIGHT")
                snake.player.style.backgroundImage = "url('./snake_images/pacmanRight.gif')";

            }
            break;
        case "ArrowLeft":
            if (currentDirection !== "left" && currentDirection !== "right") {
                snake.setDirection("left");
                console.log("Go LEFT")
                snake.player.style.backgroundImage = "url('./snake_images/pacmanLeft.gif')";

            }
            break;
        case "p":
        case "P":
            alert("Game Paused")
            break;
    }
}


// Event listener
document.addEventListener("keydown", (event) => {
    event.preventDefault();
    playerMove(event.key);

});