const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked = null;

function handleCheck(e) {
  let inBetween = false;
  //for shift check
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      //if the checkbox which is checked is the first one or last one
      //then toggle the inbetween
      //basiclly "this" is the last checkbox
      //and lastChecked is "lasrChecked"
      //also can be reverse
      if (checkbox === this || checkbox === lastChecked) {
        //prevent hold shift key directly and click checkbox
        //the rest of inputs those are after the one you selected will be selected too.
        if (lastChecked != null) {
          inBetween = !inBetween;
        }
      }
      //if the checkbox is between the first and last box
      //then check them
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  //for shift uncheck
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
