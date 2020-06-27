const triggers = document.querySelectorAll(".cool>li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  console.log("enter");
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top + window.scrollY - navCoords.top,
    left: dropdownCoords.left + window.scrollX - navCoords.left,
  };

  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function handleLeave() {
  console.log("leave");
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
