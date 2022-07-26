//Config. car
var imgCar = [0,0,0,0,0,0];
var xCar = [600,600,600,600,600,600];
var yCar = [40,95,150,210,265,320];
var velocCar = [1,1,1,1,1,1];
var velocs = [1,2,3,4,5,6];

function movCar(){
  for(var i = 0; i < imgCar.length; i += 1){
  image(imgCar[i], xCar[i], yCar[i], 50, 40);
  xCar[i] -= velocCar[i];
  }
}

function carReSpawn(){
  for(var i = 0; i < imgCar.length; i += 1){
  if (xCar[i] < -50)
    xCar[i] = 600;
  }
}
