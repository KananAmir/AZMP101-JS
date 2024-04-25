//localStorage, sessionStorage, cookies

// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.

const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const get = document.querySelector(".get");
const res = document.querySelector(".result");
const removeAll = document.querySelector(".clear");

localStorage.setItem("fullName", "ali jalilov");
localStorage.setItem("number", 12);
add.addEventListener("click", function () {
  localStorage.setItem("className", "azmp101");
});
remove.addEventListener("click", function () {
  localStorage.removeItem("className");
});
get.addEventListener("click", function () {
  //   console.log(localStorage.getItem("userId"));
  console.log(localStorage.getItem("className"));
  if (localStorage.getItem("className")) {
    res.textContent = localStorage.getItem("className");
  } else {
    res.innerHTML = `<i>localda data yoxdur</i>`;
  }
});

//update
// localStorage.setItem("user", "riad");

// setTimeout(() => {
//   localStorage.setItem("user", "nijat");
// }, 3000);

removeAll.addEventListener("click", function () {
  localStorage.clear();
});

// console.log(localStorage.key(1));

console.log(localStorage.length);
console.log(localStorage.getItem("number"));
console.log(typeof localStorage.getItem("number"));

const students = ["riad", "parvan", "murad", "ali", "nijat"];

const users = [
  {
    name: "Anar",
    surname: "Hesenli",
    info: {
      uni: "ADA",
      gender: "male",
      salary: "3001",
      age: "22",
    },
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    info: {
      age: "25",
      uni: "GDU",
      gender: "male",
      salary: "200",
    },
  },
];

// localStorage.setItem("students", students);
// localStorage.setItem("users", users);

localStorage.setItem("students", JSON.stringify(students));
localStorage.setItem("users", JSON.stringify(users));

// console.log(localStorage.getItem("students"));
// console.log(localStorage.getItem("users"));
console.log(JSON.parse(localStorage.getItem("students")));
console.log(JSON.parse(localStorage.getItem("users")));

const addToSSession = document.querySelector(".add-session");

addToSSession.addEventListener("click", function () {
  sessionStorage.setItem("userId", "ali123");
});
