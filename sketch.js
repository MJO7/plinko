const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var divisionHeight = 300;
var width 
var k
var particles =[]
var plinkos = []
var divisions = []
  for(var k = 0; k <=width ; k=k+80){
divisions.push(new divisions(k , height-divisionHeight/2 , 10 , divisionHeight))
  }
for(var k = 0 ; k < divisions.length ; k++){
divisions[k].display();

}


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,10)

  //division1 = new Division(10 , 700,10,200)
  //division2 = new Division(100 , 700,10,200)
  //division3 = new Division(190 , 700,10,200)
  //division4 = new Division(280 , 700,10,200)
  //division5 = new Division(370 , 700,10,200)
  //division6 = new Division(460 , 700,10,200)
  
  plinko = new Plinko(200,200)
  particle = new Particle(200,200,20)
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  //division1.display();
  //division2.display();
  //division3.display();
  //division4.display();
  //division5.display();
  //division6.display();
  
  plinko.display();
  particle.display();
  drawSprites();
  
}
