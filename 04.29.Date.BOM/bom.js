// DOM - document object model

// BOM - browser object model

// console.log("height", window.innerHeight);
// console.log("width", window.innerWidth);

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", function () {
  //   console.log("clicked");
  //   window.close();
  console.log("addEventListener");
});
closeBtn.addEventListener("click", function () {
  console.log("addEventListener2");
});

// closeBtn.onclick = function () {
//   console.log("onclick");
// };
// closeBtn.onclick = function () {
//   console.log("onclick2");
// };

// console.log("height", window.innerHeight);
// console.log("width", window.innerWidth);

// console.log(window.screen.height);
// console.log(window.screen.width);

// console.log(screen.availHeight);
// console.log(screen.availWidth);

const reloadBtn = document.querySelector("#reload");

// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.pathname);
// console.log(window.location.host);
// console.log(window.location.hostname);

// reloadBtn.addEventListener("click", () => {
//   window.location.reload();
// });

// timing functions
//setTimeOut vs setInterval

// setTimeout(() => {

// }, timeout);

// const clear = document.querySelector("#clear");
// const timeoutId = setTimeout(() => {
//   console.log("hello");
//   document.body.style.backgroundColor = "red";
// }, 3000);

// clear.addEventListener("click", function () {
//   clearTimeout(timeoutId);
//   console.log("timeout cleared");
// });
// let count = 0;

// const intervalId = setInterval(() => {
//   //   console.log("azmp101");
//   count++;
//   console.log(count);

//   if (count === 100) {
//     clearInterval(intervalId);
//   }
// }, 10);

// document.cookie = "username=John Doe";

//clock

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

const d = new Date();

showCurrentTime(d);

setInterval(() => {
  const d = new Date();
  showCurrentTime(d);
}, 1000);

function showCurrentTime(date) {
  if (date.getMinutes() < 10) {
    hour.textContent = `0${date.getHours()}`;
  } else {
    hour.textContent = date.getHours();
  }
  if (date.getMinutes() < 10) {
    minute.textContent = `0${date.getMinutes()}`;
  } else {
    minute.textContent = date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    second.textContent = `0${date.getSeconds()}`;
  } else {
    second.textContent = date.getSeconds();
  }
}
