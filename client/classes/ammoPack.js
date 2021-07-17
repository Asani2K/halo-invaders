function AmmoPack() {
  this.x = screen.width / 2;
  this.y = screen.height / 2;
  this.angleFromCenter = random(0, 359);
  this.speed = AMMO_PACK_SPEED;
  

  this.image = new Image();
  this.image.src = './images/ammo-pack.png';

  this.draw = function () {
    ctx.drawImage(this.image, this.x, this.y, AMMO_PACK_WIDTH, AMMO_PACK_HEIGHT);
  }
  this.update = function () {
    this.x -= this.speed * Math.cos(this.angleFromCenter);
    this.y -= this.speed * Math.sin(this.angleFromCenter);
    this.d += this.speed;
  }
}
