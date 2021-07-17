function Portal() {
  this.size = 128;
  this.x = (WIDTH - this.size) / 2;
  this.y = (HEIGHT - this.size) / 2;
  this.image = new Image();
  this.frame = 0;
  this.isAnimated = false;

  this.draw = function () {
    if (portal.frame > 7) {
      portal.frame = 0;
    }
    this.image.src = `./images/portal-frames/frame_${this.frame}.gif`;
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  };

  // this.animate = function () {
  //   if (!portalAnimationInterval) {
  //     portalAnimationInterval = setInterval(function () {
  //       portal.frame++;
  //     }, 100);
  //   }
  // };

  this.resetAnimation = function () {
    clearInterval(animationInterval);
    // this.animate();
  };

  this.update = function () {
    if (stopped) {
      alert("from portal");
    }
  };

  this.enlarge = function () {
    if (portal.size < 875) {
      var scale = 2;
      portal.size += scale;
      portal.x -= scale / 2;
      portal.y -= scale / 2;
    }
  };
}
