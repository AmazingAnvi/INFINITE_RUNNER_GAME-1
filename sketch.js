var PLAY = 1;
var END = 0;
var gameState = PLAY;
var GameOver, YouWin


function preload() {
  Game_Over = loadImage("GameOver.png")
  Flappy_Bird = loadImage("Flappy Bird Logo.png")
  You_Win = loadImage("YouWin.png")
  See_Note = loadImage("Note.png")
}





function setup() {
  createCanvas(1500,500);

  obstaclesGroup = new Group();

  FlappyBird = createSprite(-300,200,30,30)
  FlappyBird.addImage(Flappy_Bird)
  FlappyBird.scale = 0.7;

  Note = createSprite(-300,400,30,30)
  Note.addImage(See_Note)
  Note.scale = 0.5;


  ground = createSprite(1,500,100000,20);
  ground.shapeColor = "black"


  ball = createSprite(100,450,50,50)
  ball.shapeColor = "orange"
  ball.velocityY = 12;

  obstacle1 = createSprite(300,460,50,500);
  obstacle1.shapeColor = "red"
  obstaclesGroup.add(obstacle1);

  obstacle2 = createSprite(600,460,50,300);
  obstacle2.shapeColor = "red"
  obstaclesGroup.add(obstacle2);

  obstacle3 = createSprite(900,460,50,400);
  obstacle3.shapeColor = "red"
  obstaclesGroup.add(obstacle3);

  obstacle4 = createSprite(1200,460,50,200);
  obstacle4.shapeColor = "red"
  obstaclesGroup.add(obstacle4);

  obstacle5 = createSprite(300,0,50,50);
  obstacle5.shapeColor = "red"
  obstaclesGroup.add(obstacle5);


  obstacle6 = createSprite(600,40,50,250);
  obstacle6.shapeColor = "red"
  obstaclesGroup.add(obstacle6);


  obstacle7 = createSprite(900,40,50,150);
  obstacle7.shapeColor = "red"
  obstaclesGroup.add(obstacle7);


  obstacle8 = createSprite(1200,40,50,350);
  obstacle8.shapeColor = "red"
  obstaclesGroup.add(obstacle8);


  obstacle9 = createSprite(1500,460,50,500);
  obstacle9.shapeColor = "red"
  obstaclesGroup.add(obstacle9);


  obstacle10 = createSprite(1800,460,50,300);
  obstacle10.shapeColor = "red"
  obstaclesGroup.add(obstacle10);


  obstacle11 = createSprite(2100,460,50,400);
  obstacle11.shapeColor = "red"
  obstaclesGroup.add(obstacle11);


  obstacle12 = createSprite(2400,460,50,200);
  obstacle12.shapeColor = "red"
  obstaclesGroup.add(obstacle12);


  obstacle13 = createSprite(1500,0,50,50);
  obstacle13.shapeColor = "red"
  obstaclesGroup.add(obstacle13);


  obstacle14 = createSprite(1800,40,50,250);
  obstacle14.shapeColor = "red"
  obstaclesGroup.add(obstacle14);


  obstacle15 = createSprite(2100,40,50,150);
  obstacle15.shapeColor = "red"
  obstaclesGroup.add(obstacle15);


  obstacle16 = createSprite(2400,40,50,350);
  obstacle16.shapeColor = "red"
  obstaclesGroup.add(obstacle16);


  obstacle17 = createSprite(2700,460,50,500);
  obstacle17.shapeColor = "red"
  obstaclesGroup.add(obstacle17);


  obstacle18 = createSprite(3000,460,50,300);
  obstacle18.shapeColor = "red"
  obstaclesGroup.add(obstacle18);


  obstacle19 = createSprite(3300,460,50,400);
  obstacle19.shapeColor = "red"
  obstaclesGroup.add(obstacle19);


  obstacle20 = createSprite(3600,460,50,200);
  obstacle20.shapeColor = "red"
  obstaclesGroup.add(obstacle20);


  obstacle21 = createSprite(2700,0,50,50);
  obstacle21.shapeColor = "red"
  obstaclesGroup.add(obstacle21);


  obstacle22 = createSprite(3000,40,50,250);
  obstacle22.shapeColor = "red"
  obstaclesGroup.add(obstacle22);


  obstacle23 = createSprite(3300,40,50,150);
  obstacle23.shapeColor = "red"
  obstaclesGroup.add(obstacle23);


  obstacle24 = createSprite(3600,40,50,350);
  obstacle24.shapeColor = "red"
  obstaclesGroup.add(obstacle24);

  obstacle25 = createSprite(3900,40,50,350);
  obstacle25.shapeColor = "red"
  obstaclesGroup.add(obstacle16);


  obstacle26 = createSprite(4200,460,50,500);
  obstacle26.shapeColor = "red"
  obstaclesGroup.add(obstacle17);


  obstacle27 = createSprite(4500,460,50,300);
  obstacle27.shapeColor = "red"
  obstaclesGroup.add(obstacle18);


  obstacle28 = createSprite(4800,460,50,400);
  obstacle28.shapeColor = "red"
  obstaclesGroup.add(obstacle19);


  obstacle29 = createSprite(3900,460,50,200);
  obstacle29.shapeColor = "red"
  obstaclesGroup.add(obstacle20);


  obstacle30 = createSprite(4200,0,50,50);
  obstacle30.shapeColor = "red"
  obstaclesGroup.add(obstacle21);


  obstacle30 = createSprite(4500,40,50,250);
  obstacle30.shapeColor = "red"
  obstaclesGroup.add(obstacle22);


  obstacle31 = createSprite(4800,40,50,150);
  obstacle31.shapeColor = "red"
  obstaclesGroup.add(obstacle23);


  obstacle32 = createSprite(3600,40,50,350);
  obstacle32.shapeColor = "red"
  obstaclesGroup.add(obstacle24);

}

function draw() {
  console.log(ball.x);
  text("Note Try Not To Touch The Red!", -300,400)


//  if(gameState = PLAY) {
  background("lightBlue");  

  GameOver = createSprite(ball.x,200,30,30)
  GameOver.addImage(Game_Over)
  GameOver.visible = false;

  YouWin = createSprite(5400,200,30,30)
  YouWin.addImage(You_Win)
  YouWin.visible = true;



  if(keyDown("left")) {
    ball.x = ball.x-10;
    GameOver.visible = false;

  }
  
  if(keyDown("right")) {
    ball.x = ball.x+10;
    GameOver.visible = false;
  }
  

  if(keyDown("up") && ball.y >= 10) {
    ball.velocityY = -8;
    GameOver.visible = false;
  }

  ball.velocityY = ball.velocityY + 0.4
  ball.collide(ground);
  camera.position.x = ball.x






if(obstaclesGroup.isTouching(ball)){
//  GameOver.visible = true;
  ball.x = 100


//  if(keyDown("space")) {
//    ball.x = 100;
//  }


}

//if(ball.x = 10000) {
  //text("won", ball.x,200)
//}


 //}


if(keyDown("space")) {
  ball.x = 100
}
 

 drawSprites();

}













function reset() {

}