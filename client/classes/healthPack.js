function HealthPack() {
  this.name = 'healPack';
  this.x = screen.width / 2;
  this.y = screen.height / 2;
  this.angleFromCenter = random(0, 359);
  this.speed = HEALTH_PACK_SPEED;

  this.image = new Image();
  this.image.src = './images/health-pack.png';

  this.draw = function () {
    ctx.drawImage(this.image, this.x, this.y, HEALTH_PACK_WIDTH, HEALTH_PACK_HEIGHT);
  }
  this.update = function () {
    this.x -= this.speed * Math.cos(this.angleFromCenter);
    this.y -= this.speed * Math.sin(this.angleFromCenter);
    this.d += this.speed;
  }
}
