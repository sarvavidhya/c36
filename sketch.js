var ball;
var position;
var database;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/positions');
    ballPosition.on("value", readPosition);
}

function draw(){
   background("white");

   if(keyDown(LEFT_ARROW)){
       writePosition(-1, 0)
   }
   else if(keyDown(RIGHT_ARROW)){
    writePosition(1, 0)
   }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0, -1)
}
else if(keyDown(UP_ARROW)){
    writePosition(0,1)
}


    drawSprites();
}

function writePosition(x,y){
    //ref: ref()

    database.ref('ball/positions').set({
        'x' : position.x + x,
        'y' : position.y + y
    })
    
}

function readPosition(data){
    database.ref('ball/positions');

    position = data.val();
    ball.x = position.x;
    ball.y = position.y; 
       
}

