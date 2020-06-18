# Type Ahead
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/06%20-%20Type%20Ahead/index.html)

## NOTES
### JS
- Fetch: The Fetch API provides an interface for fetching resources (including across the network)

  - `const fetchResponsePromise = fetch(resource [, init])`
  
   resources can be URL or Request object
  - example
  
  ```javascript
   fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  ```
  
- RegExp

  g — Global search, don’t return after the first match
  
  i — Case-insensitive search
  
  [Guide](https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4)
  
- Event: Keyup

  The keyup event occurs when the user releases a key (on the keyboard).
  
- `numObj.toLocaleString([locales])`

  returns a string with a language-sensitive representation of this number.
  can use as thousands separators, delimiters and decimal separators

- Spread Syntax
  can replace apply()
  ```javascript
  function myFunction(x, y, z) { }
  const args = [0, 1, 2];
  myFunction.apply(null, args);
  //or can use ...
  myFunction(...args);
  ```
  can also use to copy array and concatenate arrays
  
### HTML

### CS
