const mode = document.getElementById(".mode");
const btn = document.getElementById("btn");
const text = document.querySelector(".text");

const arr = ["sex", "fuck", "kutta", "gay", "omanush", "dhoincha"];

btn.onclick = function () {
  let number = Math.floor(Math.random() * 6);
  text.classList.remove("hidden");
  text.textContent = `${arr[number]}`;
};
