function debounce(func, wait = 20, immediate = true) {
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

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    //halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    //bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    //whether the user is scroll reach to the halfway of the image
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    //whether the user is scroll pass the image
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
