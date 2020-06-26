# Geolocation 
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/21%20-%20Geolocation/index.html)

## NOTES
### JS
  - `navigator.geolocation`
    - read-only property returns a Geolocation object that gives Web content access to the location of the device.
  - `navigator.geolocation.watchPosition`
    - used to register a handler function that will be called automatically each time the position of the device changes. 
    - data are store in the `data.coords`
    -
    ```javascript
        navigator.geolocation.watchPosition((data) => {
        console.log(data);
        speed.textContent = data.coords.speed;
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
         }, (err) => {
          console.error(err);
        });
     ```
