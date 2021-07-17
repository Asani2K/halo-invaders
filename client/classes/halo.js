function Halo() {
  this.x = WIDTH / 2;
  this.y = HEIGHT / 2;
  this.r = HEIGHT / 3;
  this.health = HALO_HEALTH;
  this.transparency = 1;
  this.redBuffer = 0;
  this.blueBuffer = 0;
  this.lineX = WIDTH / 2;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255,215,0," + this.transparency + ")";
    ctx.stroke();
  };

  this.fade = function () {
    if (this.r > 50) {
      this.r -= 0.075;
      this.transparency -= 0.0025;
      textTransparency -= 0.005;
    }
  };

  this.hasHealth = function () {
    return this.health > 0;
  };

  this.takeDamage = function (damage) {
    this.health -= damage;
  };
}
