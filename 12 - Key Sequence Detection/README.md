# Key Sequence Detection
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/12%20-%20Key%20Sequence%20Detection/index.html)

## NOTES

### JS
- `Array.join()` 
  - creates and returns a new string by concatenating all of the elements in an array
- `Array.splice()`
  - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
  - `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
    start index can be negative number
    ```javascript
      let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
      let removed = myFish.splice(-2, 1)

      // myFish is ["angel", "clown", "sturgeon"] 
      // removed is ["mandarin"]
    ```
- `Array.shift()`
  - removes the first element from an array and returns that removed element
  - Its like dequeue in Queue
