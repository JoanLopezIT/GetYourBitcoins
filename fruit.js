class Fruit{
    constructor(){
        this.scenario = document.querySelector(".scenario")

        this.fruit = document.createElement("div");
        this.fruit.className = "fruitClass";


        this.fruit.style.position = "absolute";
        this.fruit.style.width = "30px";
        this.fruit.style.height = "30px";
        this.fruit.style.borderRadius = "50%";
        this.fruit.style.backgroundColor = "blue";
        this.fruit.style.gridArea = `${foodY} / ${foodX}`;


        this.scenario.appendChild(this.fruit)

        
    }
}

const fruitInstance = new Fruit();

let foodX, foodY;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const initGame