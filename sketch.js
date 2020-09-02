
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,groundSprite;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	ground = Bodies.rectangle(400,630,800,20,{isStatic:true});
	World.add(world,ground);

	

	rectMode(CENTER);
	groundSprite = createSprite(400,670,800,20);

	ball = new Ball(150,350,30);

	bin1 = new Bin (570,590,20,100);
	
	bin3 = new Bin (700,590,20,100);
   




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();

   bin1.display();
 
   bin3.display();

 groundSprite.x = ground.position.x;
 groundSprite.y = ground.position.y;
  
  drawSprites();
 
}


function keyPressed(){
	if(keyDown("space")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0.17,y:-0.08});
	  }
	

}
