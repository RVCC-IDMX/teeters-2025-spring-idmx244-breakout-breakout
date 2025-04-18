# Breakout Game Assignment

In this assignment, you'll implement a simple Breakout game using ES6 classes and HTML5 Canvas. You'll apply object-oriented programming concepts to create a fully functional and modular game.

## Learning Objectives

- Implement ES6 classes (converting from constructor functions)
- Work with HTML5 Canvas drawing and animation
- Create game physics and collision detection
- Manage game state and object interactions
- Apply modular JavaScript architecture
- Understand the use of Object.freeze() for constants

## Setup and Getting Started

1. Download and extract the starter files
2. Review the code structure and file organization
3. Open the project in your code editor
4. Run the game by opening `index.html` in a browser (initially, it won't function properly)

## Project Structure

```
breakout/
├── index.html              # Main HTML file (complete)
├── styles.css              # CSS styles (complete)
├── js/
│   ├── main.js             # Entry point (complete)
│   ├── game.js             # Main game controller (need to implement)
│   ├── constants.js        # Game constants (complete)
│   ├── input-handler.js    # Input handling (complete)
│   ├── collision.js        # Collision detection (need to implement)
│   ├── ui.js               # UI management (complete)
│   └── entities/
│       ├── paddle.js       # Paddle entity (need to implement)
│       ├── ball.js         # Ball entity (need to implement)
│       └── brick.js        # Brick entity (need to implement)
```

## Implementation Tasks

You'll need to complete the following files by implementing the TODOs:

1. **entities/paddle.js**: Implement the paddle movement and rendering
2. **entities/ball.js**: Implement ball physics and collision detection
3. **entities/brick.js**: Implement brick representation and breaking
4. **collision.js**: Implement collision detection between game objects
5. **game.js**: Implement the main game loop and state management

The following files are already complete and require no changes:
- **constants.js**: Contains game constants using `Object.freeze()`
- **input-handler.js**: Handles keyboard and mouse input
- **ui.js**: Manages UI elements and screens
- **main.js**: The entry point that initializes the game

## Key Concepts to Understand

### ES6 Classes

ES6 classes provide a cleaner syntax for creating object templates compared to constructor functions. Notice how we're using the `class` keyword, constructor methods, and proper method definitions without the need for `prototype`.

### Object.freeze()

In `constants.js`, we use `Object.freeze()` to make the constant objects immutable. This prevents accidental modifications to values that should remain constant throughout the game.

```javascript
export const GAME_STATES = Object.freeze({
  START: 'start',
  PLAYING: 'playing',
  GAMEOVER: 'gameover',
  WIN: 'win'
});
```

### Canvas Basics

The HTML5 Canvas API is used for drawing the game elements. Important methods include:
- `ctx.clearRect()` - Clear the canvas
- `ctx.fillRect()` - Draw filled rectangles (paddle, bricks)
- `ctx.beginPath(), ctx.arc(), ctx.fill()` - Draw circles (ball)

### Game Loop

The game loop is the heart of any game. It continuously updates game state and redraws the screen. The typical pattern is:
1. Update game state
2. Check for collisions
3. Draw everything
4. Request the next animation frame

## Debugging Tips

- Use the built-in debug function (`this.game.debug()`) to output useful information
- Check the browser console for errors
- Test each component individually before integrating them
- Add console.log statements to trace the flow of your code

## Submission

When you've completed the implementation:
1. Test your game thoroughly
2. Ensure all requirements are met
3. Submit your code according to the course instructions

## Extension Ideas (Optional)

If you finish early, consider implementing these features:
- Add power-ups (larger paddle, multiple balls, etc.)
- Add different brick types (tougher bricks that require multiple hits)
- Implement variable ball speed based on gameplay
- Add sound effects
- Add a high score system with localStorage

Good luck, and enjoy building your Breakout game!