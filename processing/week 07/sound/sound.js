//var mic;
var song; 
var amp;
var button;

function toggleSong() {
  if (song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
 
}

function preload() {
  //soundFormats('mp3') or ('ogg');
  song = loadSound('Oh! What a Shiny Nigh (Drama Ver.).mp3');
  
}
  
  
function setup() {
  createCanvas (windowWidth,windowHeight);
  song.play();
  //mic = new p5.AudioIn();
  //mic.start();
  amp = new p5.Amplitude();
  button = createButton('play');
  button.mousePressed(toggleSong);
  
  
}


function draw() {
  background(0);
  //var vol = mic.getLevel();
  var vol = amp.getLevel();
  strokeWeight(4);
  stroke(57,255,20);
  fill(0);
  ellipse(windowWidth/2, windowHeight/2, vol * 500, vol * 500);
  //console.log(vol);
  

}
