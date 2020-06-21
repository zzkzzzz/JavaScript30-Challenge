# Slide in on Scroll
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/13%20-%20Slide%20in%20on%20Scroll/index.html)

## NOTES
### JS
  - **Event**  
  
    `window.addEventListener("scroll", debounce(checkSlide));`
   
     fires when the document view or an element has been scrolled.
  - **Debounce**
  
     There might be some functionality in a web page which requires time-consuming computations.
     
     If such a method is invoked frequently it might greatly affect the performance of the browser
     
     Debounce ensure the task doesn't fire so often that it bricks browser performance.
  
  
  
  ```javascript
  function debounce(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  var timeout;

  return function () {
    // reference the context and args for the setTimeout function
    var context = this,
      args = arguments;

    var later = function () {
      // clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;
      //if immediate=false
      //then function will be called after timeout
      if (!immediate) func.apply(context, args);
    };

    // Should the function be called now? If immediate is true
    // and not already in a timeout then the answer is: Yes
    // !null=true  !undefined=true
    var callNow = immediate && !timeout;
    //  Each time the returned function is called, the timer starts over.
    clearTimeout(timeout);
    //set new timeout when the evet is triggered
    timeout = setTimeout(later, wait);

    // Immediate mode and timeout=null
    //execute the function
    if (callNow) {
      func.apply(context, args);
    }
  };
}
```

### HTML
### CSS
   Slide in 
   
  `transform: translateX(30%) scale(0.95);`
  
  `transform: translateX(0%) scale(1);`
