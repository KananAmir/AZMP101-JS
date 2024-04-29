const result = document.querySelector(".result");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const incInputBtn = document.querySelector(".inc-by-input-value");
const incInput = document.querySelector(".inc-input");
let counterInterval;
let count = 0;

startBtn.addEventListener("click", function () {
  //   clearInterval(counterInterval);
  counterInterval = setInterval(() => {
    count++;
    result.textContent = count;
  }, 1000);
  //   console.log(counterInterval);
  stopBtn.removeAttribute("disabled");
  this.setAttribute("disabled", true);
});

stopBtn.addEventListener("click", function () {
  clearInterval(counterInterval);

  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", true);
});

resetBtn.addEventListener("click", function () {
  count = 0;
  result.textContent = count;
  clearInterval(counterInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});
incBtn.addEventListener("click", function () {
  count++;
  result.textContent = count;
});
decBtn.addEventListener("click", function () {
  count--;
  result.textContent = count;
});

incInputBtn.addEventListener("click", function () {
  //   count += +incInput.value;
  count += incInput.valueAsNumber;
  result.textContent = count;
});
