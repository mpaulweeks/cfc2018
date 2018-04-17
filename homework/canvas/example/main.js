var canvas = document.getElementById("#bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";
ctx.fillStyle = "green";

var x = 100;
var y = 400;
var width = 400;
var height = 200;
ctx.fillRect(x, y, width, height);
ctx.strokeRect(x, y, width, height);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fill();
ctx.stroke();

x = 300;
y = 200;
var radius = 20;
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
