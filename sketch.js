
var sun
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune
var mercury1 ,venus1,earth1,mars1,jupiter1,saturn1,uranus1,neptune1
var sun1
var angle=0.2;
var angleSpeed=0.2;

function preload(){
sun1=loadImage("sun_PNG13426.png")
mercury1=loadImage("merc.png")
venus1=loadImage("ven.png")
earth1=loadImage("ea.png")
mars1=loadImage("ma.png")
jupiter1=loadImage("jup.png")
saturn1=loadImage("sat.png")
uranus1=loadImage("ur.png")
neptune1=loadImage("neptune.png")

}

function setup() {
  createCanvas(1200,1200);
 // translate(width/2,height/2)
  sun=createSprite(0, 0, 50, 50);
  sun.addImage("sun",sun1);
  sun.scale=0.10

  mercury=createSprite(-40,-50,20,20);
  mercury.addImage("mercury",mercury1);
  mercury.scale=0.025;

  
 
  venus=createSprite(-10,-100,20,30)
  venus.addImage("VENUS",venus1)
  venus.scale=0.08

  translate(width/2,height/2)
  earth=createSprite(-80,-120,30,30)
  earth.addImage("earth",earth1)
  earth.scale=0.03
 
  mars=createSprite(-50,-190,30,30);
  mars.addImage("mars",mars1)
  mars.scale=0.07
 

  jupiter=createSprite(0,-260,30,30);
  jupiter.addImage("jupiter",jupiter1)
  jupiter.scale=0.2

  
  saturn=createSprite(60,-350,30,30);
  saturn.addImage("saturn",saturn1)
  saturn.scale=0.12

  
  uranus=createSprite(120,-400,30,30);
  uranus.addImage("uranus",uranus1)
  uranus.scale=0.025

  

  neptune=createSprite(-250,-480,30,30);
  neptune.addImage("neptune",neptune1)
  neptune.scale=0.04


  
 
}
function draw() {

 
background(0);
//drawSprites();
angleMode(DEGREES); 
translate(width / 2, height / 2); 
rotate(angle); 
   drawSprites();
   if (sun.collide(mercury)) 
   { mercury.destroy(); 
  } 
   angle = angle + angleSpeed; 
   //if (frameCount % 1 === 0) 
  // { sun.scale = sun.scale + 0.01; } 
   
   //drawSprites();
   

}


