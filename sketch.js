var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400,200,100,50)
  movingRect= createSprite(200,300,50,100)
}

function draw() {
  background(0,255,255);  
  movingRect.x=mouseX
  movingRect.y=mouseY

  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
fixedRect.shapeColor= "red"
movingRect.shapeColor= "red"
  }
  else{
    fixedRect.shapeColor= "green"
    movingRect.shapeColor= "green"
  }
  drawSprites();
}