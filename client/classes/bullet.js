function Bullet() {
  this.image = new Image();
  this.image.src = "./images/bullet.png";
  this.x = player.x;
  this.y = player.y + 20;
  this.angleFromCenter = player.angleFromCenter;
  this.width = 40;
  this.height = 30;
  this.speed = BULLET_SPEED;
  this.d = 0;
  this.color = "white";

  this.draw = function () {
    // // ctx.beginPath()
    // // ctx.fillStyle = 'white';
    // // ctx.fillRect(this.x, this.y, this.width, this.height);

    // ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    var x = this.x + this.width / 2;
    var y = this.y + this.height / 2;

    // ctx.save();
    // ctx.translate(x, y);
    // ctx.rotate(this.angleFromCenter);
    // ctx.translate(-x, -y);
    // ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    // ctx.restore();

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(this.angleFromCenter);
    ctx.translate(-x, -y);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.restore();
  };

  // this.draw = function () {
  //   var deg = Math.floor(this.angleFromCenter * 100 / 1.75);

  // };

  this.update = function () {
    // for (var i = 0; i < invaders.length; i++) {
    //   invader = invaders[i];

    //   if (this.hitTarget(invader)) {
    //     invaders.splice(i, 1);
    //     score++;
    //   }
    // }
    if (this.d <= BULLET_RANGE) {
      this.x -= this.speed * Math.cos(this.angleFromCenter);
      this.y -= this.speed * Math.sin(this.angleFromCenter);
      this.d += this.speed;
    }
  };
  this.hitTarget = function (target) {
    var hitBoxSize_x = 25;
    var hitBoxSize_y = 30;

    var xDiff = this.x - target.x;
    var yDiff = this.y - target.y;
    var xLineUp = xDiff < hitBoxSize_x && xDiff > -hitBoxSize_x;
    var yLineUp = yDiff < hitBoxSize_y && yDiff > -hitBoxSize_y;

    var lineUp = xLineUp && yLineUp;

    // explosion here

    if (lineUp) {
      return lineUp;
    }

    // cbti - fixed value
    // if (target.x == this.x && target.y == this.y ) {
    //   // console.log('hit');
    //   return true;
    // }
  };

  this.hasReachedPortal = function () {
    return bullet.d >= BULLET_RANGE;
  };
}
