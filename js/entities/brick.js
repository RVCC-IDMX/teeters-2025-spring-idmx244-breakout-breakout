// brick.js - Brick entity
// This file contains the Brick class that represents the breakable bricks

export class Brick {
  constructor(game, x, y, width, height, color) {
    // TODO: Initialize the brick properties
    // - Set the game reference
    this.game = game;
    // - Set the x and y position
    this.x = x;
    this.y = y;
    // - Set the width and height
    this.width = width;
    this.height = height;
    // - Set the color
    this.color = color;
    // - Initialize the broken state to false
    this.broken = false;
  }

  draw(ctx) {
    // TODO: Draw the brick on the canvas if it's not broken
    // - Check if the brick is broken, if so, don't draw anything
    if (!this.broken) {
      // - Set the fillStyle to the brick's color
      ctx.fillstyle = this.color;
      // - Use fillRect to draw the brick
      ctx.fillrect(this.x, this.y, this.width, this.height);
      // - Add a border by using strokeStyle and strokeRect
      ctx.strokeStyle = "#000";
      ctx.linewidth = 1
      ctx.strokerect(this.x, this.y, this.width, this.height);
    }
  }

  break() {
    // TODO: Mark the brick as broken
    // - Set the broken property to true
    this.broken = true;
  }
}