// set variable up top because we want to access it in every function below
var song; // initiating variable - name for variable can be anything
var analyzer;

//function preload(){
  //song = loadSound('data/LifesAdventuresTimMyers.mp3');
//}
 
function setup() {
  song = loadSound('data/LifesAdventuresTimMyers.mp3');// 'folder name/name of the file'
  createCanvas(windowWidth, windowHeight); // create full window canvas
  background(0);
  analyzer = new p5.Amplitude(); //widget
  analyzer.setInput(song);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(0,10);
  fill(120);
  var volume = analyzer.getLevel();// discardable variable
  volume*=400;
  //ellipse(width/2,height/2,volume,volume);
  fill(255);
  textSize(volume*2);
  text('ADVENTOUR', mouseX, mouseY);
  //text(int(volume), width/2,height/2);// to debug, so you can check your index volume
  
}

function mousePressed(){
  if (song.isPlaying()){ // true or false: statement isPlaying is the function and the return of it will be true or false
    background(255);
    song.stop(); // if the song is playing, stop it.stop is an attribute, we have many attributes 
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play(); // . in the middle, we are looking for a property. property of the song is play 
    //song.play();// make text goes faster
  }
}
