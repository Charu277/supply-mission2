var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
} 

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	packageSprite=createSprite(650, 650,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;

	box1=createSprite(300,685,20,150);
	box1.shapeColor="red";
	box2=createSprite(500,685,20,150);
	box2.shapeColor="red";
	box3=createSprite(399,765,220,20);
	box3.shapeColor="red";
	

	packageBody = Bodies.circle(400 ,220 , 5 , {restitution:0.4, isStatic:true})
	World.add(world, packageBody);
	
  
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
    
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background(98);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

	
 drawSprites();
}
function keyPressed(){
	if(keyCode===DOWN_ARROW){   
		Matter.Body.setStatic(packageBody,false)
		packageSprite.x=packageBody.position.x
		packageSprite.y=packageBody.position.y
	}
	
}   
 


        
  





