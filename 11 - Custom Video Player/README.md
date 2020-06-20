# Custom Video Player
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/11%20-%20Custom%20Video%20Player/index.html)

## NOTES

### JS
  - Video
    - `video.play()` `video.pause()`
    
    
    - `video.played` `video.paused`
    - `video.currentTime`
    - `video.duration`
    - `video.volume`
    - `video.playbackRate`
  - Video Event
     - ```javascript
         video.addEventListener("play", updateButton);
         video.addEventListener("pause", updateButton);
         video.addEventListener("timeupdate", updateProgress);
       ```
  - `Element.requestFullscreen()`
    - issues an asynchronous request to make the element be displayed in full-screen mode.

### HTML
  - ```html
      <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
    ```
    - defines a control 
    - max - specifies the maximum value allowed
    - min - specifies the minimum value allowed
    - step - specifies the legal number intervals
    - value - Specifies the default value

### CSS
  - ```css
      .fullscreen{
        min-width: 100%;
        min-height: 100%;
      }
    ```
    another way to make the video fullscreen
    
  - `flex-basis:50%`
  
    `progressBar.style.flexBasis = something`
    -  specifies the initial length of a flexible item.
   
