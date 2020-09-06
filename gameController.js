var myCastle,
    myTank,
    myGun,
    myScore,
    myBullets = [],
    myMissiles = [],
    loseA,
    yourScore = 0

function setup(){
  createCanvas(1200,600)
  myCastle = new Castle()
  myTank = new Tank()
  myGun = new Gun(myTank)
  let timerId = setInterval(() => myMissiles.push(new Missiles()), 3000)
  myScore = new Score(yourScore)
}
/*function Collision(aMissile, aBullet){
  if (aBullet.x > aMissile.x && aBullet.x < aMissile.x + aMissile.w){
    if(aBullet.y > aMissile.y && aBullet.y < aMissile.y + aMissile.h){
      collide = true
    }

  }
  if(aBullet.y > aMissile.y && aBullet.y < aMissile.y + aMissile.h){
    if (aBullet.x > aMissile.x && aBullet.x < aMissile.x + aMissile.w){
      collide = true

    }

  }
  else{
  collide = false
  }
}
*/
function yourScore(){

}
function draw(){
  frameRate(30)
  background(93, 151, 244)
  myCastle.draw()
  myTank.draw()
  myTank.movement()
  myGun.draw(myTank)


  //Collision(myMissiles, myBullets)
  for(i=0; i < myMissiles.length; i++){
    var collide = myMissiles[i].Collision(myBullets)
    loseA = myMissiles[i].L(myCastle)
    if(loseA) {
      //if(collide == false){
      //  myMissiles[i].draw()
      //  myMissiles[i].move()
      break;
      }


    console.log(collide)
    if (collide == -1){
      myMissiles[i].draw()
      myMissiles[i].move()
    }
    else if(collide != -1){
      myMissiles.splice(i, 1)
      //if (i % 2 == 0){
      //  myMissiles.shift()
      //}
      //else if(i % 2 == 1){
      //  myMissiles.pop()
      //}

        if(!loseA){
          yourScore += 1

        }

    }

    //textFont('Georgia')

    //collision



      //}
    //else if ( lose == true){
      //break;
    //}
  }
  myScore.draw(yourScore)
  //strokeWeight(1)
  //textSize(20)
  //text("Your score is: " + yourScore, 2*width/3, height/8)

  if (myBullets.length > 0){
    for (i = 0; i < myBullets.length; i++){
      //if (collide == false){
        myBullets[i].update()
        myBullets[i].draw()
      //}
      if(myBullets[i].x > width || myBullets[i].x < 0 || myBullets[i].y > height || myBullets[i].y < 0){
        myBullets.pop(myBullets[i])
      }
    }

  }




  //myBullet.draw(myGun)
  //myBullet.fire(myGun)

}
function mousePressed(){
  //myBullet.draw(myGun)
  myBullets.push(new Bullet(myGun))




    //myBullet.update(myGun)

  //this.x += this.x - this.originX
  //this.y += this.y - this.originY
  console.log('click')
}
