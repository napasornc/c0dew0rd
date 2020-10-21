function setup() {
  
  //This section only gets drawn once at the start.
  
 createCanvas (500,500);
 
 stroke(240); //colour of stroke
 strokeWeight(0); //thickness of line

}

function draw() {
  
  background (160,255,47);
  
  //this section gets drawn everytime you move the mouse
  
  //(centre x, centre y, width, height)
 
 noStroke(30,30,30);
 fill (160,255,47); // (spacer rectangle)
 rect (250,125,50,500); 
  
 stroke (255); 
 fill (47,86,233); // ('H' left rectangle)
 rect (125,125,15,250);

 fill (47,86,233); // ('H' right rectangle)
 rect (225,125,2,250);
 
 noStroke(30,30,30);
 fill (47,86,233); // ('H' middle square)
 rect (127,175,98,95);
 
 fill (160,255,47); // ('H' middle ellipse top)
 ellipse (176,173,98,98);
 
 fill (160,255,47); // ('H' middle ellipse bottom)
 ellipse (176,272,98,98);
 
 
 fill (47,86,233); // ('P' rectangle)
 rect (295,125,15,250);
 
 //fill (160,255,47); // ('P' ellipse inner)
 //ellipse (360,200,110,110);
 
 fill (47,86,233); // ('P' ellipse)
 ellipse ((mouseX+mouseY),173-mouseY,mouseX,98);

}
