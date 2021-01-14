
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,height,800,20);
box1=new Box(600,685,250,10);
box2=new Box(725,638,10,100);
box3=new Box(475,638,10,100);
ball = new Paper(150,50,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
box1.display();
 box2.display();
 box3.display();
 ball.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-35});
	}
}


