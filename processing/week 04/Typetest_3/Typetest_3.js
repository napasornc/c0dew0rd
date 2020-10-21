
function preload() {
  Montserrat = loadFont ('data/Montserrat-Regular.otf'); 
  OratorStd = loadFont ('data/OratorStd.otf');  
}
var spin=0;
var letterSize=42;

function setup() {
  createCanvas(600,600);
  background(255-50); 
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}

function draw() {
  fill(0); 
  translate(300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(Montserrat);
  text ('THIS TEXT IS SPINNING',0,0); 
  //spin+=int(mouseX/50-300);
  spin+=map(mouseX,0,600,-3,3);//make the mouseX affet the spin direction and speed
  letterSize=map(mouseY,0,600,8,72);
  
  stroke(0);
  
  //noStroke();
  //fill(255-50);
  //pop();
  background(255-50,30);
 
}
