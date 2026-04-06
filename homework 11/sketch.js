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
    stroke(0);
    fill(0);

    fill(255,20,147)
    createBorders(20);

    textSize(18);
    text("exit here!", width-120,height-40)

    drawCharacter();
    characterMovement();

    fill(225,105,180);
    circle(shapeX, shapeY, 50);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
 {
    shapeX = 0;
 }
    else if(shapeX < 0)
 {
    shapeX = width;
 }
    if(shapeY > height)
 {
    shapeY = 0;
 }
    else if(shapeY < 0)
{
    shapeY = height;
}

    fill(199,21,133);
    rect (shape2X, shape2Y, 20, 40);

    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    if(frameCount % 60 == 0)
    {
        shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 2);
        shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 2);
    }
    if(shape2X > width)
    {
        shape2X = 0;
    }
    else if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    else if(shape2Y < 0)
    {
        shape2Y = height;
    }


 if(characterX > width - 20 && characterY > height - 60)
 {
    fill(255);
    textSize(26);
    text("you did it!", width/2 - 60, height/2);
 }

    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(255,223,0);
    circle(characterX, characterY, 25);
}

function createBorders(thickness)
{
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height-thickness, width, thickness);
    rect(width-thickness, 0, thickness, height-80);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}