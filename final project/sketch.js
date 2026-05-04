var characterX = 50;
var characterY = 50;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
var colors = [];

var mouseShapeX;
var mouseShapeY;

var palette = [
    [128,0,0],
    [139,0,0],
    [165,42,42],
    [178,34,34],
    [220,20,60]
];

function setup()
{
    createCanvas(800,600);

    for(var i = 0; i < 10; i++)
    {
        shapeXs[i] = getRandomNumber(width);
        shapeYs[i] = getRandomNumber(height);

        diameters[i] = getRandomNumber(60) + 20;

        shapeXSpeeds[i] = Math.floor(Math.random()* 5) + 1;
        shapeYSpeeds[i] = Math.floor(Math.random()* 5) + 1;

        colors[i] = palette[i % palette.length];
    }
}

function draw()
{
    background(30,0,0);

    createBorders(20);

    drawMazeWalls();

    createExit();

    drawTitle();

    drawCharacter();
    characterMovement();

    drawObstacles();
    moveObstacles();

    drawMouseShape();

    checkWin();
}

function drawTitle()
{
    fill(255,100,100);
    textSize(24);
    text("the crimson escape", 80, 40);

    textSize(16);
    text("quick! find the exit!", 80,65);
}

function drawCharacter()
{
    fill(255,200,200);
    circle(characterX, characterY, 25);
}

function characterMovement()
{
    if(keyIsDown(w)) characterY -= 8;
    if(keyIsDown(s)) characterY += 8;
    if(keyIsDown(a)) characterX -= 8;
    if(keyIsDown(d)) characterX += 8;
}

function createBorders(thickness)
{
    fill(150,0,0);

    rect(0,0, width, thickness);
    rect(0,0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 100);
}

function createExit()
{
    fill(255, 80, 80);
    textSize(18);
    text("exit here!", width - 90, height - 50);
}

function drawObstacles()
{
    for(var i = 0; i < shapeXs.length; i++)
    {
        fill(colors[i][0], colors[i][1], colors[i][2]);

        circle(shapeXs[i], shapeYs[i], diameters[i]);
    }
}

function moveObstacles()
{
    for(var i = 0; i < shapeXs.length; i++)
    {
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        if(shapeXs[i] > width) shapeXs[i] = 0;
        if(shapeXs[i] < 0) shapeXs[i] = width;

        if(shapeYs[i] > height) shapeYs[i] = 0;
        if(shapeYs[i] < 0) shapeYs[i] = height;
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function drawMouseShape()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function checkWin()
{
    if(characterX > width - 40 && characterY > height - 100)
    {
        fill(255);
        textSize(30);
        text("you escaped!", width/2 - 120, height/2);
    }
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}

function drawMazeWalls()
{
    fill(80,0,0);
    
    rect(150,100,170,20);
    rect(380,100,220,20);

    rect(200,200,400,20);

    rect(0,300,250,20);
    rect(350,300,450,20);

    rect(200,400,500,20);

    rect(100,150,20,100);
    rect(100,300,20,120);

    rect(300,0,20,180);
    rect(300,260,20,200);

    rect(500,200,20,150);
    rect(500,400,20,200);

    rect(700,100,20,250);
}