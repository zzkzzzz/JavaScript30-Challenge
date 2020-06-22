# JavaScript Reference VS Copying
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/14%20-%20JavaScript%20References%20VS%20Copying/index.html)

## NOTES
### JS
  - `Object.assign()` 
    - copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
    - only copy one level deep. If the source value is a reference to an object, it only copies the reference value.
    - ```javascript
        let obj1 = { a: 0 , b: { c: 0}};
        let obj2 = Object.assign({}, obj1);
        
        obj1.a = 1;
        console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
        console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
        
        obj2.b.c = 3;
        console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
        console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
        ```
     - deep clone
       - `let obj3 = JSON.parse(JSON.stringify(obj1));`
       - `JSON.stringify()` converts a JavaScript object or value to a JSON string
       - `JSON.parse()` parses a JSON string, constructing the JavaScript value or object described by the string
  

