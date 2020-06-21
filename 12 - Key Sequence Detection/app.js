function keypress(e) {
  console.log(e.key);
  pressed.push(e.key);

  ///pressed.length > secretCode.length ? pressed.shift() : null;
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join("").includes(secretCode)) {
    console.log("nbnb");
    cornify_add();
  }
}

const pressed = [];
const secretCode = "wocao";
window.addEventListener("keyup", keypress);
