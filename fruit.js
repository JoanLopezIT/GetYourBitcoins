// Fruit class represents the fruit in the Snake game
class Fruit {
  constructor() {
    // Get the scenario element from the DOM
    this.scenario = document.querySelector(".scenario");

    // Create the fruit on initialization
    this.createFruit();

    setTimeout(() => {
      console.log('first timeout')
      this.removeFruit();
      this.createFruit();
    }, 1000);

    // Set an interval to remove the current fruit and create a new one after a certain time
    this.interval = setInterval(() => {
      console.log('reposition fruit')
      this.removeFruit();
      this.createFruit();
    }, 9000);
  }

  // Function to create a new fruit
  createFruit() {
    // Create a new fruit element
    this.reward = document.createElement("div");
    this.reward.className = "fruitClass";

    // Set the position and appearance of the fruit
    this.reward.style.position = "absolute";
    this.reward.style.width = "30px";
    this.reward.style.height = "30px";
    this.reward.style.borderRadius = "50%";
    this.reward.style.backgroundImage = "url('./snake_images/Bitcoin.png')";

    // ORIGINAL
    const maxX = this.scenario.clientWidth - 90; // Ancho del escenario - ancho de la fruta
    const maxY = this.scenario.clientHeight - 90; // Alto del escenario - alto de la fruta
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // NEW?
    // const maxX = this.scenario.clientWidth - this.gridSize; // Subtract gridSize
    // const maxY = this.scenario.clientHeight - this.gridSize; // Subtract gridSize
    // const randomX = Math.floor(Math.random() * (maxX / this.gridSize)) * this.gridSize; // Adjust randomX
    // const randomY = Math.floor(Math.random() * (maxY / this.gridSize)) * this.gridSize; // Adjust randomY

    // Set the left and top positions of the fruit based on the random X and Y positions
    this.reward.style.left = randomX + "px";
    this.reward.style.top = randomY + "px";

    // Add the fruit to the scenario
    this.scenario.appendChild(this.reward);
  }

  // Function to remove the current fruit
  removeFruit() {
    // Check if the fruit element exists and has a parent node (i.e., if it is in the DOM)
    if (this.reward && this.reward.parentNode) {
      // Remove the fruit from the DOM by removing it from its parent node
      this.reward.parentNode.removeChild(this.reward);
    }
  }
}
