var bullet, wall;
var speed, mass;
var thickness

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1500, 200, thickness, height/2);
  speed = random(223, 321)
  mass = random(30, 52)

  bullet.velocityX = speed;
  bullet.shapeColor = color(255, 255, 255)
  bullet.depth = wall.depth + 50
}




function draw() {
  background(0);  
  
  

  

  if (hasCollided(bullet, wall)){
      
      bullet.velocityX = 0

      var damage = 0.5 * mass * speed * speed/(thickness*thickness*thickness)

        console.log(damage)

      if(damage<10){

        wall.shapeColor = color(0, 255, 0);

      }

      if(damage>10){

        wall.shapeColor = color(255, 0, 0);

      }

  }
  drawSprites();

}


function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x
  if (bulletRightEdge >= wallLeftEdge){

    return true;
  }

  return false;

}