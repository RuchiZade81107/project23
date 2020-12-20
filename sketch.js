var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 leftwall=createSprite(width/2-100,600,20,100)
	 leftwall.shapeColor="red"
	 leftbox=Bodies.rectangle(width/2-80,600,20,100,{isStattic:true})
	 World.add(world,leftbox)
	 
	 rightwall=createSprite(width/2+100,600,20,100)
	 rightwall.shapeColor="red"
	 rightbox=Bodies.rectangle(width/2+120,600,20,100,{isStattic:true})
     World.add(world,rightbox)

	 basewall=createSprite(width/2,640,200,20)
	 basewall.shapeColor="red"
	 basebox=Bodies.rectangle(width/2,625,200,20,{isStattic:true})
     World.add(world,basebox)
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false)
    
  }
}



