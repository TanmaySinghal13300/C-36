var form,player,game,canvas,database,gameState=0,playerCount;

function setup(){
  canvas=createCanvas(400,400);

  database=firebase.database();

  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  
}