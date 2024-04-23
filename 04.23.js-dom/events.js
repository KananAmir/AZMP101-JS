const userNameInput = document.querySelector("#user-name");
const firstNum = document.querySelector(".first-num");
const secondNum = document.querySelector(".second-num");
const clickBtn = document.querySelector(".click");
const sum = document.querySelector(".sum");
const multiply = document.querySelector(".multiply");
const result = document.querySelector(".result");

clickBtn.addEventListener("click", function () {
  console.log(userNameInput.value);
});

// sum.addEventListener("click", function () {
//   let sum = +firstNum.value + +secondNum.value;
//   result.textContent = sum;
// });
sum.addEventListener("click", function () {
  let sum = firstNum.valueAsNumber + secondNum.valueAsNumber;
  result.textContent = sum;
});
multiply.addEventListener("click", function () {
  let sum = +firstNum.value * +secondNum.value;
  result.textContent = sum;
});
