const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object)

    var ground_options ={
        isStatic: true
    }

    ground= Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1
    }
   
    ball= Bodies.circle(200, 100, 20,ball_options);
    World.add(world,ball);


   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,20)
    ellipse(ball.position.x,ball.position.y,20)
}
