function preload() {
  inconsolata = loadFont('data/inconsolata.otf');
  DIN = loadFont('data/DIN.otf');
  coldera=loadFont('data/coldera.otf');
}


function setup() {
  createCanvas(600,600);
  background(220);
  fill(0);
  textSize(32);
  textFont(inconsolata); //textFont(font,32);
  textAlign(CENTER);
}


function draw() {
  textSize(32);
  textFont(inconsolata);
  text ('inconsolata', 300,300);
  textSize(60);
  textFont(DIN);
  text ('DIN', 300,100);
  textSize(32);
  textFont(coldera);
  text ('COLDERA', 300,250); // have to make coldera -> UPPERCASE: this font only accommodate UPPERCASE
}
