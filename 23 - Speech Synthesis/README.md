# Speech Synthesis\
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/23%20-%20Speech%20Synthesis/index.html)

## NOTES
### JS
  - SpeechSynthesis
    - [Speech synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) is accessed via the SpeechSynthesis interface, a text-to-speech component that allows programs to read out their text content (normally via the device's default speech synthesiser.) Different voice types are represented by SpeechSynthesisVoice objects 
    - utterances
      - Represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
    - `SpeechSynthesis.getVoices()`
      - Returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.
    - `SpeechSynthesis.speak()`
      - Adds an [utterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.
    - `SpeechSynthesis.cancel()`
      - Removes all utterances from the utterance queue.
    - event `voiceschanged`
      - Fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed.
      - when SpeechSynthesis loads, its has to fire the voicechanged event bcs it may take a hot second
