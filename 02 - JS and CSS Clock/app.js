const hourhand = document.querySelector(".hour-hand");
const minhand = document.querySelector(".min-hand");
const secondhand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();
  const secondnow = now.getSeconds();
  const minutenow = now.getMinutes();
  const hournow = now.getHours();

  secondhand.style.transform = `rotate(${90 + secondnow * 6}deg)`;
  minhand.style.transform = `rotate(${90 + minutenow * 6}deg)`;
  hourhand.style.transform = `rotate(${90 + hournow * 30}deg)`;
}

setInterval(setClock, 1000);
setClock();
