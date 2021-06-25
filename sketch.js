const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//level one
block1b = new Block(610,175,30,40);
console.log(block1);
block2b = new Block(640,175,30,40);
block3b = new Block(670,175,30,40);
block4b = new Block(700,175,30,40);
block5b = new Block(730,175,30,40);
block6b = new Block(760,175,30,40);
block7b = new Block(790,175,30,40);
//level two
block8b = new Block(640,135,30,40);
block9b = new Block(670,135,30,40);
block10b = new Block(700,135,30,40);
block11b = new Block(730,135,30,40);
block12b = new Block(760,135,30,40);
//level three
block13b = new Block(670,95,30,40);
block14b = new Block(700,95,30,40);
block15b = new Block(730,95,30,40);
//top
block16b = new Block(700,55,30,40);

  ball=Bodies.circle(50,200,20)
  World.add(world,ball)
  slingShot=new SlingShot(this.ball,{x:100,y:200})
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display()
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block1b.display();
  block2b.display();
  block3b.display();
  block4b.display();
  block5b.display();
  block6b.display();
  block7b.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block8b.display();
  block9b.display();
  block10b.display();
  block11b.display();
  block12b.display();
  fill("turquoise");
  block13b.display();
  block14b.display();
  block15b.display();
  fill("grey");
  block16.display();
  block16b.display();
 fill("gold")
imageMode (CENTER)
image(polygon_img ,ball.position.x,ball.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}