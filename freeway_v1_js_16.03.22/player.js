var imgPlayer;
//Player [x,y]
var playerPos = [70,370];
var score = 0;

function movPlayer(){
  image(imgPlayer, playerPos[0], playerPos[1], 30, 30);
  if(keyIsDown(DOWN_ARROW)){
    playerPos[1] += 3;
  }
  if(keyIsDown(UP_ARROW)){
    playerPos[1] -= 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    playerPos[0] -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    playerPos[0] += 3;
  }
}
  
function playerCollision(){
  for(var i = 0; i < xCar.length; i += 1){
    if(playerPos[0] + 30 > xCar[i] && 
       playerPos[0] < xCar[i] + 50 && 
       playerPos[1] + 30 > yCar[i] && 
       playerPos[1] < yCar[i] + 40){
        playerPos[1] = 370;
        score -= 1;
        for(var j = 0; j < xCar.length; j += 1){
        velocCar[j] = random(int(3,6)) + score;}
        collideSound.play();
      }
  }
}

function scoreCouting(){
  stroke (255);
  textSize(20);
  textAlign(CENTER);
  fill(255);
  fill(0, 200, 0);
  rect(340, 6, 40, 25);
  fill(255);
  text(score, 360, 26);
}

function scoring(){
  if(playerPos[1] < 0){
    score += 1;
    playerPos[1] = 370;
    for(var i = 0; i < xCar.length; i += 1){
    velocCar[i] = random(int(3,6)) + score;}
    scoreSound.play();
  }
}

function wall(){
  if(playerPos[1] + 30 > 400){
    playerPos[0] = playerPos[0];
    playerPos[1] = 370;
  }
  if(playerPos[0] < 0){
    playerPos[1] = playerPos[1];
    playerPos[0] = 0;
  }
  if(playerPos[0] + 30 > 600){
    playerPos[1] = playerPos[1];
    playerPos[0] = 570;
  }
}