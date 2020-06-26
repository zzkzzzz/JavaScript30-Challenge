# Speech Detectin
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/20%20-%20Speech%20Detection/index.html)

## NOTES
### JS
  - Speech Recognition  
    - curently limited to Chrome for Desktop and Android
    - ```javascript
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        //define a speech recogntion instance
        const recognition = new SpeechRecognition();
        //Defines whether the speech recognition system should return interim results, or just final results. 
        recognition.interimResults = true;
        //define a speech recogntion instance
        recognition.lang = "en-US";
      ```
  - `Array.from()`
    - creates a new, shallow-copied Array instance from an array-like or iterable object.
    - ```javascript
      console.log(Array.from('foo'));
      // expected output: Array ["f", "o", "o"]

      console.log(Array.from([1, 2, 3], x => x + x));
      // expected output: Array [2, 4, 6]
      ```
