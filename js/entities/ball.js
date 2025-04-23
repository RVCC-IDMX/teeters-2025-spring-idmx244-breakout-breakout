// ball.js - Ball entity
// This file contains the Ball class that represents the bouncing ball

import { DEFAULTS } from '../constants.js';

export class Ball {
  constructor(game) {
    // TODO: Initialize the ball properties
    // - Set the game reference
    this.game = game;
    // - Set the size (radius) using DEFAULTS.BALL_SIZE
    this.size = DEFAULTS.BALL_SIZE;
    // - Set initial position to the center horizontally and just above the paddle
    this.x = game.width / 2;
    this.y = game.height - 30;
    // - Set the ball speed using DEFAULTS.BALL_SPEED
    this.speed = DEFAULTS.BALL_SPEED;
    // - Set initial direction: dx to a positive value and dy to a negative value
    this.dx = this.speed;
    this.dy = -this.speed;
    //   (This will make the ball move up and to the right initially)
  }

  update() {
    // TODO: Update the ball position and handle wall collisions
    // 1. Update position based on direction (add dx to x, add dy to y)
    this.x += this.dx;
    this.y += this.dy;
    // 2. Handle wall collisions:
    //    - If ball hits left or right wall, reverse dx
    if (this.x < 0 || this.x + this.size > this.game.width) {
      this.dx = -this.dx;
    };
    //    - If ball hits top wall, reverse dy
    if (this.y - this.size < 0) {
      this.dy = -this.dy;
    };
    //    - If ball goes below bottom edge, call game.ballLost()
    if (this.y - this.size > this.game.height) {
      this.game.ballLost();
    }
  }

  draw(ctx) {
    // TODO: Draw the ball on the canvas
    // - Use beginPath(), arc(), fillStyle, and fill() to draw a circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
  }

  collidesWith(object) {
    // TODO: Check if the ball collides with a rectangular object (brick or paddle)
    // - Return true if the ball's bounding box overlaps with the object's rectangle
    // - Remember to account for the ball's radius in the calculation
    return (
      this.x + this.size > object.x &&
      this.x - this.size < object.x + object.width &&
      this.y + this.size > object.y &&
      this.y - this.size < object.y + object.height
    );
  }

  reset() {
    // TODO: Reset the ball position after losing a life
    // - Set position back to initial values
    this.x = this.game.width / 2;
    this.y = this.game.height - 30;
    // - Reset direction to initial values
    this.dx = this.speed;
    this.dy = -this.speed;
  }
}