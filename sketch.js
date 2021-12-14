
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var blade
var angle=60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

btn1 = createImg("up.png")
btn1.position(20,30);
btn1.size(50,50);
btn1.mouseClicked(vForce)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  blade = Bodies.rectangle(100, 300, 100,20,ground_options);
  World.add(world,blade);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(blade,angle)
 push();
  translate(blade.position.x,blade.position.y)
  rotate(angle)
  rect(0,0,100,20);
 pop();
  angle+= 0.1
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 

 
console.log(ground.position.y);

 function vForce(){
   Matter.body.applyforce(ball, {x:0,y:0}, {x:0,y:-0.05})
 } 
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  