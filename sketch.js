
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var chain;
var mango1,mango2,mango3,mango4,mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

function preload()
{
 boyImage=loadImage('boy.png');	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,height,1200,20);
    tree=new Tree(590,700);

	stone=new Stone(140,600,20,20);

	boy=createSprite(200,640,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;
	
	mango1=new Mango(520,310,20);
	mango2=new Mango(600,300,20);
	mango3=new Mango(650,330,20);
	mango4=new Mango(550,250,20);
	mango5=new Mango(650,250,20);
	mango6=new Mango(630,200,20);
	mango7=new Mango(715,280,20);
	mango8=new Mango(445,310,20);
	mango9=new Mango(500,360,20);
	mango10=new Mango(635,142.5,20);
	mango11=new Mango(755,340,20);
	mango12=new Mango(530,190,20);



	

    chain=new Chain(stone.body,{x:140,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('orange');

  textSize(25);
  textFont('georgia');
 // textColor('black')
  text("`Press Space to Play!`",50 ,50);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();



 
chain.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);


 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    chain.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		chain.attach(stone.body);
	}
}


