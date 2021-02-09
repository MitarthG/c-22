const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld,object;
var ball;

function setup(){
  var canvas=createCanvas(400,400);

  myEngine=Engine.create();
  // myWorld is myEngines's World
  myWorld=myEngine.world;

  var options={
    isStatic : true
  }

  object=Bodies.rectangle(100,300,200,20,options);
  World.add(myWorld,object);
  console.log(object);

  var ballOptions={
    restitution : 3
  }

ball=Bodies.circle(100,50,26,ballOptions);
World.add(myWorld,ball);

}
function draw()
{
  background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,200,20);
  ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,26,26)
}