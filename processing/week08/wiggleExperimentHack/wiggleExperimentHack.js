

var xPosition, yPosition, size, rand, letter, speed; 
var letterCount = 0;
var sentence = ["I" ,"only","have", "yogurt", "But", "I'm","not hungry", "Maybe!"]; //string of word
var wigglyLetters = [];
//var explode;


function preload() {
  Alio = loadFont('data/AlioTextRegular.ttf');
  
}

function setup() {
  createCanvas(windowWidth,windowHeight); 
  background (220);
  textSize(42); 
  textFont(Alio);
  xPosition = 100;
  yPosition = 100;
  //explode(this.textSize/2,this.textSize/2);
  //wigglyLetters.mouseOver(overpapra);
}


function draw() {
  background(220);
  fill(106,90,205);
  //text(frameCount,mouseX,mouseY);
   for (var i=0; i<wigglyLetters.length; i++) {
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
 
}

//function overpara(){
  //wigglyLetters.html('I am taking over');
//}

// can do it with timer, automatic, space bar, voice
function mousePressed() {
  size = int(random(6,100)); 
  //letter = char(int(random(60,160)));
  letter = sentence[letterCount];
  wigglyLetters.push(new Wiggle (mouseX,mouseY,size,letter));
  if (letterCount<sentence.length) {
  letterCount++;
  } else {letterCount = 0;}

}

//function keyPressed(){
  //if (keyCode === LEFT_ARROW) {
  //explode = 
  //} else if (keyCode )
//}

//function explode(x,y){

//}

function keyTyped() {
  wigglyLetters.push(new Wiggle (xPosition, yPosition, 54, key));
  xPosition += 54;
  
}

class Wiggle { 
  constructor (x, y, size, letter) { 
    this.x = x; 
    this.y = y;
    this.textSize = size;
    this.letter = letter;
  }
  wiggle() {
    speed = map(mouseY,0,windowHeight, 0,10);
    this.x += random (-speed, speed);
    this.y += random (-speed, speed);
  }
  display() { 
    textSize(this.textSize);
    text(this.letter, this.x,this.y);
    //ellipse (this.x, this.y, this.textSize, this.textSize);
  }
}

//class Explode {
 // contructor (explode){
  //this.ex = explode;
 // }
//}

//can hard code, can split
// hard code > treat each word as an object
// pop, explode, disappear, collide
