function Missiles(){
  this.x = width - 20
  this.y = random(50, height-50)
  this.h = 30
  this.w = 20
  this.destroyed = false

  this.xSpeed =  random(1, 3)

  this.draw = function(){
    if(this.destroyed != true){
      stroke(255,0,0)
      fill(255,0,0)
      rect(this.x, this.y, this.w, this.h)
    }
  }
  this.move = function(){
    this.x -= this.xSpeed

  }
  this.Collision = function(aBulletList){
    for(x=0; x< aBulletList.length ; x++){
         if (aBulletList[x].x > this.x && aBulletList[x].x < this.x + this.w && aBulletList[x].y > this.y && aBulletList[x].y < this.y + this.h){
           //if(aBulletList[x].y > this.y && aBulletList[x].y < this.y + this.h){

             this.destroyed = true
            
             return x

           //}
        }

         //if(aBulletList[x].y > this.y && aBulletList[x].y < this.y + this.h){
           //if (aBulletList[x].x > this.x && aBulletList[x].x <this.x + this.w){

            // this.destroyed = true
            //  return x
          // }



         }

         return -1
   }
  /*this.collision = function(aBullet){

         if (aBullet.x > this.x && aBullet.x < this.x + this.w){
           if(aBullet.y > this.y && aBullet.y < this.y + this.h){
             return true
           }

         }
         if(aBullet.y > this.y && aBullet.y < this.y + this.h){
           if (aBullet.x > this.x && aBullet.x <this.x + this.w){
             return true

           }

         }
         else{
          return false
         }

     }*/
this.L = function(aCastle){
  if (this.x < aCastle.x + aCastle.xSize + aCastle.increments){
    strokeWeight(1)
    fill(255, 0, 0)
    stroke(255,0,0)
    textSize(50)
    text("Game Over!", width/2, height/2)
    this.destroyed = true
    return true
  }
  else{
    return false

  }

}

/* this.collision = function(aBulletList){
    if (aBulletList.length > 0){
      for (i = 0; i < aBulletList.length; i++){

        if (aBulletList[i].x > this.x && aBulletList[i].x < this.x + this.w){
          if(aBulletList[i].y > this.y && aBulletList[i].y < this.y + this.h){
            return true
          }

        }
        if(aBulletList[i].y > this.y && aBulletList[i].y < this.y + this.h){
          if (aBulletList[i].x > this.x && aBulletList[i].x <this.x + this.w){
            return true

          }

        }
        else{
        return false
        }
      }
    }
  }*/


}
