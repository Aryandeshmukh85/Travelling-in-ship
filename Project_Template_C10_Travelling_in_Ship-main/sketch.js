var ship,ship_running,sea_image;
function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_image=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
   ship= createSprite(50,160,20,50);
    ship.addAnimation("running",ship_running);
    
    //adding scale and position to trex
    ship.scale = 0.5;
    ship.x = 50
    sea_image=createSprite(200,180,400,20);
    sea_image.addImage("ground",sea_image);
}

function draw() {
  background("blue");
   //set background color 
   sea_image.velocityX=-2
   if(sea_image.x<0)
 {
 sea_image.x=sea_image.width/2;
 }
 drawSprites();
}