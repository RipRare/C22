var fixedRect,movingRect;
var r1,r2
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  r1 = createSprite(100,100,100,100)
  r2 = createSprite(100,300,100,100)
r1.velocityY = 3
r2.velocityY = -3
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,r1)){
    movingRect.shapeColor ="blue";
    r1.shapeColor = "blue";
  }
else if(isTouching(movingRect, fixedRect))
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";


}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
r1.shapeColor = "green";
}
bounceOff(r1,r2)

  drawSprites();
}
