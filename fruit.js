
class Fruit {
    constructor() {
      this.scenario = document.querySelector(".scenario");
  
      this.createFruit();
      this.interval = setInterval(() => {
        this.removeFruit();
        this.createFruit();
      }, 9000);
    }
  
    createFruit() {
      this.fruit = document.createElement("div");
      this.fruit.className = "fruitClass";
  
      this.fruit.style.position = "absolute";
      this.fruit.style.width = "30px";
      this.fruit.style.height = "30px";
      this.fruit.style.borderRadius = "50%";
      this.fruit.style.backgroundColor = "blue";

      const maxX = this.scenario.clientWidth - 30; // Ancho del escenario - ancho de la fruta
      const maxY = this.scenario.clientHeight - 30; // Alto del escenario - alto de la fruta
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      this.fruit.style.left = randomX + "px";
      this.fruit.style.top = randomY + "px";
  
      this.scenario.appendChild(this.fruit);
    }
  
    removeFruit() {
      if (this.fruit && this.fruit.parentNode) {
        this.fruit.parentNode.removeChild(this.fruit);
      }
    }
  }
  
  
