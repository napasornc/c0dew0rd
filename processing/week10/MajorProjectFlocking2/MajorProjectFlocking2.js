const flock = [];
let alignmentSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(windowWidth,windowHeight);
  alignmentSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  for (let i = 0; i < 200; i++) {
  flock.push(new Boid());
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
