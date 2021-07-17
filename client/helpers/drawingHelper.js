function drawBackground() {
  ctx.drawImage(background, 0, 0, screen.width, screen.height);
}

function drawScoreText() {
  ctx.font = "30px Arial";
  textColor = "rgba(255,255,255," + textTransparency + ")";
  ctx.fillStyle = textColor;
  ctx.fillText("Score: " + score, SCORE_X, SCORE_Y);
}

function drawAmmoText() {
  ctx.font = "30px Arial";
  textColor = "rgba(255,255,255," + textTransparency + ")";
  ctx.fillStyle = textColor;
  ctx.fillText("AMMO: " + player.ammo, AMMO_OUTPUT_X, AMMO_OUTPUT_Y);
}

function drawBullets() {
  for (bullet of bullets) {
    bullet.draw();
  }
}

function drawGameOverText() {
  ctx.font = "85px Arial";
  ctx.fillStyle = "gold";
  ctx.texAllign = "center";
  ctx.fillText("GAME OVER", WIDTH / 3.5, HEIGHT / 2);
}
function drawFinalScoreText() {
  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.texAllign = "center";
  ctx.fillText("SCORE: " + score, WIDTH / 3, HEIGHT / 1.75);
}

function drawButton(
  text,
  x,
  y,
  w,
  h,
  textColor,
  buttonColor,
  callbackFunction
) {
  ctx.fillStyle = buttonColor;
  ctx.fillRect(x, y, w, h);

  ctx.font = "90px Arial";
  ctx.fillStyle = textColor;
  ctx.texAllign = "center";
  ctx.fillText(text, x + w / 5, y + h);

  var rect = {
    x: x,
    y: y,
    width: w,
    height: h,
  };
  canvas.addEventListener("click", callbackFunction, false, rect);
}

function drawInvaders() {
  for (invader of invaders) {
    invader.draw();
  }
}

function drawHealthPacks() {
  for (healthPack of healthPacks) {
    healthPack.draw();
  }
}
function drawAmmoPacks() {
  for (ammoPack of ammoPacks) {
    ammoPack.draw();
  }
}

function drawLandingImage() {
  ctx.drawImage(landing, 0, 0, screen.width, screen.height);
}

function drawLandingScreen() {
  drawLandingImage();
  drawButton(
    "PLAY",
    WIDTH / 2.5,
    HEIGHT / 1.25,
    300,
    90,
    "black",
    "rgba(0,0,0,0)",
    StartGame
  );
}

function drawGameScreen() {
  drawBackground();
  drawScoreText();
  drawAmmoText();
  healthBar.draw();
  halo.draw();

  player.draw();
  drawBullets();

  portal.draw();
  if (portal.size >= 875) {
    drawGameOverInfo();
  }

  drawHealthPacks();
  drawAmmoPacks();
  drawInvaders();
}

function drawGameOverInfo() {
  drawGameOverText();
  drawFinalScoreText();
  // could maybe make a button class...
  drawButton(
    "RETRY",
    WIDTH / 3.1,
    HEIGHT / 1.75,
    475,
    100,
    "black",
    "red",
    StartGame
  );
}
