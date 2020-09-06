function Bullet(aGun){

  this.x = aGun.x + aGun.endX
  this.y =  aGun.y + aGun.endY
  this.xSpeed = aGun.endX
  this.ySpeed = aGun.endY
  this.radius = 2

  this.draw = function(){

    fill(193, 179, 46)
    stroke(193, 179, 46)
    ellipse(this.x, this.y, 2*this.radius, 2*this.radius)

  }
  this.update = function(){





    this.x += this.xSpeed
    this.y += this.ySpeed
    //fill(193, 179, 46)
    //stroke(193, 179, 46)
    //ellipse(this.x, this.y, 2*this.radius, 2*this.radius)
  }
  this.collision = function(aMissile){
    if (this.x > aMissile.x && this.x < aMissile.x + aMissile.w){
      if(this.y > aMissile.y && this.y < aMissile.y + aMissile.h){
        return true
      }

    }
    if(this.y > aMissile.y && this.y < aMissile.y + aMissile.h){
      if (this.x > aMissile.x && this.x <aMissile.x + aMissile.w){
        return true

      }

    }
    else{
     return false
    }

}
}
  /*function mousePressed(){
    //this.x += this.x - this.originX
    //this.y += this.y - this.originY
    console.log('click')
  }
  this.fire = function(aGun){
    this.x = aGun.endX
    this.y = aGun.endY
    this.originX = aGun.x
    this.originY = aGun.y
    //this.angle = atan2( mouseY - this.y , mouseX - this.x)
    function mousePressed(){
      this.x += this.x - this.originX
      this.y += this.y - this.originY
      console.log('click')
    }
  }*/
