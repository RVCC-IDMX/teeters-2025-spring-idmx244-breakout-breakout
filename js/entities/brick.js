// brick.js - Brick entity
// This file contains the Brick class that represents the breakable bricks

export class Brick {
  constructor(game, x, y, width, height, color) {
    // TODO: Initialize the brick properties
    // - Set the game reference
    // - Set the x and y position
    // - Set the width and height
    // - Set the color
    // - Initialize the broken state to false
  }

  draw(ctx) {
    // TODO: Draw the brick on the canvas if it's not broken
    // - Check if the brick is broken, if so, don't draw anything
    // - Set the fillStyle to the brick's color
    // - Use fillRect to draw the brick
    // - Add a border by using strokeStyle and strokeRect
  }

  break() {
    // TODO: Mark the brick as broken
    // - Set the broken property to true
  }
}