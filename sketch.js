var fr,mr;
var o1,o2,o3,o4;

function setup() {

  createCanvas(800,400);

  fr=createSprite(200,200,50,50);//x,y,w,h
  mr=createSprite(200,250,70,30);
  o1=createSprite(100,100,70,70);
  o2=createSprite(200,100,70,70);
  o3=createSprite(300,100,70,70);
  o4=createSprite(400,100,70,70);

  o1.shapeColor="red";
  o2.shapeColor="red";
  o3.shapeColor="red";
  o4.shapeColor="red";

  fr.shapeColor="orange";
  mr.shapeColor="orange";

  fr.debug=true;
  mr.dubug=true;
  mr.velocityY=-5;
  o4.velocityY=+5;
  
}

function draw() {
  
  background("lightblue");

    mr.x=mouseX;
    mr.y=mouseY;
  if(isTouching(mr,o2)){//yes
    mr.shapeColor="cyan";
    fr.shapeColor="cyan";
  }else {//no
    mr.shapeColor="purple";
    fr.shapeColor="purple";
  }
   bounceOff(mr,o4) 
  drawSprites();
}
function isTouching(o1,o2){//arguments
  if (o1.x-o2.x<o2.width/2+o1.width/2 &&
    o2.x-o1.x<o2.width/2+o1.width/2 &&
    o1.y-o2.y<o2.height/2+o1.height/2&&
    o2.y-o1.y<o2.height/2+o1.height/2){
    return true;//yes
  }
  else{
    return false;//no
  }
}
function bounceOff(o1,o2){
  if(o1.x-o2.x<o2.width/2+o1.width/2 &&
    o2.x-o1.x<o2.width/2+o1.width/2){
      o1.velocityX=o1.velocityX*(-1);
      o2.velocityX=o2.velocityX*(-1);
    }
    if(o1.y-o2.y<o2.height/2+o1.height/2&&
      o2.y-o1.y<o2.height/2+o1.height/2){
        o1.velocityY=o1.velocityY*(-1);
      o2.velocityY=o2.velocityY*(-1);
      }

}