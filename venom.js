// Fruit class represents the fruit in the Snake game
class VenomousFruit {
    constructor() {
        // Get the scenario element from the DOM
        this.scenario = document.querySelector(".scenario");

        // Create the fruit on initialization
        this.createVenomousFruit();

        setTimeout(() => {
            console.log('first timeout')
            this.removeVenomousFruit();
            this.createVenomousFruit();
        }, 1000);

        // Set an interval to remove the current fruit and create a new one after a certain time
        this.interval = setInterval(() => {
            console.log('reposition venomousfruit')
            this.removeVenomousFruit();
            this.createVenomousFruit();
            this.createVenomousFruit();


        }, 8000);
    }

    // Function to create a new fruit
    createVenomousFruit() {
        // Create a new fruit element
        this.poison = document.createElement("div");
        this.poison.className = "venomousFruitClass";

        // Set the position and appearance of the fruit
        this.poison.style.position = "absolute";
        this.poison.style.width = "30px";
        this.poison.style.height = "30px";
        this.poison.style.borderRadius = "50%";
        this.poison.style.backgroundImage = "url('./snake_images/euro.gif')";

        // ORIGINAL
        const maxX = this.scenario.clientWidth - 90; // Ancho del escenario - ancho de la fruta
        const maxY = this.scenario.clientHeight - 90; // Alto del escenario - alto de la fruta
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Set the left and top positions of the fruit based on the random X and Y positions
        this.poison.style.left = randomX + "px";
        this.poison.style.top = randomY + "px";

        // Add the fruit to the scenario
        this.scenario.appendChild(this.poison);
    }

    // Function to remove the current fruit
    removeVenomousFruit() {
        // Check if the fruit element exists and has a parent node (i.e., if it is in the DOM)
        if (this.poison && this.poison.parentNode) {
            // Remove the fruit from the DOM by removing it from its parent node
            this.poison.parentNode.removeChild(this.poison);
        }
    }
}
