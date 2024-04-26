const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const count = document.querySelector(".count");
const reset = document.querySelector(".reset");
let countNumber;
countNumber = getDataFromLocalStorage();
count.textContent = countNumber;
increment.addEventListener("click", function () {
  countNumber++;
  count.textContent = countNumber;
  setDataToLocalStorage(countNumber);
});
decrement.addEventListener("click", function () {
  countNumber--;
  count.textContent = countNumber;
  setDataToLocalStorage(countNumber);
});

reset.addEventListener("click", function () {
  countNumber = 0;
  count.textContent = countNumber;
  setDataToLocalStorage(countNumber);
});
function setDataToLocalStorage(counter) {
  localStorage.setItem("counter", JSON.stringify(counter));
}

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("counter")) || 0;
}
