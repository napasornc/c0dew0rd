const flock = [];
let boidWords = [];
let alignmentSlider, cohesionSlider, separationSlider;
let para = 'thus setting the dreamed-of BigBang of complex digi-bio diversity';
let words = para.split(' '); 
let typesize = 24;
let x = (0,255); // starting value
let y = (0,255);



function preload(){
  font = loadFont('data/AlioTextRegular.ttf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(192,224,33);
  noStroke();
  fill(255);
  textFont(font);
  textSize(typesize);
  
  alignmentSlider = createSlider(0,5,1,0.1); 
  alignmentSlider.position(20, height/100); //set position of the slider
  cohesionSlider = createSlider(0,5,1,0.1);
  cohesionSlider.position(180, height/100);
  separationSlider = createSlider(0,5,1,0.1);
  separationSlider.position(340, height/100);
  nextPara();
  let button = createButton("next");
  button.mousePressed(nextPara);
  button.position(340+160, height/100);
}

function draw() {
  background(192,224,33);
  boidWords = words;
    for (let w = 0; w < boidWords.length; w++) {
     boidWords[w].boid();
     boidWords[w].display();
    }  
 } 
    
  for (let boid of flock){
    boid.edges();
    boid.flock(flock);
    boid.update();
}


function mousePressed() {
  boidWords.push(new nextPara(random(width)), random(height));
}

function nextPara() {
  para = "Like a jungle";
  words = para.split(' ');
}

//function togglePlaying() {
  //if (!boid.isPlaying()) {
   // boid.play();
    //button.html("pause");
  //} else {
   // boid.pause();
   // button.html("play");
  //}
//}


//kill other words, boid = 0(); // clear boid
//array of paragraph - maybe?


//////////////////////////////////////////////////////////
//code from Daniel Shiffman
class Boid {
  constructor() {
    this.position = createVector(x,y); //starting position
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(1, 3));
    this.acceleration = createVector(); 
    this.maxForce = 0.02;
    this.maxSpeed = 5;
  }

edges(){
  if(this.position.x > width){
    this.position.x = 0;
  } else if (this.position.x < 0){
    this.position.x = width;
  }
  if(this.position.y > height){
    this.position.y = 0;
  } else if (this.position.y < 0){
    this.position.y = height;
  }
}

//////////////////////////////////////////////////////////

align(boid) {
  let perceptionRadius = 100;
  let steering = createVector(); //steering = desire
  let total = 0;
  for (let other of boid){ //have boid sense other boid around it
    let d = dist(
      this.position.x,
      this.position.y,
      other.position.x,
      other.position.y
    );
    if (other !=this && d < perceptionRadius){ //substract 'me' boid
      steering.add(other.velocity); 
      total++;
    }
  }
  if (total > 0){
    steering.div(total); //average = all boids (add) and divide
    steering.setMag(this.maxSpeed); //desire vel = avg direction
    steering.sub(this.velocity);
    steering.limit(this.maxForce);
  }
  return steering; //return 0 is our boid don't find anything
}

//////////////////////////////////////////////////////////

cohesion(boid) {
  let perceptionRadius = 100;
  let steering = createVector(); 
  let total = 0;
  for (let other of boid){ 
    let d = dist(
      this.position.x,
      this.position.y,
      other.position.x,
      other.position.y
    );
    if (other !=this && d < perceptionRadius){ 
      steering.add(other.position); 
      total++;
    }
  }
  if (total > 0){
    steering.div(total); 
    steering.sub(this.position);
    steering.setMag(this.maxSpeed);
    steering.sub(this.velocity);
    steering.limit(this.maxForce);
  }
  return steering; 
}

//////////////////////////////////////////////////////////

separation(boid) {
  let perceptionRadius = 50;
  let steering = createVector(); 
  let total = 0;
  for (let other of boid){ 
    let d = dist(
      this.position.x,
      this.position.y,
      other.position.x,
      other.position.y
    );
    if (other !=this && d < perceptionRadius){ 
      let diff = p5.Vector.sub(this.position, other.position);
      diff.div(d); // far = lower the Mag, close = higher Mag
      steering.add(diff); 
      total++;
    }
  }
  if (total > 0){
    steering.div(total); // avg it
    steering.setMag(this.maxSpeed);
    steering.sub(this.velocity);
    steering.limit(this.maxForce);
  }
  return steering; 
}

//////////////////////////////////////////////////////////

flock(boids){
  let alignment = this.align(boids);
  let cohesion = this.cohesion(boids);
  let separation = this.separation(boids);
  
  alignment.mult(alignmentSlider.value());
  cohesion.mult(cohesionSlider.value());
  separation.mult(separationSlider.value());
  
  this.acceleration.add(alignment);
  this.acceleration.add(cohesion); 
  this.acceleration.add(separation); 
  // force accumulation = add two force onto object
}

update(){
  this.position.add(this.velocity);
  this.velocity.add(this.acceleration); 
  this.velocity.limit(this.maxSpeed);
  this.acceleration.mult(0);
}

display() { 
  text(this.words[w], this.position.x, this.position.y);
 }

}
