// ball.js - Ball entity
// This file contains the Ball class that represents the bouncing ball

import { DEFAULTS } from '../constants.js';

export class Ball {
  constructor(game) {
    // TODO: Initialize the ball properties
    // - Set the game reference
    // - Set the size (radius) using DEFAULTS.BALL_SIZE
    // - Set initial position to the center horizontally and just above the paddle
    // - Set the ball speed using DEFAULTS.BALL_SPEED
    // - Set initial direction: dx to a positive value and dy to a negative value
    //   (This will make the ball move up and to the right initially)
  }

  update() {
    // TODO: Update the ball position and handle wall collisions
    // 1. Update position based on direction (add dx to x, add dy to y)
    // 2. Handle wall collisions:
    //    - If ball hits left or right wall, reverse dx
    //    - If ball hits top wall, reverse dy
    //    - If ball goes below bottom edge, call game.ballLost()
  }

  draw(ctx) {
    // TODO: Draw the ball on the canvas
    // - Use beginPath(), arc(), fillStyle, and fill() to draw a circle
  }

  collidesWith(object) {
    // TODO: Check if the ball collides with a rectangular object (brick or paddle)
    // - Return true if the ball's bounding box overlaps with the object's rectangle
    // - Remember to account for the ball's radius in the calculation
  }

  reset() {
    // TODO: Reset the ball position after losing a life
    // - Set position back to initial values
    // - Reset direction to initial values
  }
}