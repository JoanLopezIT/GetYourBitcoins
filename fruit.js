
class Fruit {
    constructor() {
      this.scenario = document.querySelector(".scenario");
  
      this.createFruit();
      this.interval = setInterval(() => {
        this.removeFruit();
        this.createFruit();
      }, 90000);
    }
  
    createFruit() {
      this.reward = document.createElement("div");
      this.reward.className = "fruitClass";
  
      this.reward.style.position = "absolute";
      this.reward.style.width = "30px";
      this.reward.style.height = "30px";
      this.reward.style.borderRadius = "50%";
      this.reward.style.backgroundImage = "url('./snake_images/Bitcoin.png')";

      const maxX = this.scenario.clientWidth - 30; // Ancho del escenario - ancho de la fruta
      const maxY = this.scenario.clientHeight - 30; // Alto del escenario - alto de la fruta
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      this.reward.style.left = randomX + "px";
      this.reward.style.top = randomY + "px";
  
      this.scenario.appendChild(this.reward);
    }
  
    removeFruit() {
      if (this.reward && this.reward.parentNode) {
        this.reward.parentNode.removeChild(this.reward);
      }
    }
  }
  
  
