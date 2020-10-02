//can't use the same variable for different function/task
var font; 
var para = 'BigBang';
var words = [];
var positionx = 100;
var vehicles = [];

function preload(){
  font = loadFont('data/AlioTextRegular.ttf');

}

////////////////////////////////////////////////////////

function setup() {
  words = para.split(' ');
  createCanvas(windowWidth,windowHeight);
  background(0);
  
////////////////////////////////////////////////////////
   
  //textToPoints from coding train
  var points = font.textToPoints(para, positionx ,height/2,230); //can use words
   
   for(var i = 0; i<points.length; i++){
     var pt = points[i];
     var vehicle = new Vehicle(pt.x,pt.y);
     vehicles.push(vehicle); // every point is a vehicle
   }
     
  //}
  
}
  
////////////////////////////////////////////////////////
//vehical from coding train
function Vehicle(x,y){
  this.pos = createVector(random(width),random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxspeed = 5;
  this.maxforce = 0.5;
}

Vehicle.prototype.behaviors = function(){
  var arrive = this.arrive(this.target);
  this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function(f){
  this.acc.add(f);
}

Vehicle.prototype.update = function(){
  this.pos.add(this.vel); // vel change position
  this.vel.add(this.acc); // acc change vel
  this.acc.mult(0);

}

Vehicle.prototype.show = function(){
     stroke(255);
     strokeWeight(5);
     point(this.pos.x, this.pos.y);
}

Vehicle.prototype.arrive = function(target){
  var desired = p5.Vector.sub(target,this.pos);
  var d = desired.mag(); //how far away it is from the target
  var speed = this.maxspeed;
  if (d<100){
    speed = map(d,0,100,0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
  //can assign the desire behavior

}

Vehicle.prototype.seek = function(target){ //where the vehicle move to (desire)
  var desired = p5.Vector.sub(target,this.pos);
  desired.setMag(this.maxspeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce); 
  return steer;
}
  


////////////////////////////////////////////////////////
//from coding train
function draw() {
  background(0);
  for (var i = 0; i< vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
