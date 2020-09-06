function Tank(){
  this.x = 300
  this.y = height / 2
  this.xSpeed = 5
  this.ySpeed = 5
  this.radius = 30
  this.smallRadius = 10

  this.draw = function(){
    fill(0, 255, 0)
    stroke(0, 255, 0)
    ellipse(this.x, this.y, 2 * this.radius)
    fill(0, 255, 255)
    stroke(0, 255, 255)
    ellipse(this.x, this.y, 2 * this.smallRadius)
  }

  this.movement = function(){
    if (keyIsDown("68") && this.x + this.radius < width){
      this.x += this.xSpeed
      console.log("r")
    } if(keyIsDown("65")&& this.x - this.radius > 150){
      this.x -= this.xSpeed
    } if(keyIsDown("87") && this.y - this.radius > 0){
      this.y -= this.ySpeed
    }if(keyIsDown("83") && this.y + this.radius < height){
      this.y += this.ySpeed
    }

  }

}
