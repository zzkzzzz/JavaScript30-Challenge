const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked = null;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        if (lastChecked != null) {
          inBetween = !inBetween;
        }
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  if (e.shiftKey && !this.checked) {
    console.log("uncheck shift");
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        checkbox.checked = false;
      }
      if (inBetween) {
        checkbox.checked = false;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
