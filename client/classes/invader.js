function Invader(angle) {
  this.size = 10;
  this.x = screen.width / 2 - this.size / 2;
  this.y = screen.height / 2 - this.size / 2;
  this.d = 0;
  this.attackPower = 1;

  // this.angleFromCenter = random(0, 359);

  this.angleFromCenter = angle;

  this.speed = INVADER_SPEED;
  this.image = new Image();
  // this.frame = random(0, 3);
  this.frame = 0;

  // this.animate() = functio
  var animationInterval = setInterval(() => {
    this.frame++;
  }, 150);

  this.draw = function () {
    if (this.frame > 3) {
      // console.log('here');
      this.frame = 0;
    }
    this.image.src = `./images/jellyfish-${this.frame}.png`;
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);

    // this.drawHitBox();
  };

  this.drawHitBox = function () {
    // testing hit box
    var scale = 2;
    this.hitBox = {
      x: this.x + this.size / (scale * 2),
      y: this.y + this.size / (scale * 2),
      w: this.size / scale,
      h: this.size / scale,
      color: "red",
    };

    ctx.strokeStyle = this.hitBox.color;
    ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.w, this.hitBox.h);
  };

  this.update = function () {
    this.x -= this.speed * Math.cos(this.angleFromCenter);
    this.y -= this.speed * Math.sin(this.angleFromCenter);
    this.d += this.speed;

    if (this.size < 50) {
      this.size *= 1.02;
    }
  };

  this.enlarge = function () {
    if (this.size < 600) {
      this.size += 0.35;
    }
  };

  this.hasReachedHalo = function () {
    return invader.d >= INVADER_RANGE;
  };

  // this.hasBeenShot = function(bullet) {
  //   this.hitBox = {
  //     x: this.x + this.size / (scale * 2),
  //     y: this.y + this.size / (scale * 2),
  //     w: this.size / scale,
  //     h: this.size / scale,
  //     color: "red",
  //   };
  //   if ()
  // }
}
