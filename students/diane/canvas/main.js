var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");

//sky
var gradient = ctx.createLinearGradient(0, 0, 0, 800);
gradient.addColorStop(0, '#6AE4F4');
gradient.addColorStop(1, '#FFFFFF');
ctx.fillStyle = gradient;
ctx.fillRect (0, 0, 1000000, 100000);

//branches
ctx.strokeStyle = "#643920";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(510,310);
ctx.lineTo(630,430);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(490,350);
ctx.lineTo(580,380);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(600,340);
ctx.lineTo(590,390);
ctx.stroke();

//floor
ctx.fillStyle = "white";
ctx.fillRect (0, 650, 1000000, 1000);

//snowmanbody
ctx.beginPath();
ctx.arc(695, 320, 55, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(695, 450, 85, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(695, 610, 120, 0, Math.PI*2);
ctx.fill();

//snowmanhat
ctx.fillStyle = "purple";
ctx.fillRect (650, 170, 90, 110);
ctx.fillRect (635, 260, 120, 25);

//snowmanbuttoneyes
ctx.fillStyle  = "black";
ctx.beginPath();
ctx.arc(695, 420, 10, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(695, 470, 10, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(695, 520, 10, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(675, 305, 7, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(715, 305, 7, 0, Math.PI*2);
ctx.fill();

//snowmannose
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(697, 340);
ctx.lineTo(690, 315);
ctx.lineTo(650, 355);
ctx.closePath();
ctx.fill();

//snowmanbody
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(255, 140, 55, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(245, 210, 45, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(210, 170, 56, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(300, 195, 57, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(350, 190, 45, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(360, 150, 49, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc(320, 110, 34, 0, Math.PI*2);
ctx.fill();
