function Castle(){
  this.x = 0
  this.y = 0
  this.xSize = 120
  this.ySize = height
  this.increments = 30

  this.draw = function(){
    stroke(73, 80, 91)
    fill(73, 80, 91)
    rect(this.x, this.y, this.xSize, this.ySize)
    for(i = 0; i < this.ySize; i += 2 * this.increments){
      stroke(73, 80, 91)
      fill(73, 80, 91)
      rect(this.xSize, i, this.increments, this.increments)
    }
  }
}
