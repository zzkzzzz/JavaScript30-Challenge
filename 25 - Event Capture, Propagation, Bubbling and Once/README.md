# Event Capture, Propagation, Bubbling and Once
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/index.html)

## NOTES
 - Bubbling
   - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
   - `event.stopPropagation()` can stop bubbling
 - Capturing
   - Bubbling => the event bubbles up from the element. 
   - Capturing => the event goes down to the element.
   - `elem.addEventListener(..., {capture: true})`
 - Once
   - element.addEventListener(event, func, { once: true });
   - only trigger the event once
