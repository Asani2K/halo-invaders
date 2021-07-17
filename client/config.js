const canvas = document.getElementById("mainCanvas");
var audio = document.getElementById("audio");
var source = document.getElementById("audioSource");

const WIDTH = screen.width;
const HEIGHT = screen.height;

const HALO_RADIUS = screen.width / 3;

const BULLET_SIZE = 100;
const BULLET_SPEED = 3;
const BULLET_COLOR = "pink";
const BULLET_RANGE = HALO_RADIUS / 2 + 32;

const INVADER_SPEED = 0.5;
const INVADER_RANGE = HALO_RADIUS / 2 + 50;
// why inconsistent?
let INVADER_SPAWN_RATE = 1000;
let HEALTH_PACK_SPAWN_RATE = 10000;
let AMMO_PACK_SPAWN_RATE = 7500;

let invaderAnimateRate = 145;

const PLAYER_SPEED = 0.01;

const HEALTH_PACK_WIDTH = 50;
const HEALTH_PACK_HEIGHT = 50;
const HEALTH_PACK_SPEED = -0.2;

const AMMO_PACK_WIDTH = 50;
const AMMO_PACK_HEIGHT = 50;
const AMMO_PACK_SPEED = -0.8;
const AMMO_OUTPUT_X = (WIDTH / 15) * 12;
const AMMO_OUTPUT_Y = (HEIGHT / 9) * 7;

const HEALTH_BAR_X = (WIDTH / 15) * 1;
const HEALTH_BAR_Y = (HEIGHT / 9) * 7;
const HEALTH_BAR_WIDTH = 300;
const HEALTH_BAR_HEIGHT = 75;

const HALO_HEALTH = 10;

const SCORE_X = (WIDTH / 10) * 1;
const SCORE_Y = (HEIGHT / 6) * 1;

// not to scale - works well atm...
const FPS = 150;

const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32,
};

const ctx = canvas.getContext("2d");
var background = new Image();
background.src = "./images/stars.gif";

var landing = new Image();
landing.src = "./images/landing.png";

var stopped = true;
var gameStarted = false;
var gameOver = false;

var roomSize;

var myMusic;

var textTransparency = 1;

let myFont = new FontFace(
  "Arcade",
  "url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap)"
);

intervalsAreRunning = false;

portalAnimationInterval = null;
