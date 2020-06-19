#  Fun with HTML5 Canvas
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/08%20-%20Fun%20with%20HTML5%20Canvas/index.html)

## NOTES

### JS
- event
  - `mousedown`
  - `mousemove`
  - `mouseup`
  - `mouseout`
- Canvas
  - `ctx.strokeStyle = "#BADA55";`
    Sets the style for shapes' outlines.
  - `ctx.lineJoin = "round";`
    Sets the appearance of the "corners" where lines meet.
  -  `ctx.lineCap = "round";`
    Sets the appearance of the ends of lines.
  -  
  ```javascript
    //draw lines
    //Stroked triangle
    ctx.beginPath();       //Creates a new path
    ctx.moveTo(125, 125);  //start from 
    ctx.lineTo(125, 45);   //go to
    ctx.lineTo(45, 125);
    ctx.closePath();       //Adds a straight line to the path, going to the start of the current sub-path.
    ctx.stroke();          //Draws the shape by stroking its outline.
     ```


### HTML

### CSS
