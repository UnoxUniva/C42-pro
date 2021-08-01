var bgImg
var iss,issImg
var spacecraft,craftImg1,craftImg2,craftImg3,craftImg4
var spaceAnimation
var hasDocked
var random1

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(400, 200, 50, 50)
  iss.addImage(issImg)

  hasDocked = false

  random1 = createSprite(330, 230, 50, 50)
  spacecraft = createSprite(30,300,30,30)
  // spacecraft.addAnimation("flying",craftImg1)
  spacecraft.scale=0.2

  // dock = createSprite(340, 240, 50, 50)

}

function preload(){
  bgImg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  craftImg1 = loadImage("spacecraft1.png")
  craftImg2 = loadImage("spacecraft2.png")
  craftImg3 = loadImage("spacecraft3.png")
  craftImg4 = loadImage("spacecraft4.png")

  spaceAnimation = loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png")

}

function draw() {
  // background(bgImg);  
  background("white");  
  
  // spacecraft.addAnimation(spaceAnimation)
  spacecraft.addAnimation("flying",spaceAnimation)
  
  if(keyIsDown(UP_ARROW)){
    spacecraft.velocityY = -3
    // spacecraft.addAnimation("flying1",craftImg1)
  }else if(keyIsDown(DOWN_ARROW)){
    spacecraft.velocityY = 3
    // spacecraft.addAnimation("flying2",craftImg2)
  }else if(keyIsDown(LEFT_ARROW)){
    spacecraft.velocityX = -3
    // spacecraft.addAnimation("flying3",craftImg3)
  }else if(keyIsDown(RIGHT_ARROW)){
    spacecraft.velocityX = 3
    // spacecraft.addAnimation("flying4",craftImg4)
  }else{
    spacecraft.velocityX = 0
    spacecraft.velocityY = 0
    
  }

  if(spacecraft.isTouching(random1)){
   text("Docking Successful",650,200)
  //  textFill("green")
  //  textSize(304)
  }

  drawSprites();
}