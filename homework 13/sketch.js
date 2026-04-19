var characterX = 400;
var characterY = 150;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

// obstacles
var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
var colors = [];

// mouse click obstacle
var mouseShapeX;
var mouseShapeY;

function setup ()
{
    createCanvas(600,300);

    for(var i = 0; i < 5; i++)
    {
        shapeXs[i] = getRandomNumber(width);
        shapeYs[i] = getRandomNumber(height);

        diameters[i] = getRandomNumber(50);

        shapeXSpeeds[i] = Math.floor(Math.random() * 5) + 1;
        shapeYSpeeds[i] = Math.floor(Math.random() * 5) + 1;

        // random colors
        colors[i] = [
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255)
        ];
    }

    createCharacter(400,150);
}

function draw()
{
    background(255,182,193);

    createBorders(20);
    createExit();

    drawCharacter();
    characterMovement();

    drawObstacle();
    moveObstacles();

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

function createBorders(thickness)
{
    fill(255,20,147);

    rect(0,0, width, thickness);
    rect(0,0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 80);
}

function createExit()
{
    fill(0);
    textSize(18);
    text("exit here!", width - 80, height - 40);
}

function drawObstacle()
{
    for(var i = 0; i < shapeXs.length; i++)
    {
        fill(
            colors[i][0],
            colors[i][1],
            colors[i][2]
        );

        circle(
            shapeXs[i],
            shapeYs[i],
            diameters[i]
        );
    }
}

function moveObstacles()
{
    for(var i = 0; i < shapeXs.length; i++)
    {
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        if(shapeXs[i] > width)
        {
            shapeXs[i] = 0;
        }

        if(shapeXs[i] < 0)
        {
            shapeXs[i] = width;
        }

        if(shapeYs[i] > height)
        {
            shapeYs[i] = 0;
        }

        if(shapeYs[i] < 0)
        {
            shapeYs[i] = height;
        }
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
    if(characterX > width - 20 && characterY > height - 80)
    {
        fill(255);
        text("you did it!", width / 2 - 60, height / 2);
    }
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}