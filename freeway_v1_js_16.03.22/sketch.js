var backImage;
var j = 0;
var soundTrack;
var collideSound;
var scoreSound;

function preload(){
  backImage = loadImage("/images/estrada.png");
  imgPlayer = loadImage("/images/ator-1.png");
  imgCar[0] = loadImage("/images/carro-1.png");
  imgCar[1] = loadImage("/images/carro-2.png");
  imgCar[2] = loadImage("/images/carro-3.png");
  imgCar[3] = loadImage("/images/carro-1.png");
  imgCar[4] = loadImage("/images/carro-2.png");
  imgCar[5] = loadImage("/images/carro-3.png");
  velocCar[0] = random(int(2,6));
  velocCar[1] = random(int(2,6));
  velocCar[2] = random(int(2,6));
  velocCar[3] = random(int(2,6));
  velocCar[4] = random(int(2,6));
  velocCar[5] = random(int(2,6));
  soundTrack = loadSound("/sounds/soundtrack.mp3");
  collideSound = loadSound("/sounds/colision.mp3");
  scoreSound = loadSound("/sounds/score.wav");
}

function setup() {
  createCanvas(600, 400);
  soundTrack.loop();
}

function draw() {
  background(backImage);
  movCar();
  carReSpawn();
  movPlayer();
  playerCollision();
  scoreCouting();
  scoring();
  wall();
}

