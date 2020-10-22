const flock = [];
let boidWords = [];
let alignmentSlider, cohesionSlider, separationSlider;
let para = 'Setting of the dreamed-of Bigbang of complex digi-biotic diversity';
let words = para.split(' ');
let subPara = ["Ray forsees digital naturalists" , "like Modern day tropical biologists" , "exploring our organic jungle." , "However, occasionally" , "these digital biologists will spot" , "an interesting information process for which they see application." , "At this point,", "some individuals will be captured" , "and brought into laboratories" , "for close study"];
let song;


function preload(){
  font = loadFont('data/TINY2.otf');
  subfont = loadFont('data/WhyteExtraLightItalic.ttf');
  song = loadSound('data/Forest.mp3'); 
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(8,18,22);
  song.play();
  
  for (let w = 0; w < words.length; w++) {
    boidWords[w] = new Boid();
  }
  
    noStroke();
    fill(192,224,33);
    textFont(font);
    textSize(54);
  
  alignmentSlider = createSlider(0,5,0,0.1); 
  alignmentSlider.position(20, height/100); //set position of the slider
  cohesionSlider = createSlider(0,5,0,0.1);
  cohesionSlider.position(180, height/100);
  separationSlider = createSlider(0,5,0,0.1);
  separationSlider.position(340, height/100);
  
}

function draw() { 
  background(8,18,22);
  
  fill(7,51,129);
  textFont(subfont);
  textSize(24);
  text(subPara, width/3, height/3, 600,300);
  
  
  for (let i = 0; i < words.length; i++) {
    boidWords[i].align();
    boidWords[i].cohesion();
    boidWords[i].separation();
    boidWords[i].display();  
    boidWords[i].edges();
    boidWords[i].update();
    boidWords[i].flock(flock);
 }
}

//////////////////////////////////////////////////////////
//code from Daniel Shiffman
class Boid {
 constructor() {
   this.position = createVector((random(width)), (random(height))); //starting position
   this.velocity = p5.Vector.random2D();
   this.velocity.setMag(random(1, 3));
   this.acceleration = createVector(); 
   this.maxForce = 0.5;
   this.maxSpeed = 8;
   this.words = words;
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

  align() {
    let perceptionRadius = 80;
    let steering = createVector(); //steering = desire
    let total = 0;
    for (let other of boidWords){ //have boid sense other boid around it
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
  
  cohesion() {
    let perceptionRadius = 80;
    let steering = createVector(); 
    let total = 0;
    for (let other of boidWords){ 
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
  
  separation() {
    let perceptionRadius = 80;
    let steering = createVector(); 
    let total = 0;
    for (let other of boidWords){ 
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
  
  flock(){
    let alignment = this.align(boidWords);
    let cohesion = this.cohesion(boidWords);
    let separation = this.separation(boidWords);
    
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
    for (let j = 0; j < words.length; j++) {
    text(this.words[j], this.position.x * [j], this.position.y * [j]);
   }
  }
}
