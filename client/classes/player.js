function Player() {
  this.image = new Image();
  // this.id = id;
  // console.log("playerId", this.id);

  // cbti - fixed values
  // this.size = 64;
  this.width = 64
  this.height = 64
  this.speed = 6;
  this.lifes = 3;
  this.ammo = 25;
  this.angleFromCenter = 0;
  this.distanceFromCenter = 100

  this.buffer = 32;

  this.image = document.createElement('img');
  this.image.src = './images/tri-ship.png';

  // if(this.id == 1){
  //   this.angleFromCenter = Math.PI * 0;

  //   this.x = WIDTH / 2 + Math.cos(this.angleFromCenter) * (HEIGHT / 3) - this.buffer;
  //   this.y = HEIGHT / 2 + Math.sin(this.angleFromCenter) * (HEIGHT / 3) - this.buffer;
  // }
  // else if(this.id == 2){
  //   this.angleFromCenter = Math.PI * 1;

  //   this.x = WIDTH / 2 - Math.cos(this.angleFromCenter) * (HEIGHT / 3) - this.buffer;
  //   this.y = HEIGHT / 2 + Math.sin(this.angleFromCenter) * (HEIGHT / 3) - this.buffer;
  // }

  this.angleFromCenter = Math.PI * 0;

  this.x = WIDTH / 2 + Math.cos(this.angleFromCenter) * (HEIGHT/3) - this.buffer;
  this.y = HEIGHT / 2 + Math.sin(this.angleFromCenter) * (HEIGHT/3)- this.buffer;

  
  this.draw = function () {
    var deg = Math.floor(this.angleFromCenter * 100 / 1.75);
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

  this.update = function () {
    var deg = Math.floor(this.angleFromCenter * 100 / 1.75);
    if (deg > 359) {
      this.angleFromCenter = 0;
    }
    if (deg < 0) {
      this.angleFromCenter = 359 / 100 * 1.75;
    }
    if (input.isDown(KEYS.RIGHT)) {
      this.angleFromCenter -= PLAYER_SPEED;
      // socket.emit("playerMoved", this.angleFromCenter);
    };
    if (input.isDown(KEYS.LEFT)) {
      this.angleFromCenter += PLAYER_SPEED;
      // socket.emit("playerMoved", this.angleFromCenter);
    };
    this.x = WIDTH / 2 + Math.cos(this.angleFromCenter) * (HEIGHT / 3) - this.buffer;
    this.y = HEIGHT / 2 + Math.sin(this.angleFromCenter) * (HEIGHT / 3) - this.buffer;
  };
  this.shoot = function () {
    if (this.ammo > 0) {
      bullets.push(new Bullet());
      this.ammo--;
    }
  };
  this.pickup = function (item, index) {
    var itemType = item.constructor.name;
    if (itemType === "HealthPack") {
    }
    switch (itemType) {
      case "HealthPack":
        // console.log('heal');
        halo.health += 3;
        if (halo.health > 10) {
          halo.health = 1;
        }
        healthPacks.splice(index, 1);
        break;
      case "AmmoPack":
        this.ammo += 10;
        ammoPacks.splice(index, 1);
    }
  }
}
