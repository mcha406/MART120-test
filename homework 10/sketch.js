var headX = 250;
var headY = 100;
var headDirection = Math.random() * 3 + 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = Math.random() * 4 + 1;

var size = 22;
var count = 0;
var sizeDirection = 2;

var leftEye = 220;
var rightEye = 277;
var leftEyeDirection = Math.random() * 2 + 1;
var rightEyeDirection = Math.random() * 2 + 1;

var legY = 265;
var legDirection = Math.random() * 3 + 1;

var leftArmX = 205;
var leftArmY = 170;
var leftArmXDir = Math.random() * 2 + 1;
var leftArmYDir = Math.random() * 2 + 1;
var armWidth = 20;
var armHeight = 80;

function setup()
 {
    createCanvas(500, 400);
}

    function draw()
 {

    background('#DFEB63');

    // head (other number is 250,115,100)
   fill ('rgb(238,211,201)')
   circle (headX,headY,100)
   headX+=headDirection;
   if(headX >= 418 || headX <= 82)
   {
        headDirection *= -1;
   }

   // body (other number 223, 165,55,135)
   fill ('#94CBF8')
   rect (223,bodyY,55,135);
   bodyY += bodyDirection;
   if(bodyY <= 0 || bodyY >= 450)
   {
        bodyDirection *= -1;
   }

   
   // hair and outline
   stroke('rgb(200,88,13)');
    strokeWeight(6);
   line(225,70,120, 170);
   line (370,180,280,70)

   // nose
   point(250, 125);
   
   // eyes (left first then right)
   circle(leftEye,110,20);
   leftEye += leftEyeDirection;

   if(leftEye >= 250 || leftEye <= 190)
   {
        leftEyeDirection *= -1;
   }

   circle(rightEye,110,20);
   rightEye -= rightEyeDirection;
   if(rightEye >= 310 || rightEye <= 240)
   {
        rightEyeDirection *= -1;
   }
            
   // mouth
   fill ('#F17070')
   triangle(280,135,240,150,220,135)

   // arms
   fill('rgb(238,211,201)')
   leftArmX += leftArmXDir;
   leftArmY += leftArmYDir;
   if(leftArmX <= 0 || leftArmX + armWidth >= width){
    leftArmXDir *= -1;
    leftArmX = constrain(leftArmX, 0, width - armWidth);
   }
   if(leftArmY <= 0 || leftArmY + armHeight >= height){
    leftArmYDir *= -1;
    leftArmY = constrain(leftArmY, 0, height - armHeight);
   }
   rect(leftArmX, leftArmY, armWidth, armHeight);
   rect(275, 170, 20, 80)

   // legs (wearing leggings)
   fill('black')
   rect(230,265,20,100)
   rect(250,legY,20,100)
   legY += legDirection;
   if(legY >= 320 || legY <= 240)
   {
        legDirection *= -1;
   }

   // text
   textSize(size);
   text('"first try"', 10, 30);
   size += sizeDirection;
   count++;
   if(size >= 50 || size <= 20)
   {
    sizeDirection *= -1;
   }
   
   text('by: gwen brenna', 310, 380)
 }