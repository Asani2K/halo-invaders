function itemsLineup(item1, item2) {
  var xDiff = item1.x - item2.x;
  var yDiff = item1.y - item2.y;

  // cbti - swap hard values for item width
  var xLineUp = xDiff < 20 && xDiff > -20;
  var yLineUp = yDiff < 20 && yDiff > -20;

  var lineUp = xLineUp && yLineUp;

  if (lineUp) {
    return lineUp;
  }
}

function AABB(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
}

//----Event Handlers----//
function random(min, max) {
  return Math.floor(Math.random() * max) + min > max
    ? max
    : Math.floor(Math.random() * max) + min;
}

// can we push straigh from class if the array is global?
function spawnInvader(angle) {
  const invader = new Invader(angle);
  invaders.push(invader);
}

function enlargeInvaders() {
  for (var i = 0; i < invaders.length; i++) {
    invaders[i].enlarge();
  }
}

function invaderHasBeenShot() {
  for (var i = 0; i < invaders.length; i++) {
    invader = invaders[i];

    if (this.hitTarget(invader)) {
      invaders.splice(i, 1);
      score++;
    }
  }
}
