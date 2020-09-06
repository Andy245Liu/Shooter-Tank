function Score(aScore){
  this.x = 2*width/3
  this.y = height/10

  this.draw = function(aScore){

    //strokeWeight(1)
    textSize(20)
    fill(255,255,255)
    text("Your score is: " + aScore, this.x, this.y)
  }



}
