const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = document.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  console.log(itemsList);
  populateList(items, itemsList);
  saveLocalStorage(items, item);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
}
function saveLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}
function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input

  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  saveLocalStorage(items);
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
