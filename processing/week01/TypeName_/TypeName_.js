function setup() {
createCanvas (500,500);
background(0);
angleMode(DEGREES);

}


function draw() {
//background (0,0,0);

// stroke (255,255,255);
// strokeWeight(2); 
// line (250,50,mouseX,mouseY); // (x1,y1,x2,y2)
// bezier (ax1,ay1,bx1,by2,cx1,cy2,dx1,dy2)
// noFill();
// bezier(50,450,50,150,450,350,450,100);
// noStroke();
// fill(255);
// ellipse(mouseX,mouseY,50,50);

 // strokeWeight(1);
 fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
 // fill(255,0,0,5); //rectangle with alpha transparency
 //rect (0,0,500,500); //rect(x1,y1,width, height)
 // fill ((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
 // ellipse (250,250,300,400); //(centre x, centre y, width, height)
 // fill(0);
 // ellipse (250,250,200,300);
 // noFill();
 // triangle(0,0,mouseX,mouseY,pmouseX,pmouseY); //(x1,y1,x2,y2,x3,y3)
 
 // arc(x,y,w,h, startAngle, stopAngle)
 // angleMode(RADIANS) or angleMode(DEGREES)
 // arc(mouseX,mouseY,100,100,180,360,CHORD); //CHORD, OPEN, PIE
 //fill(255-mouseX,255-mouseY,(mouseX+mouseY)/2);
 //arc(250,250,200,200,0,90,PIE);
 
 // stroke(255-mouseX, random(mouseX+mouseY), random(100));
 // line(0,mouseX,125,mouseY);
 // stroke(mouseX/2, random(mouseY/2), random(100));
 // line(250,mouseY,125,mouseX);
 
 // stroke(random(255),255,random(255),random(100));
 // line(0,mouseX,250,mouseY);
 
 // stroke(255,255,255,random(100));
 // line(125,mouseX,250,mouseX);
 // stroke(random(255),255,random(255),random(100));
 // line(250,mouseY,500,mouseX);
 
 rect(150,150,200,200);
 fill(0);
 triangle(200,350,200,250,250,350);
 triangle(300,150,300,250,250,150);
 
 rect(mouseX,150,200,200);
 fill(0);
 triangle(mouseX,mouseX,200,250,250,350);
 triangle(mouseX,mouseY,300,250,250,150);
 
 
}

function keyPressed (){
  fill(0);
  rect(0,0,500,500);
}
