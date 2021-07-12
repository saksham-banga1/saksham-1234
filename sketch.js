var car,monster1,monster2,monster3,monster4,rockies,track,treasure, background;
var carImg, monster1Img, monster2Img, monster3Img, monster4Img,rockies,backgroundImg
var gameState = 0;



function preload(){
  carImg = loadImage( "car.png")
  backgroundImg = loadImage("jpg.png")
}

function setup(){
  createCanvas(500,500)
  car = createSprite(200,450,10,10)
  car.addImage(carImg)
  
  monster = createSprite(200,490,10,10)
  
game = new Game()
}




function draw(){
  background("white")

  if (gameState === 1){
    game.play()
  }
}
