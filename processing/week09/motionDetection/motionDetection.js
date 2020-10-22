let video; 
let poseNet; 
let poses = [];
let leftEye;

//function preload(){
//Alio = loadFont('data/AlioTextRegular.ttf');
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, modelReady);
  video.createCanvas(windowWidth/2, windowHeight/2);
  poseNet = ml5.poseNet(Video);
  poseNet.on ('pose', function(results){
    poses = results;
  });
  video.hide();
  
  //textFont(Alio);
  //textSize(42);
  
}

function modelReady(){
  select('#status').html('mode Loaded');
}


function draw() {
  background(0);
  image(video,0,0, width,height);
  
  if (pose.length > 0) {
    let pose = poses[0].pose;
    
    let leftEye = pose[letEye];
    fill(255);
    text(leftEye.x, leftEye.y); 
  }
  
}
