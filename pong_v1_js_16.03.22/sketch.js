//screen
var wid = 800;
var heig = 600;
//Ball Caracteristics
var xBall = wid/2;
var yBall = heig/2;
var diameter = 20;
var radius = diameter/2;
//Ball Velocity
var velocxBall = 5;
var velocyBall = 5;
//Racket Caracteristics
var racketX = 10;
var racketY = 20;
//My Racket Position
var racketW = 5;
var racketH = 100;
//IA Racket Position
var IAracketX = wid - 15;
var IAracketY = 100;
//Pontuation
var myPoint = 0;
var iaPoint = 0;
//Sounds
var raquetada;
var ponto;
var trilha;

function preload(){
  raquetada = loadSound("/raquetada.mp3");
  ponto = loadSound("/ponto.mp3");
  trilha = loadSound("/trilha.mp3");
}

function setup() {
  createCanvas(wid, heig);
  trilha.loop();
}

function draw() {
  background(0, 0, 0);
  points();
  elements();
  movBall();
  colControl();
  movRacket();
  IAmovRacket();
  countPoints();
}

function elements(){
  //Ball
  circle(xBall, yBall, diameter);
  //My Racket
  rect(racketX, racketY, racketW, racketH);
  //IA Racket
  rect(IAracketX, IAracketY, racketW, racketH);
}

function movBall(){
  xBall += velocxBall;
  yBall += velocyBall;
}

function colControl(){
  //Wall Collision
  if (xBall + radius  > width || xBall - radius < 0) {
    velocxBall *= -1;
    ponto.play();
  }
  if (yBall + radius > height || yBall - radius < 0) {
    velocyBall *= -1;
  }
  //Racket Collision
  if (xBall - radius < racketX + racketW && yBall > racketY && yBall < racketY + racketH) {
    velocxBall *= -1;
    raquetada.play();
  }
  //IARacket Collision
  if (xBall + radius > IAracketX && yBall > IAracketY && yBall < IAracketY + racketH) {
    velocxBall *= -1;
    raquetada.play();
  }

}

function movRacket(){
  if(keyIsDown(UP_ARROW)){
    racketY -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    racketY += 5;
  }
}

function IAmovRacket(){
  //Jogo SP Habilitar esse opçao
  //IAracketY = yBall - 50;
  //Jogo MP Habilitar essa opçao
  if(keyIsDown(87)){
    IAracketY -= 5;
  }
  if(keyIsDown(83)){
    IAracketY += 5;
  }
}

function points(){
  stroke (255);
  textSize(20);
  textAlign(CENTER);
  fill(255);
  fill(0, 200, 0);
  rect(340, 6, 40, 25);
  rect(420, 6, 40, 25);
  fill(255);
  text(myPoint, 360, 26);
  text(iaPoint, 440, 26);
  
}

function countPoints(){
  
  if (xBall - radius < 0){
      iaPoint += 1;
      }
  if (xBall + radius > wid){
      myPoint += 1;
      }
}