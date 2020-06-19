# Dev Tools Domination
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/09%20-%20Dev%20Tools%20Domination/index.html)

## NOTES

### JS
- `console.warn()`
- `console.info()`
- `console.error()`
- `console.assert()`
  - writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
- `console.table(data)`
  - Displays tabular data as a table.
  - argument data which must be an array or an object
- `console.group()` 

    OR

  `console.groupCollapsed()`
  
  `console.groupEnd()`
  
  - Creates a new inline group in the Web Console log. 
  - This indents following console messages by an additional level, until console.groupEnd() is called.

- `console.count()`
  -  logs the number of times that this particular call to count() has been called.
  
- `console.time()`
  `console.timeEnd()`
    - Starts a timer you can use to track how long an operation takes. 
    - 
    ```javascript
      console.time('fetching data');
        fetch(url)
            .then(data => data.json())
            .then(data => {
                console.timeEnd('fetching data');
                console.log(data);
            });
     ```
