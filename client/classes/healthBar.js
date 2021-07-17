function HealthBar() {
  this.x = HEALTH_BAR_X;
  this.y = HEALTH_BAR_Y;
  this.width = HEALTH_BAR_WIDTH;
  this.height = HEALTH_BAR_HEIGHT;

  this.image = new Image();

  this.draw = function () {
    this.image.src = `./images/health-bar-frames/frame-${halo.health}.gif`;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
