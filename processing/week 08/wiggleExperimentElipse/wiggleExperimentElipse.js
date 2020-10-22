// text/character appear when click 

// Class: allow you to reduce the amount of code in your work
// Class = group of objects that have similar properties
// tracability 

var xPosition, yPosition, size, rand, letter, speed; //rand = random
var letterCount = 0;
//var longtext; //instead of doing hard code
var sentence = ["I" ,"only","have", "yogurt", "But", "I'm","not hungry", "Maybe!"]; //string of word
var wigglyLetters = []; //bag/group of that class

function preload() {
  Alio = loadFont('data/AlioTextRegular.ttf');
  //load up your text, split it, (by space) and assign to sentence

}

function setup() {
  createCanvas(windowWidth,windowHeight); //can create two canvases, do different things on different canvas at the same time
  background (220);
  textSize(42); 
  textFont(Alio);
  xPosition = 100;
  yPosition = 100;
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

// can do it with timer, automatic, space bar, voice
function mousePressed() {
  size = int(random(6,100)); //int = integer > not a decimal
  // gravity > realtion between the size of the letter and the position of y, the bigger the letter the lower the position 
  //letter = char(int(random(60,160)));
  letter = sentence[letterCount];
  wigglyLetters.push(new Wiggle (mouseX,mouseY,size,letter));
  if (letterCount<sentence.length) {
  letterCount++;
  } else {letterCount = 0;}
}

function keyTyped() {
  wigglyLetters.push(new Wiggle (xPosition, yPosition, 54, key));
  xPosition += 54;
  //can do return key, can calcualte where the letter should stop and start on next line
}


// the sketch remember every 'takeover' every time it draw
// class is already a function
class Wiggle { // instantiate and move/jiggle/wiggle the letters
  constructor (x, y, size, letter) { //this variable can be called anything
    this.x = x; // this = the variable //set up a new wiggle value > x value,y value, and size
    this.y = y;
    this.textSize = size;
    this.letter = letter;
  }
  wiggle() {
    //this.x += random (-2,2); // 
    //this.y += random (-2,2); // forward 5 square or backward 5 square
    speed = map(mouseY,0,windowHeight, 0,10);
    this.x += random (-speed, speed);
    this.y += random (-speed, speed);
  }
  display() { // this calss gonan apply to every one that it run though
    textSize(this.textSize);
    //text('takeover', this.x,this.y);
    text(this.letter, this.x,this.y);
    ellipse (this.x, this.y, this.textSize, this.textSize);
  }
}

//can hard code, can split
// hard code > treat each word as an object
// pop, explode, disappear, collide
