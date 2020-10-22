// text/character appear when click 

// Class: allow you to reduce the amount of code in your work
// Class = group of objects that have similar properties
// tracability 

var xPosition, yPosition, size, rand; //rand = random
var wigglyLetters = []; //bag/group of that class

function preload() {
  Alio = loadFont('data/AlioTextRegular.ttf');

}

function setup() {
  createCanvas(windowWidth,windowHeight); //can create two canvases, do different things on different canvas at the same time
  background (220);
  textSize(32); 
  textFont(Alio);
}


function draw() {
  background(220);
  fill(106,90,205);
  //text(frameCount,mouseX,mouseY); //not in class so it isn't remembered and the background is draw over the framcount no everytime
   for (var i=0; i<wigglyLetters.length; i++) {
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
}

function mousePressed() {
  size = int(random(6,100)); //int = integer > not a decimal
  letter = char(int(random(60,160)));
  wigglyLetters.push(new Wiggle (mouseX,mouseY,size,letter));
}
// the sketch remember every 'takeover' every time it draw
// class is already a function
class Wiggle { // instantiate and move/jiggle/wiggle the letters
  constructor (x, y, size) { //this variable can be called anything
    this.x = x; // this = the variable //set up a new wiggle value > x value,y value, and size
    this.y = y;
    this.textSize = size;
    this.letter = letter;
  }
  wiggle() {
    this.x += random (-5,5); // 
    this.y += random (-5,5); // forward 5 square or backward 5 square
  }
  display() { // this calss gonan apply to every one that it run though
    textSize(this.textSize);
    //text('takeover', this.x,this.y);
    text(char(int(random(60,160))), this.x,this.y);
  }
}
