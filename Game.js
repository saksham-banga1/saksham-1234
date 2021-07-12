class Game{
 constructor(){

 }

 start(){
     home = new Home()
     home.display
 }

 play(){
    home.hide()

    if(car.y<monster.y){
        monster.velocityY = -1
    
      }
    
      if(keyDown(LEFT_ARROW)){
       // updateHeight(0,-10)
        //balloon.addAnimation("hotAirBalloon",balloonImage2);
        //balloon.scale= balloon.scale-0.01
        car.x = car.x-2
        
      }
      else if(keyDown(RIGHT_ARROW)){
        //balloon.addAnimation("hotAirBalloon",balloonImage2);
       // updateHeight(0,-10)
        //balloon.scale= balloon.scale-0.01
        car.x = car.x+2
      }
      else if(keyDown(UP_ARROW)){
       // balloon.addAnimation("hotAirBalloon",balloonImage2);
       // updateHeight(0,-10)
       // balloon.scale= balloon.scale-0.01
       car.y = car.y-2
      }
     drawSprites();
 }
}