let board = [
  ['X','O','O'],
  ['O','X','O'],
  ['O','X','X'],
];

let players = ['X','O'];

let currentPlayer;
//let available = [];


function setup() {
  createCanvas (600, 600);
  currentPlayer = random(players);
  //for (let j = 0; j < 3; j++){
    //for (let i = 0; i < 3; i++){
      //available.push(i,j);
    //}
  //}
}

function mousePressed(){
nextTurn();
}

function draw() {
  background (220);
  let w = width /3;
  let h = height /3;
  
  line(w,0,w,height);
  line(w*2,0,w*2,height);
  line(0,h,width,h);
  line(0,h*2,width,h*2);
  
  for (let j = 0; j < 3; j++){
    for (let i = 0; i < 3; i++){
      let x = w * i + w/2;
      let y = h * j + h/2;
      let spot = board[i][j];
      textSize(32);
      strokeWeight(4);
      if (spot == players[1]){
        noFill();
        ellipse(x,y,w/2);
      } else if (spot == players[0]) {
        let xr = w/4;
        line(x-xr, y-xr, x+xr, y+xr);
        line(x+xr, y-xr, x-xr, y+xr);
      }
    }
  }
  
}
