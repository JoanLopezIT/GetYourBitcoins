## Snake Game

This is a classic Snake game implemented in JavaScript using object-oriented programming principles such as classes and constructors. The game allows players to control a snake that moves around the screen, eating food to grow longer. The game ends if the snake collides with the boundary or itself.


## How to Play

Use de direct link provided in GitHub or in this Readme file.

Use the arrow keys (up, down, left, right) to control the snake's direction.

The objective is to eat as much food as possible to grow the snake longer.

The game ends if the snake collides with the boundary or itself.

To restart the game, simply refresh the page.

## Code Structure

The game is built using object-oriented programming concepts in JavaScript. Here's a brief overview of the code structure:

<!-- index.html -->
This is the main HTML file that displays the game canvas and loads the necessary JavaScript and CSS files.

<!-- styles.css -->
The CSS file contains styling for the game canvas and other elements.

<!-- script.js -->
The script.js file contains the game logic and handles user input. It is organized into the following classes:

CLASS Snake
This class represents the snake in the game. It keeps track of the snake's body, direction, and movement. It also handles collisions with the boundary and food.

CLASS Food
The Food class represents the food that appears on the screen. When the snake eats the food, it grows longer.

CLASS Game
The Game class manages the game state, including the snake, food, and score. It updates the game elements, checks for collisions, and handles game over scenarios.

CLASS Main
This is the entry point of the game. It initializes the Game class and sets up the game loop to continuously update and render the game.

## Technologies Used

HTML5
CSS3
JavaScript (ES6)


## Browser Compatibility
The game has been tested and verified to work on the following web browsers:

Google Chrome
Mozilla Firefox
Microsoft Edge
Safari


## Acknowledgments
The game is inspired by the classic Snake game and is built for educational purposes.