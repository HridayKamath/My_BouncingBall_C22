const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }


    ground = Bodies.rectangle(250,490,500,20,ground_options);
    World.add(world,ground);
    //console.log(ground);
    
    var ball_options = {
        restitution: 1.2
    }

    ball = Bodies.circle(150,100,50,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(350,100,20,ball_options);
    World.add(world,ball2);
    

}

function draw(){
    background("skyblue");
    Engine.update(engine);
    fill("green");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,500,20);

    
    ellipseMode(RADIUS);
    fill("red");
    stroke ("red");
    ellipse(ball.position.x, ball.position.y, 50, 50);
    fill("yellow");
    noStroke();
    ellipse(ball2.position.x, ball2.position.y,20, 20);

    


}