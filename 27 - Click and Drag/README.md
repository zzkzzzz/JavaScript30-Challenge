# Click and Drag
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/27%20-%20Click%20and%20Drag/index.html)

## NOTES
### JS
  - `Mouseevent.pageX`
    -  returns the X (horizontal) coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document.
    
  - `Element.scrollLeft`
    - gets or sets the number of pixels that an element's content is scrolled from its left edge.
    
### CSS
  -  ```css
     .item:nth-child(even) {
     transform: scaleX(1.31) rotateY(40deg);
     }
     .item:nth-child(odd) {
     transform: scaleX(1.31) rotateY(-40deg);
     }
     ```
     
     - :nth-child(n)
     - n can be a number, a keyword, or a formula.
     - like `even` `odd` `2n+1` ...
