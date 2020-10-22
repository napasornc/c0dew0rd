const letters= 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{};:<>,.?/';
//can use var or let interchangable
var rand, listLength; //every function below can access

function setup() {
 createCanvas (windowWidth, windowHeight);
 background(255);
 textSize(24);
 noStroke();
 textFont("Times");
 //frameRate(5);
 listLength=letters.length; //if we call 10th letter from the 10 letters list, the code will break beacuse code start reading from 0
}


function draw() {
 rand = int(random(0,listLength-1));
 fill(0);
 textSize(random(5,50)); //(min,max) 
 text(letters[rand], random(width), random(height));
 //background(255,1);
 fill(255);
 ellipse(mouseX,mouseY,50,50);
}
