# CSS Variables
[demo](https://zzkzzzz.github.io/JavaScript30-Challenge/03%20-%20CSS%20Variables/index.html)

## NOTES

### JS
- `input.addEventListener("change", handleUpdate));`

  The change event is fired for `<input>`, `<select>`, and `<textarea>` elements  
  when an alteration to the element's value is committed by the user


- `input.addEventListener("mousemove", handleUpdate));`

  The event occurs when the pointer is moving while it is over an element
  
- `document.documentElement`
  returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
  - `document.documentElement.style`
  return all element in style sheet

### HTML

### CSS
- `:root`

The :root selector matches the document's root element.
In HTML, the root element is always the html element.

Can add in global variables then use it later on 
```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
  background: red;
}
```
```css
background: var(--base);
```


