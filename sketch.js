
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var backo,back;
var invg;
var survivaltime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 backo=loadImage("city bc.webp")
}



function setup() {
  createCanvas(500,400);

back=createSprite(400,200,7,7)
back.addImage(backo)
back.scale=2.4;
back.velocityX=-5;

  monkey=createSprite(50,350);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
   invg=createSprite(200,400,600,20)
  invg.visible=false;
  
  
  
  
  
  
  
  
}


function draw() {
background("white");
  monkey.collide(invg); 
  
  //console.log(monkey.y)
  Createbanana();
  createobs();
  
  if(back.x<0){
  back.x=back.width/2;
  
  }
  if (keyWentDown("space")&&monkey.y>=353){
  monkey.velocityY=-17;
    }
  
  
  monkey.velocityY=monkey.velocityY+1
  
  drawSprites();
  textSize(30);
  fill("black");
  textFont("bazooka")
  survivaltime=survivaltime+Math.round(getFrameRate()/60)
  text("survival Time :"+survivaltime,130,30)
  
  
  
}

function Createbanana(){
 if(frameCount%70===0){
  banana=createSprite(400,0,2,2)
  banana.addImage(bananaImage);
    banana.velocityX=-5;
  banana.scale=0.1
    banana.y=Math.round(random(200,230))
  banana.lifetime=100
  }
  
  
}
function createobs(){
  if(frameCount%100===0){        
 obstacle=createSprite(400,360,0,0); 
 obstacle.addImage(obstaceImage); 
 obstacle.velocityX=-5; 
  obstacle.scale=0.15;
  obstacle.lifetime=100
  }
}



