// collision.js - Handles collision detection and response
// This file manages all collision-related logic in the game

import { DEFAULTS } from './constants.js';

export class CollisionManager {
  constructor(game) {
    this.game = game;
  }

  // Check for all collisions in the game
  checkCollisions() {
    if (!this.game.ball || !this.game.paddle) {
      return;
    }

    // TODO: Call the methods to check different types of collisions
    // - Call checkPaddleCollision() to handle ball-paddle collisions
    this.checkPaddleCollision();
    // - Call checkBrickCollisions() to handle ball-brick collisions
    this.checkBrickCollisions();
  }

  // Check if ball collides with paddle
  checkPaddleCollision() {
    // TODO: Implement paddle collision detection and response
    // 1. Get references to the ball and paddle from the game object
    const ball = this.game.ball;
    const paddle = this.game.paddle;
    // 2. Check if the ball overlaps with the paddle:
    //    - Ball's bottom edge is below paddle's top edge
    //    - Ball's bottom edge is above paddle's bottom edge
    //    - Ball's horizontal position is between paddle's left and right edges
    if (
      ball.y + ball.size > paddle.y &&
      ball.y + ball.size < paddle.y + paddle.height &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      // 3. If a collision is detected:
      //    - Reverse the ball's vertical direction (set dy to negative)
      ball.dy = -ball.speed;
      //    - Adjust the horizontal direction based on where the ball hit the paddle
      //      (This creates different bounce angles depending on where the ball hits)
      const hitPosition = (ball.x - paddle.x) / paddle.width;
      ball.dx = ball.speed * (hitPosition * 2 - 1) * 1.5;
    }
  }

  // Check if ball collides with any bricks
  checkBrickCollisions() {
    // TODO: Implement brick collision detection and response
    // 1. Get reference to the ball from the game object
    const ball = this.game.ball;
    const bricks = this.game.bricks;
    // 2. Loop through all bricks in the game
    for (let brick of bricks) {
      // 3. For each brick that isn't broken:
      //    - Check if the ball collides with it using ball.collidesWith(brick)
      if (!brick.broken && ball.collidesWith(brick)) {
        //    - If collision detected:
        //      a. Call brick.break() to break the brick
        brick.break()
        //      b. Add points to the score using game.addScore(DEFAULTS.POINTS_PER_BRICK)
        this.game.addScore(DEFAULTS.POINTS_PER_BRICK);
        //      c. Call calculateBounceDirection() to determine how the ball should bounce
        this.calculateBounceDirection(ball, brick);
        break;
      }
    }
  }

  // Calculate how the ball should bounce after hitting a brick
  calculateBounceDirection(ball, brick) {
    // TODO: Determine how the ball should bounce off a brick
    // 1. Calculate the distances from the ball's center to each edge of the brick
    const ballCenterX = ball.x + ball.size / 2;
    const ballCenterY = ball.y + ball.size / 2;
    const brickCenterX = brick.x + brick.width / 2;
    const brickCenterY = brick.y + brick.height / 2;
    // 2. Find the shortest distance to determine which side was hit
    // 3. If the ball hit the left or right side of the brick, reverse ball.dx
    // 4. If the ball hit the top or bottom of the brick, reverse ball.dy

    const dx = ballCenterX - brickCenterX;
    const dy = ballCenterY - brickCenterY;

    const absDX = Math.abs(dx);
    const absDY = Math.abs(dy);

    if (absDX > absDY) {
      ball.dx = -ball.dx;
    } else {
      ball.dy = -ball.dy;
    }
  }
}