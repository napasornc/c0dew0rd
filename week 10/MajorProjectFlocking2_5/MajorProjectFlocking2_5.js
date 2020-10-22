const flock = [];
let alignmentSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(windowWidth,windowHeight);
  alignmentSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  nextPara();
  let button1 = createButton("next");
  button1.mousePressed(nextPara);
  let button2 = createButton("pause");
  button2.mousePressed(togglePlaying);
}

//what is needed
//1. push new array of words from the next paragraph into boid: reset with new words
function nextPara() {
  for (let i = 0; i < 200; i++) {
  flock.push(new Boid());
  }
}

function togglePlaying() {
  if (!boid.isPlaying()) {
    boid.play();
    button.html("pause");
  } else {
    boid.pause();
    button.html("play");
  }
}


function draw() {
  background(0);
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }

}
