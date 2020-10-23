
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){    
 monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600, 200);
  
monkey= createSprite(50,140,20,50);
monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;
  
  
  
  ground = createSprite(500,180,400,20);
   ground.x = ground.width /2;
    
  invisibleGround = createSprite(500,180,400,20);
  invisibleGround.visible = true;
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
}


function draw() {
  createCanvas(600,600);
  
  if(keyDown("space")&&monkey.y>=100) {
    monkey.velocityY = -10;

  }
 
      monkey.velocityY = monkey.velocityY + 0.1;
  
  Obstacle();
  Banana();
  
drawSprites();
  
}

function Obstacle(){
  if (frameCount % 60 === 0){
   var obstacle= createSprite(500,160,40,10);
      obstacle.velocityX = -(20 + score/100);
       var rand = Math.round(random(12,10));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;

  }
}

function Banana(){
  if (frameCount % 60 === 0){
   var banana= createSprite(500,100,40,10);
      banana.velocityX = -(20 + score/100);
       var rand = Math.round(random(12,10));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;

  }
}






