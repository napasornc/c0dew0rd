//function preload (){
  //Alio = loadFont('data/AlioTextRegular.ttf');
//}

function setup() {
  noCanvas();
  //textSize(int(random));
  //textFont(Alio);
  
  let lang = navigator.language || 'en-US'; // use preset language
  let speechRec = new p5.SpeechRec(lang, gotSpeech); 
  
  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);
  
function gotSpeech (){
  if (speechRec.resultValue){
    createP(speechRec.resultString);
  }
}

  //console.log(speechRec);

}

function draw() {


}
