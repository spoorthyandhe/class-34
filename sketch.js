
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engin,world;
var rope,box1,box2,box3;
var box4,box5,box6,box7;
var box8,box9,box10,ground;
var ball;
var box11,box22,box13;
var box14,box15,box16,box17;
var box18,box19,box20;

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(600,750,1200,20);
//level1
box1=new Box(500,700,30,30);
box2=new Box(500,670,30,30);
box3=new Box(500,650,30,30);
box4=new Box(500,630,30,30);
box5=new Box(500,600,30,30);
box6=new Box(500,580,30,30);
box7=new Box(500,550,30,30);
box8=new Box(500,530,30,30);
box9=new Box(500,510,30,30);
box10=new Box(500,490,30,30);
//level2
box11=new Box(600,700,30,30);
box12=new Box(600,670,30,30);
box13=new Box(600,650,30,30);
box14=new Box(600,630,30,30);
box15=new Box(600,600,30,30);
box16=new Box(600,580,30,30);
box17=new Box(600,550,30,30);
box18=new Box(600,530,30,30);
box19=new Box(600,510,30,30);
box20=new Box(600,490,30,30);

ball=new Ball(300,300,80,80)

rope = new Rope(ball.body, { x: 300, y: 300 });

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();
  rope.display();

		}
		
		function mouseDragged() { 
			Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
		 }

