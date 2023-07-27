class Game {
    constructor(){

        this.score = 0;
        this.wrapper = document.querySelector(".wrapper");
        this.startGameScenario = document.querySelector("#initial-screen")
        // this.gameIsOver = false;
    }

    start() {

        this.startGameScenario.style.display = "none";
        this.wrapper.style.display = "block";
    }
    gameOver() {

        this.startGameScenario.style.display = "block";
        this.wrapper.style.display = "none";
    }
}