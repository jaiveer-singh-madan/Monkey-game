
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime=0;
var score=0;
var ground;
var rand;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

  monkey= createSprite(50,550,5,5);
  monkey.addAnimation("bandar", monkey_running);
  monkey.scale=0.2;
  
  ground= createSprite(300,550,600,20);
  
  foodGroup= new Group();
  obstaclesGroup= new Group();
}


function draw() {
  background(220);
  
  //the reason for the ground not being how it was in the trex is due to the fact that there is no animation/image for it, i have tried to make it look as realistic as possible
  
  if((keyDown("SPACE"))&&(monkey.y>120)){
    monkey.velocityY= -8;
  }
  monkey.velocityY= monkey.velocityY+1;
  
  ground.velocityX=-8;
  if(ground.x<250){
    ground.x= width/2;
  }
  
  monkey.collide(ground);
  
  survivalTime= Math.ceil(frameCount/frameRate());
  textSize(20);
  text("Survival Time: "+ survivalTime, 100,50);
  
  spawnfruit();
  spawnObs();
  drawSprites();
}


function spawnfruit(){
  
  if(frameCount%80===0){
    banana= createSprite(600,120,50,50);
    banana.y= Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX= -5;
    banana.lifetime=120;
    foodGroup.add(banana);
  }
}

function spawnObs(){
  
  if(frameCount%300===0){
    obstacle= createSprite(600,500,5,5);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.3;
    obstacle.velocityX=-5;
    obstacle.lifetime=120;
    obstaclesGroup.add(obstacle);
  }
}



