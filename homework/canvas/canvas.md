# How to use <canvas>

- Initialize the canvas, and save it to a variable
- Set the width and height manually to match the current size of the body
- Initialize the context, and save it to a variable (ctx)
```javascript
var canvas = document.getElementById("bigCanvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext("2d");
```
You will re-use this `ctx` variable to call the other functions and draw shapes!

### Drawing Functions

Use a string for the cssColor wrapped in quotes, like `"black"` or `"#808080"`

Set the color by modifying `ctx`
```javascript
ctx.strokeStyle = "black";
ctx.fillStyle = "#808080";
```

Use numbers for the rest of the parameters (no quotation marks).

With a rectangle, (x,y) marks the top left corner.
```javascript
ctx.fillRect(x, y, width, height);
ctx.strokeRect(x, y, width, height);
```


To draw a polygon, begin a path, then stroke and/or fill
```javascript
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fill();
ctx.stroke();
```

With a circle, begin a path, then use `ctx.arc()`, then use stroke and/or fill

For the `arc()` function, (x,y) marks the center of the circle
```javascript
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI*2);
ctx.fill();
ctx.stroke();
```

Read more on the [MDN docs for ctx](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
