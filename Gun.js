function Gun(aTank){
  this.x = aTank.x
  this.y = aTank.y
  this.len = 50
  this.radius = 5
  //this.fakeLength = sqrt(sq(mouseY - this.y) + sq(mouseX - this.x))
  this.angle = atan2( mouseY - this.y , mouseX - this.x)
  this.endX = this.len * cos(this.angle)
  this.endY = this.len * sin(this.angle)


  this.draw = function(aTank){
    this.x = aTank.x
    this.y = aTank.y
    this.len = 50
    //this.fakeLength = sqrt(sq(mouseY - this.y) + sq(mouseX - this.x))
    this.angle = atan2( mouseY - this.y , mouseX - this.x)
    this.endX = this.len * cos(this.angle)
    this.endY = this.len * sin(this.angle)
    stroke(39, 81, 4)
    strokeWeight(20)

    ellipse(this.x, this.y, 2*this.radius )
    line(this.x, this.y, this.x + this.endX, this.y + this.endY)
  }




  //this.move = function(){
  //  this.xSize = mouseX
    //this.ySize = mouseY

  //}
}
