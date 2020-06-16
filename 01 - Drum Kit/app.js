function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function clickplaySound(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.target.dataset.key}"]`
  );
  const key = document.querySelector(
    `button[data-key="${e.target.dataset.key}"]`
  );
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", clickplaySound));
window.addEventListener("keydown", playSound);
