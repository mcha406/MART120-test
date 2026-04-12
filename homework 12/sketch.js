var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed = 2;
var shapeYSpeed = 3;

var shape2X = 200;
var shape2Y = 100;
var shape2XSpeed = -3;
var shape2YSpeed = 2;

var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 300);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    createCharacter(400, 150);
}

function draw()
{
    background(255,182,193);
    
    createBorders(20);
    createExit();

    drawCharacter();
    characterMovement();

    drawObstacle1();
    moveObstacle1();

    drawObstacle2();
    moveObstacle2();

    drawMouseShape();

    checkWin();
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    fill(255,223,0);
    circle(characterX, characterY, 25);
}

function characterMovement()
{
    if(keyIsDown(w)) characterY -= 10;
    if(keyIsDown(s)) characterY += 10;
    if(keyIsDown(a)) characterX -= 10;
    if(keyIsDown(d)) characterX += 10;
}

function createBorders(thickness)
{
    fill(255,20,147);
    rect(0,0, width, thickness);
    rect(0, height-thickness, width, thickness);
    rect(0,0, thickness, height);
    rect(width-thickness, 0, thickness, height-80);
}

function createExit()
{
    fill(0);
    textSize(18);
    text("exit here!", width-120, height-40);
}

function drawObstacle1()
{
    fill(225,105,180);
    circle(shapeX, shapeY, 50);
}

function moveObstacle1()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width) shapeX = 0;
    if(shapeX < 0) shapeX = width;
    if(shapeY > height) shapeY = 0;
    if(shapeY < 0) shapeY = height;
}

function drawObstacle2()
{
    fill(199,21,133);
    rect(shape2X, shape2Y, 20,40);
}

function moveObstacle2()
{
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;

    if(frameCount % 60 == 0)
    {
        shape2XSpeed = Math.floor(Math.random() * 5) - 2;
        shape2YSpeed = Math.floor(Math.random() * 5) - 2;
    }

    if(shape2X > width) shape2X = 0;
    if(shape2X < 0) shape2X = width;
    if(shape2Y > height) shape2Y = 0;
    if(shape2Y < 0) shape2Y = height;
}

function drawMouseShape()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function checkWin()
{
    if(characterX > width - 20 && characterY > height - 60)
    {
        fill(255);
        textSize(26);
        text("you did it!", width/2 - 60, height/2);
    }
}