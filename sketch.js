var track,trackImg
var axonImg,axon
var invisbleGround,invisbleground2

function preload(){
  //pre-load images
 trackImg = loadImage("path.png");
 axonImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup() {
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImg);
  track.velocityY=2
  track.scale = 1;
 
  
  axon = createSprite(30,100)
  axon.addAnimation("running",axonImg);
  axon.scale = 1;
  axon.x = 15;
  

  edges = createEdgesSprite();

  invisibleGround = createSprite(0,100,10,600);
  invisibleGround.visble = false;

  invisibleGround2 = createSprite(400,95,10,600);
  invisibleGround2.visble = false;

}


function draw() {
  background(0);
  if(track.y > 400) {
    track.y = height/2;
  }



  axon.velocityX = World.mouseX;
  

  axon.collide(invisibleGround);
  axon.collide(invisibleGround2);
  axon.collide(invisibleGround3);


  drawSprites();
}
