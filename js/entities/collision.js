// collision.js - Handles collision detection and response
// Student Task: Implement collision detection between game objects

import { DEFAULTS } from './constants.js';

export class CollisionManager {
  constructor(game) {
    this.game = game;
  }

  // Main collision detection method, called every frame
  checkCollisions() {
    // TODO: Check if game objects exist before proceeding
    // - Early return if ball or paddle is not available

    // TODO: Call helper methods to check various collision types
    // - Call checkPaddleCollision() to check ball-paddle collisions
    // - Call checkBrickCollisions() to check ball-brick collisions
  }

  // Check for collision between the ball and paddle
  checkPaddleCollision() {
    // TODO: Implement ball-paddle collision detection and response
    // 1. Get references to the ball and paddle from the game object
    // 2. Check if the ball overlaps with the paddle
    // 3. If collision detected:
    //    - Reverse the ball's vertical direction (dy = -ball.speed)
    //    - Modify the ball's horizontal direction based on where it hit the paddle
    //      (balls hitting the edge should bounce outward, while center hits go straight)
  }

  // Check for collisions between the ball and all bricks
  checkBrickCollisions() {
    // TODO: Implement ball-brick collision detection and response
    // 1. Get a reference to the ball
    // 2. Loop through all bricks in the game
    // 3. For each brick that isn't broken:
    //    - Check if the ball collides with it using ball.collidesWith(brick)
    //    - If collision detected:
    //      * Break the brick (brick.break())
    //      * Add points to the score (game.addScore(DEFAULTS.POINTS_PER_BRICK))
    //      * Calculate bounce direction using calculateBounceDirection()
  }

  // Calculate how the ball should bounce after hitting a brick
  calculateBounceDirection(ball, brick) {
    // TODO: Implement bounce direction calculation
    // 1. Calculate the distances to each edge of the brick
    // 2. Determine which edge was hit (smallest distance)
    // 3. Reverse the appropriate velocity component:
    //    - If hit left/right edge: reverse ball.dx
    //    - If hit top/bottom edge: reverse ball.dy
  }
}