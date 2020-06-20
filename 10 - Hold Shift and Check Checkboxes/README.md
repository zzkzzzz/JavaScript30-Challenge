# Hold Shift and Check Checkboxes

hold shift can multi check and uncheck.
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index.html)

## NOTES

### JS
  - `const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');`
    get all the input element which type is checkbox inside inbox
  
### HTML
  
### CSS
```css
input:checked + p {
  background: #f9f9f9;
  text-decoration: line-through;
}
```

- The `:checked` CSS pseudo-class selector represents any radio, checkbox or option 
  element that is checked or toggled to an on state.
- when a checkbox is checked then you target `<p>` after it,
  
  then textcontent will have a line through it
