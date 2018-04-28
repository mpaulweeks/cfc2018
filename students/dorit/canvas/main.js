console.log ("hello");
var canvas = document.getElementById("bigCanvas");
canvas.width = 1000;
canvas.height = 700;
var ctx=canvas.getContext ("2d");

// background //
var gradient=ctx.createLinearGradient (400,50, 400,650);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "#009999");
ctx.fillStyle = gradient;

ctx.fillRect (400, 50, 600, 600);
ctx.fill();

// head //

ctx.fillStyle = "#ffb380";

ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo (600, 200);
ctx.lineTo (800, 200);
ctx.lineTo (900, 300);
ctx.lineTo (900,500);
ctx.lineTo (800, 600);
ctx.lineTo (600, 600);
ctx.lineTo (500, 500);
ctx.closePath();
ctx.fill();
ctx.fillRect (600, 600, 200, 50);

// ears //
ctx.fillStyle = "#ff6600";

ctx.beginPath();
ctx.moveTo (500,300);
ctx.lineTo (600,200);
ctx.lineTo (500,100);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo (800,200);
ctx.lineTo (900,100);
ctx.lineTo (900,300);
ctx.closePath();
ctx.fill();


// nose //
ctx.beginPath();
ctx.moveTo (650,400);
ctx.lineTo (750,400);
ctx.lineTo (700,450);
ctx.closePath();
ctx.fill();




//eyes//
ctx.fillStyle = "white";

ctx.beginPath();
ctx.arc (625,350, 75, 0, Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.arc (775,350, 75, 0, Math.PI*2);
ctx.fill();

// mouth //
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.arc (700, 490, 35, 0, Math.PI*2);
ctx.fill();


ctx.strokeStyle = "white";
ctx.fillStyle = "#ffb380";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc (750,450, 50, 0, Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc (650,450, 50, 0, Math.PI);
ctx.stroke();
ctx.fill();


//eyes - pupils//
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc (650, 350, 50, 0, Math.PI*2);
ctx.fill();
ctx.beginPath();
ctx.arc (800, 350, 50, 0, Math.PI*2);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc (690,350, 10, 0, Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.arc (840,350, 10, 0, Math.PI*2);
ctx.fill();

//ears - inside//

ctx.fillStyle = "#ffb380";

ctx.beginPath();
ctx.moveTo (500,300);
ctx.lineTo (575,225);
ctx.lineTo (500,100);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo (825,225);
ctx.lineTo (900,100);
ctx.lineTo (900,300);
ctx.closePath();
ctx.fill();

// whiskers //

ctx.strokeStyle = "#ff6600";
ctx.lineWidth = 1;

ctx.beginPath();
ctx.moveTo (750, 450);
ctx.lineTo (950, 400);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo (760, 460);
ctx.lineTo (960, 460);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo (750, 470);
ctx.lineTo (950, 520);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo (650, 450);
ctx.lineTo (450, 400);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo (640, 460);
ctx.lineTo (440, 460);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo (650, 470);
ctx.lineTo (450, 520);
ctx.closePath();
ctx.stroke();
