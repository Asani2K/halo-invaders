function startIntervals() {
  invaderSpawnInterval = setInterval(() => {
    const angle = random(0, 359);
    spawnInvader(angle);
  }, 1000);
  // clearInterval(invaderSpawnInterval)

  healthSpawnTimer = setInterval(() => {
    healthPacks.push(new HealthPack());
  }, HEALTH_PACK_SPAWN_RATE);

  ammoSpawnTimer = setInterval(() => {
    ammoPacks.push(new AmmoPack());
    // // console.log('ammo')
  }, AMMO_PACK_SPAWN_RATE);

  // portalAnimationInterval = setInterval(function () {
  //   portal.frame++;
  // }, 100);

  if (!portalAnimationInterval) {
    portalAnimationInterval = setInterval(function () {
      portal.frame++;
    }, 100);
  }

  intervalsAreRunning = false;
}

function clearIntervals() {
  clearInterval(invaderSpawnInterval);
  clearInterval(healthSpawnTimer);
  clearInterval(ammoSpawnTimer);
  // clearInterval(portalAnimationInterval);
}
