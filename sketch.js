var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  thickness = Math.round(random(22,83));
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,0,80);

  bullet = createSprite(10, 200, 10, 30);
  bullet.shapeColor = "white";

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  
}

function draw() {
  background("black");
  
  bullet.velocityX = speed


  if(bullet.isTouching(wall)){
     bullet.velocityX = 0;
  var damage = 0.5 *  weight * speed * speed/(thickness * thickness * thickness);

    if(damage<10){
      wall.shapeColor = "green";
    }

    if(damage>10){
      wall.shapeColor = "red";
    }
  }
 drawSprites();
}