var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.lineWidth = 5;
ctx.fillRect(10,10,100,100);


ctx.fillStyle = "red";
ctx.fillRect(150,10,100,100);


ctx.fillStyle = "yellow";
ctx.fillRect(290,10,100,100);


ctx.beginPath();
ctx.arc( 55,250,50,0,Math.PI*2);
ctx.fill();


ctx.beginPath();
ctx.arc( 1500,650,200,0,Math.PI*2);
ctx.fill();


ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc( 300,450,100,0,Math.PI*2);
ctx.fill();



ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc( 500,450,50,0,Math.PI*2);
ctx.fill();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc( 700,450,50,0,Math.PI*2);
ctx.fill();


ctx.fillStyle = "black";
ctx.lineWidth = 5;
ctx.fillRect(700,100,1000,100);

ctx.fillStyle = "white";
ctx.lineWidth = 5;
ctx.fillRect(700,300,100,10000);

ctx.fillStyle = "blue";
ctx.lineWidth = 5;
ctx.fillRect(800,300,100,10000);

ctx.fillStyle = "yellow";
ctx.lineWidth = 5;
ctx.fillRect(900,300,100,10000);

ctx.fillStyle = "red";
ctx.lineWidth = 5;
ctx.fillRect(1000,300,100,10000);

ctx.fillStyle = "red";
ctx.lineWidth = 5;
ctx.fillRect(100,800,1000,100);


ctx.fillstyle = "red";
ctx.beginPath();
ctx.arc( 1500,1050,150,0,Math.PI*2);
ctx.fill();


ctx.fillStyle = "black";
ctx.fillRect(800,400,1000,50);

ctx.fillStyle = "black";
ctx.fillRect(0,800,1000,50);
