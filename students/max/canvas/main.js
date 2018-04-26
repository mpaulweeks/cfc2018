// initialize ctx
var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");

//background
//sky
var grd = ctx.createLinearGradient(0, 0, 0, 1000);
grd.addColorStop(0,"#261247");
grd.addColorStop(1, "#2de2e6");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 6000, 575);
//ground
var grd = ctx.createLinearGradient(0, 575, 0, 1000);
grd.addColorStop(0,"#ff3864");
grd.addColorStop(1, "#ff6c11");
ctx.fillStyle = grd;
ctx.fillRect(0, 575, 6000, 6000);

// set colors
ctx.strokeStyle = "#0d0221";
ctx.fillStyle = "#0d0221";

// set some more variables
var width = 400;
var height = 200;

// print out to inspect console
console.log("hello!");
console.log(width);
console.log(height);

// change fill color
ctx.lineWidth = 5;

// draw circle
ctx.beginPath();
ctx.arc(400, 200, 100, 0, Math.PI*2);
ctx.stroke();

//triangle
ctx.beginPath();
ctx.moveTo(400, 303);
ctx.lineTo(500,500);
ctx.lineTo(300, 500);
ctx.closePath();
ctx.fill();

//legs
ctx.fillRect(350, 500, 10, 150);
ctx.fillRect(450, 500, 10, 150);

//arms
ctx.fillRect(270, 360, 100, 5);
ctx.fillRect(430, 360, 100, 5);

//sunglasses
//left
ctx.beginPath();
ctx.arc(370, 190, 25, 0, Math.PI*2);
ctx.fill();
//right
ctx.beginPath();
ctx.arc(430, 190, 25, 0, Math.PI*2);
ctx.fill();

// ctx.fillRect(360, 180, 60, 5);
//bridge
ctx.beginPath();
ctx.arc(400, 190, 15, Math.PI, 0);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 180);
ctx.lineTo(310,190);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 180);
ctx.lineTo(490,190);
ctx.stroke();

//sun
var radGrd = ctx.createRadialGradient(800, 150, 50, 800, 150, 100);
radGrd.addColorStop(1, "#ff3663");
radGrd.addColorStop(0, "#ff6c11");
ctx.fillStyle = radGrd;
ctx.beginPath();
ctx.arc(800,150,100,0,Math.PI*2);
ctx.fill();
