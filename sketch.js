const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,hammer;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    stone = new Stone(200,300,50,50);
    hammer = new Hammer(240,100,100,20);
    ground = new Ground(200,height,400,20);
    rubber = new Rubber(100,300,50);
}

function draw(){
    background("black");
    Engine.update(engine);
    
    stone.display();
    hammer.display();
    ground.display();
    rubber.display();
}