

var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");


ctx.fillStyle = 'white';
ctx.fillRect(48, 48, 516, 436);
ctx.strokeStyle = 'black';
ctx.strokeRect(25, 25, 260, 220);
ctx.lineWidth = 5;

var gradient = ctx.createRadialGradient(285, 350, 150, 500, 500, 500);
gradient.addColorStop(0, 'black');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1000, 1000);
// ctx.lineWidth=5;
// ctx.fillStyle="#000080";
// ctx.fillRect(0,0,2000000,1000000);



ctx.fillStyle = 'black';
ctx.fillRect(24, 24, 258, 218);
ctx.strokeStyle = 'white';
ctx.strokeRect(25, 25, 260, 220);
ctx.lineWidth = 2;


ctx.fillStyle = '#f91b47';
ctx.fillRect(50, 50, 100, 160);

ctx.fillStyle = '#1bf755';
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = 'rgba(265, 0, 255, 0.75)';
ctx.fillRect(25, 100, 175, 50);

// ctx.fillStyle = 'black';
// ctx.fillRect(24, 24, 258, 218);
// ctx.strokeStyle = 'lightgrey';
// ctx.strokeRect(25, 25, 260, 220);
// ctx.lineWidth = 5;

// ctx.arc(288, 314, 4, 7, 85, 0, Math.PI*2);
//    ctx.moveTo(338, 315);
//    ctx.arc(338, 314, 4, 7, 85, 0, Math.PI*2);
//    ctx.fillStyle = 'darkgrey';
//    ctx.fill();




  function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };
  ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(150, 50);
var triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(180, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();

ctx.fillStyle = '#ffe059';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = '#4286f4';
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();



ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(105, 85, 40, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();
ctx.fillStyle = "white";

ctx.beginPath();
ctx.arc(75, 75, 5, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(114, 75, 5, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(270, 105, 30, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();


// ctx.fillStyle = "darkgrey";
// ctx.beginPath();
// ctx.arc(305, 105, 15, 0, 2*Math.PI);
// ctx.closePath();
// ctx.fill();
// ctx.lineWidth = 2;
// ctx.stroke();
// ctx.fillStyle = "white";

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(268, 105, 10, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();
// ctx.lineWidth = 2;
// ctx.stroke();
// ctx.fillStyle = "black";
