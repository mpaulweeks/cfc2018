var canvas = document.getElementById("macCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext ("2d");


ctx.fillStyle = "yellow";
ctx.fillRect(0, 8, 100000, 11);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 28, 100000, 8);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 45, 100000, 6);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 62, 100000, 4);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 78, 100000, 3);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 96, 100000, 2);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 122, 100000, 1);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 154, 100000, 1);

ctx.beginPath();
ctx.arc(1250, 625, 20, 0, Math.PI*2)
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(1200, 600, 20, 0, Math.PI*2)
ctx.fill();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(1200, 650, 20, 0, Math.PI*2)
ctx.fill();

ctx.fillStyle= "black";
ctx.beginPath();
ctx.arc(150, 300, 70, 0, Math.PI*2)
ctx.fill();

ctx.beginPath();
ctx.arc(150, 450, 70, 0, Math.PI*2)
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(160, 725, 55, 0, Math.PI*2)
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(721, 294);
ctx.lineTo(630, 250);
ctx.lineTo(715, 177);
ctx.closePath()
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(542, 247);
ctx.lineTo(470, 271);
ctx.lineTo(482, 190);
ctx.closePath()
ctx.fill();
ctx.stroke();
