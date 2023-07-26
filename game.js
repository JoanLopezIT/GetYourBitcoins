class Game {
    constructor(){

        this.score = 0;
        this.wrapper = document.querySelector(".wrapper");
        this.startGameScenario = document.querySelector("#initial-screen")
        this.gameIsOver = false;
    }

    start() {
        // this.scenario.style. = this.width;
        // this.gameScreen.style.height = this.height;
        //Hide the starter screen
        this.startGameScenario.style.display = "none";
        // display the game screen
        this.wrapper.style.display = "block";
        // start the game loop
        // this.gameLoop()
    }
    gameOver {
        setTimeout(() => {
            this.startGameScenario.style.display = "block";
            this.wrapper.style.display = "none";

        }, 5000);
    }
}