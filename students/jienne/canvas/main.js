
var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");

// background
ctx.fillStyle = "#F3F4CB";
ctx.fillRect(0, 0, 10000, 10000)

ctx.strokeStyle = "gray"

//Global Position Variables
//left wheel origin (200, 700)
var left_x = 200
var left_y = 600

//right wheel origin (500, 700)
var right_x = 500
var right_y = 600

// left wheel
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(left_x, left_y, 100, 0, Math.PI*2);
ctx.fill();
ctx.stroke();

// right wheel
ctx.beginPath();
ctx.arc(right_x, right_y, 100, 0, Math.PI*2);
ctx.fill();
ctx.stroke();

//horizontal line (left)
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(left_x-100,left_y);
ctx.lineTo(left_x+100,left_y);
ctx.closePath();
ctx.fill();
ctx.stroke();

//vertical line (left)
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(left_x,left_y-100);
ctx.lineTo(left_x,left_y+100);
ctx.closePath();
ctx.fill();
ctx.stroke();

//horizontal line (right)
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(right_x-100,right_y);
ctx.lineTo(right_x+100,right_y);
ctx.closePath();
ctx.fill();
ctx.stroke();

//vertical line (right)
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(right_x,right_y-100);
ctx.lineTo(right_x,right_y+100);
ctx.closePath();
ctx.fill();
ctx.stroke();

//center upside down triangle
var body_tri_x = (left_x+right_x)/2;
var body_tri_y = left_y;
//left vertex
var tri_left_x = (body_tri_x+left_x)/2;
var tri_left_y = left_y - 130;
//right vertex
var tri_right_x = (body_tri_x+right_x)/2;
var tri_right_y = right_y - 130;

ctx.lineWidth = 12;
ctx.strokeStyle = "#9DEDD2"
ctx.beginPath();
ctx.moveTo(body_tri_x, body_tri_y);
ctx.lineTo(tri_left_x, tri_left_y);
ctx.lineTo(tri_right_x, tri_right_y);
ctx.lineTo(right_x, right_y);
ctx.closePath();
ctx.stroke();

//handle bar
ctx.lineWidth = 12;
ctx.strokeStyle = "#9DEDD2"
ctx.beginPath();
ctx.moveTo(left_x, left_y);
ctx.lineTo(body_tri_x - 54, tri_left_y-50);
ctx.closePath();
ctx.stroke();

//handle bar + curve
ctx.lineWidth = 12;
ctx.strokeStyle = "#9DEDD2"
ctx.beginPath();
ctx.moveTo(body_tri_x - 50, tri_left_y-52);
ctx.lineTo(body_tri_x - 100, tri_left_y-52);
ctx.closePath();
ctx.stroke();

//seat bar
ctx.lineWidth = 12;
ctx.strokeStyle = "#9DEDD2"
ctx.beginPath();
ctx.moveTo(body_tri_x, body_tri_y);
ctx.lineTo(tri_right_x + 30, tri_right_y-40);
ctx.closePath();
ctx.stroke();

//seat rectangle
var seat_w = 60;
var seat_h = 15;
ctx.fillStyle = "#C19C74"
ctx.fillRect(tri_right_x, tri_right_y-45, seat_w, seat_h);
