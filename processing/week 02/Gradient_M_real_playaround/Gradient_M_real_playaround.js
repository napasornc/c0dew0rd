function setup() {
createCanvas (690,860);
strokeWeight(0);
background (255,50,50);
}

function draw() {
  //M part
  fill (255,mouseY/8,50);
  ellipse (57+96,46+96,172,172);
  ellipse (185+96,46+96,172,172);
  rect (57,142,64,254);
  rect (185,142,64,254);
  rect (313,142,64,254);
  //black part for M
  fill (255,50,50);
  ellipse (121+32,110+32,44,44);
  ellipse (249+32,110+32,44,44);
  rect (121,142,64,254);
  rect (249,142,64,245);
}
