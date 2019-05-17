var x = 300
var y = 0
var xspeed = 5
var yspeed = 5
var ry = 0 
var rx = 0
var ryspeed = 15
var rxspeed = 15
function setup() {
  createCanvas(600,600)
  //background(0)
}

function draw() {
 background(0)
 fill(255)
 ellipse(x,y,30,30) 
 fill(255)
 rect(0,ry,25,100)
 rect(575,rx,25,100)
 
 if (x > 600 - 45){
 xspeed = -10}
 
 if (y > 600 - 15){
 yspeed = -10}
 
 if (x < 45){
   
   xspeed = 10
 }
if (y < 15){
  yspeed = 10
} 
if(keyIsDown(DOWN_ARROW))
rx = rx + ryspeed  
if (keyIsDown(38))
rx = rx - ryspeed

if(keyIsDown(87))
ry = ry - rxspeed

if(keyIsDown(83))
ry = ry + rxspeed

if(rx > 625)

rx = 1

if(ry > 625)

ry = 1

if (rx < 0)

rx = 600

if (ry < 0)

ry = 600


x = x + xspeed
y = y + yspeed
}