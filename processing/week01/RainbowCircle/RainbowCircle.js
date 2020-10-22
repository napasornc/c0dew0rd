function setup() {
createCanvas (500,500);
background (255,0,0); //RGB from 0-255
stroke(0); //the color of the stroke
  strokeWeight(5); //add the stroke -> the line thickness
  line (100,100,400,400);


}


function draw() {

  
  //noStroke(); //please don't add the stroke until other wise
  fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
  //rect (100,100,300,300); //rect(x1,y1,width,height)
  fill ((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2); // 
  ellipse (mouseX,mouseY,100,100); //(centerx,centery, width, height)
  fill (255);
  triangle(100,100,0,200,200,200); //(x1,y1,x2,y2,x3,y3)
}
