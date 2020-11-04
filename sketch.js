const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ground1;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground1_options={
        restitution:0.5
    }
    var ground_options ={
        isStatic: true
    }
 ground1 = Bodies.rectangle(100,200,200,20,ground1_options);
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    ball = Bodies.circle(200,200,20,ground1_options);
    World.add(world,ground);
    World.add(world,ground1);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    rectMode(CENTER);
    rect(ground1.position.x,ground1.position.y,50,50);
   rectMode(CENTER);
   
    rect(ground.position.x,ground.position.y,400,20);
    
}