var boy,boyImage
var bug,bugImg
var bug1,bug1Img
var bug2,bug2Img
var sprite,spriteImg
var sprite2,sprite2Img
var sprite3,sprite3Img
var sprite4,sprite5,sprite6,sprite7
var door1 , door1Img
var door2,door2Img
var redDiamond,diamondImg1
var blueDiamond,diamondImg2
var fire,fireImg
var bgImg
var lives=3
var score=0
var gameState = "PLAY"

function preload(){
  boyImage = loadImage("images/boy.png")
  bugImg = loadImage("images/Bug.png")
  bug1Img = loadImage("images/Bug1.png")
  bug2Img = loadImage("images/Bug_2.png")
  spriteImg = loadImage("images/sprite.jpg")
  sprite2Img = loadImage("images/sprite2.jpg")
  sprite3Img = loadImage("images/sprite3.jpg")
  bgImg = loadImage("images/bg.jpg")
  door1Img = loadImage("images/door_image1.png")
  door2Img = loadImage("images/doorImg2.png")
  diamondImg1 = loadImage("images/redImg2.png")
  diamondImg2 = loadImage("images/diamondImg2.png")
  fireImg = loadImage("images/fireImage.png")
}
function setup() {
  createCanvas(1200,560);

  edges = createEdgeSprites()
  sprite = createSprite(600,640,20,20)
  sprite.addImage("sprite",spriteImg)
  sprite.scale = 2.9

  sprite2 = createSprite(300,320,20,20)
  sprite2.addImage("sprite2",sprite2Img)
  sprite2.scale = 4.5

  sprite3 = createSprite(600,300,20,20)
  sprite3.addImage("sprite3",sprite3Img)
  
  sprite4 = createSprite(1100,200,20,20)
  sprite4.addImage("sprite4",sprite3Img)
  sprite4.scale = 0.5

  sprite5 = createSprite(900,400,20,20)
  sprite5.addImage("sprite5",sprite3Img)
  sprite5.scale = 0.5

  sprite6 = createSprite(380,180)
  sprite6.addImage("sprite6",sprite2Img)
  sprite6.scale = 4.3

  sprite7 = createSprite(880,250)
  sprite7.addImage("sprite7",sprite3Img)
  sprite7.scale = 0.5

  sprite8 = createSprite(200,400)
  sprite8.addImage("sprite8",sprite2Img)
  sprite8.scale = 4.3

  boy = createSprite(100,460)
  boy.addImage("boy",boyImage)
  boy.scale = 0.3

  blueDiamond = createSprite(600,200)
  blueDiamond.addImage(diamondImg2)
  blueDiamond.scale = 0.1

  redDiamond = createSprite(880,300)
  redDiamond.addImage(diamondImg1)
  redDiamond.scale = 0.2

  blueDiamond1 = createSprite(250,280)  
  blueDiamond1.addImage(diamondImg2)
  blueDiamond1.scale = 0.1

  redDiamond1 = createSprite(300,100)
  redDiamond1.addImage(diamondImg1)
  redDiamond1.scale = 0.2

  blueDiamond2 = createSprite(1000,100)
  blueDiamond2.addImage(diamondImg2)
  blueDiamond2.scale = 0.1

  door1 = createSprite(1100,100)
  door1.addImage(door1Img)
  door1.scale = 0.5

  fire1 = createSprite(400,300)
  fire1.addImage(fireImg)
  fire1.scale = 0.5

  fire2 = createSprite(1000,180)
  fire2.addImage(fireImg)
  fire2.scale = 0.3

  fire3 = createSprite(750,180)
  fire3.addImage(fireImg)
  fire3.scale = 0.3

  fire4 = createSprite(500,160)
  fire4.addImage(fireImg)
  fire4.scale = 0.3
 boy.debug=false
  
 boy.setCollider("circle",0,0,100)
}

function draw() {
  background(bgImg);
  fill("Black")
  textSize(20)
  text("Lives: " +lives,30,30)
  text("Score: " +score,30,50)

 
  if(gameState === "PLAY"){
    if(keyDown("LEFT_ARROW")){
      boy.x = boy.x-5
    }
  
    if(keyDown("RIGHT_ARROW")){
      boy.x = boy.x+5
    }
  
    if(keyDown("SPACE")){
      boy.velocityY = -10
    }
  
    boy.velocityY = boy.velocityY+0.5
    boy.collide(sprite)
    boy.collide(sprite2)
    boy.collide(sprite3)
    boy.collide(sprite4)
    boy.collide(sprite5)
    boy.collide(sprite6)
    boy.collide(sprite7)
    boy.collide(sprite8)
    boy.collide(edges)
  
    if(boy.isTouching(fire1) || boy.isTouching(fire2) || boy.isTouching(fire3) || boy.isTouching(fire4)){
      lives = lives-1
      boy.x = 100
      boy.y = 460
    }
  
    if(boy.isTouching(blueDiamond)){
      score +=50
      blueDiamond.destroy()
    }
    if(boy.isTouching(blueDiamond1)){
      score +=50
      blueDiamond1.destroy()
    }
    if(boy.isTouching(blueDiamond2)){
      score +=50
      blueDiamond2.destroy()
    }
    if(boy.isTouching(redDiamond)){
      score +=100
      redDiamond.destroy()
    }
    if(boy.isTouching(redDiamond1)){
      score +=100
      redDiamond1.destroy()
    }
    if(score === 350 && boy.isTouching(door1)){
      textSize(45)
      fill("Blue")
      text("You Won",560,80)
      boy.destroy();
    }
    if(lives === 0){
      gameState = "END"
    }
  }
  if(gameState === "END"){
    textSize(45)
    fill("red")
    text("Game Over",560,80)
    boy.destroy()
  }

  

  drawSprites();
}