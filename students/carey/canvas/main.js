var canvas = document.getElementById("CCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");

// background
ctx.fillStyle = "lightgrey";
ctx.fillRect(0, 0, 10000, 10000)

// set colors
ctx.strokeStyle = "white";
ctx.fillStyle = "#f7e5e5";
ctx.lineWidth = 12;

// body
ctx.beginPath();
ctx.arc(700, 400, 150, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// nose
ctx.lineWidth = 5;
ctx.beginPath();
ctx.ellipse(700, 460, 40, 30, 0, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

// nostrils
ctx.fillStyle = "lightgrey";
ctx.beginPath();
ctx.arc(685, 460, 9, 0, 2*Math.PI);
ctx.arc(715, 460, 9, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

// eyes
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(615, 410, 15, 0, 2*Math.PI);
ctx.arc(785, 410, 15, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

// sparkle
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(610, 403, 3, 0, 2*Math.PI);
ctx.arc(790, 403, 3, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

//left ear
ctx.fillStyle = "#f7e5e5";
ctx.lineWidth = 6;
ctx.lineJoin="round";
ctx.beginPath();
ctx.moveTo(597, 290);
ctx.lineTo(560, 291);
ctx.lineTo(560, 342);
ctx.fill();
ctx.stroke();
ctx.closePath();

//right ear
ctx.lineWidth = 6;
ctx.beginPath();
ctx.lineJoin="round";
ctx.moveTo(804, 290);
ctx.lineTo(840, 291);
ctx.lineTo(840, 342);
ctx.fill();
ctx.stroke();
ctx.closePath();


//left leg
ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(558, 454);
ctx.lineTo(580, 570);
ctx.lineTo(655, 570);
ctx.lineTo(660, 545);
ctx.fill();
ctx.stroke();
ctx.closePath();

// right leg
ctx.beginPath();
ctx.moveTo(842, 454);
ctx.lineTo(820, 570);
ctx.lineTo(745, 570);
ctx.lineTo(740, 545);
ctx.fill();
ctx.stroke();
ctx.closePath();
