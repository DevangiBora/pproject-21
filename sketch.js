var wall, thickness;
var bullet, speed, weight; 




function setup() {
  createCanvas(1600,400);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  bullet = createSprite(50, 200, 70, 10);
  bullet.shapeColor =("grey");
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);


  
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness);

  if(damage>10)
  {
      wall.shapeColor = ("red");
  }

  if(damage<10)
  {
      wall.shapeColor = ("green");
  }

}
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bullet.position.x=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bullet.position.x>=wallLeftEdge)
  {
    return true;
  }
  return false;
}




