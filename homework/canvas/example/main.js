// initialize ctx
var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");

// set colors
ctx.strokeStyle = "red";
ctx.fillStyle = "green";

// set some more variables
var width = 400;
var height = 200;

// print out to inspect console
console.log("hello!");
console.log(width);
console.log(height);

// draw rectangles
ctx.fillRect(100, 400, width, height);
ctx.strokeRect(200, 300, width, height);

// draw triangle
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 300);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fill();
ctx.stroke();

// change fill color
ctx.fillStyle = "blue";

// draw circle
ctx.beginPath();
ctx.arc(300, 200, 100, 0, Math.PI*2);
ctx.fill();
ctx.stroke();





// whitespace for the TV
