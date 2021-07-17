function inputHandeler() {
  this.down = {};
  this.pressed = {};

  var _this = this;
  document.addEventListener("keydown", function (evt) {
    _this.down[evt.keyCode] = true;
    // // console.log(evt.keyCode);
  });
  document.addEventListener("keyup", function (evt) {
    delete _this.down[evt.keyCode];
    delete _this.pressed[evt.keyCode];
  });
  document.addEventListener("keypress", function (evt) {
    _this.pressed[evt.keyCode] = true;
    if (KEYS.SPACE == evt.keyCode) {
      player.shoot();
      console.log("shooting");
    }
  });

  this.isDown = function (code) {
    return this.down[code];
  };

  this.isPressed = function (code) {
    if (this.pressed[code]) {
      return false;
    } else if (this.down[code]) {
      return (this.pressed[code] = true);
    }
    return false;
  };
}

function checkStart(e) {
  if (!gameStarted) {
    var rect = {
      x: WIDTH / 2.5,
      y: HEIGHT / 1.25,
      width: 300,
      height: 90,
    };
  } else {
    var rect = {
      x: WIDTH / 3.1,
      y: HEIGHT / 1.75,
      width: 500,
      height: 100,
    };
  }

  var p = getMousePos(e);

  if (clickedInsideZone(rect, p)) {
    StartGame();
  } else {
    console.log("out");
  }
}

function clickedInsideZone(rect, p) {
  return (
    rect.x <= p.x &&
    p.x <= rect.x + rect.width &&
    rect.y <= p.y &&
    p.y <= rect.y + rect.height
  );
}

// The mouse position can be calculated like this:

function getMousePos(e) {
  var r = canvas.getBoundingClientRect();
  return {
    x: e.clientX - r.left,
    y: e.clientY - r.top,
  };
}
