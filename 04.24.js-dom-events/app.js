const clickMe = document.querySelector(".click");

//mouse events
clickMe.addEventListener("click", function () {
  //   console.log("clicked");
  //   console.log(this);
  console.log(this.textContent);
});

window.addEventListener("contextmenu", function () {
  console.log("contextmenu event worked");
});

const boxElement = document.querySelector(".wrapper > .box");

boxElement.style.width = "100px";
boxElement.style.height = "100px";
boxElement.style.backgroundColor = "teal";
boxElement.addEventListener("mousedown", () => {
  console.log("mousedown");
});
boxElement.addEventListener("mouseup", () => {
  console.log("mouseup");
});
boxElement.addEventListener("mouseover", () => {
  console.log("mouseover");
});
boxElement.addEventListener("mousemove", () => {
  console.log("mousemove");
});
boxElement.addEventListener("mouseout", () => {
  console.log("mouseout");
});

//keyboard events

let alpha = 0;
window.addEventListener("keydown", function (event) {
  //   console.log(event);
  //   console.log(event.code);
  //   console.log(event.key);
  //   console.log("keydown");
  if (event.code === "ArrowDown") {
    if (alpha > 0) alpha -= 0.1;
  } else if (event.code === "ArrowUp") {
    if (alpha < 1) alpha += 0.1;
  }

  console.log(alpha);

  this.document.body.style.backgroundColor = `rgba(255,0,0,${alpha})`;
});
window.addEventListener("keyup", function (event) {
  //   console.log(event);
  //   console.log(event.code);
  //   console.log(event.key);
  //   console.log("keyup");
});

// form events

const searchInput = document.querySelector("#search");

// searchInput.addEventListener("keyup", function (e) {
//   console.log(e.target.value);
// });
// searchInput.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });
// searchInput.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

//submit event

class User {
  //   static id = 1;
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    // this.id = User.id++;
    this.id = this.generateId();
  }

  generateId() {
    return Date.now();
  }
}

const users = [];
const userForm = document.querySelector(".user-form");
const userNameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pw");
userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //   const userObj = {
  //     userName: userNameInput.value,
  //     email: emailInput.value,
  //     password: passwordInput.value,
  //   };

  const user = new User(
    userNameInput.value,
    emailInput.value,
    passwordInput.value
  );

  if (userNameInput.value && emailInput.value && passwordInput.value) {
    users.push(user);
  } else {
    alert("input fields can  not be empty!");
  }
  console.log(users);
  resetInputFields();
});

function resetInputFields() {
  //   document.querySelectorAll("input").forEach((input) => {
  //     input.value = "";
  //   });

  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

searchInput.addEventListener("focus", function (e) {
  //   console.log(e.target);
  e.target.style.backgroundColor = "teal";
  e.target.style.color = "white";
});
searchInput.addEventListener("blur", function (e) {
  //   console.log(e.target);
  e.target.style.backgroundColor = "transparent";
  e.target.style.color = "black";
});
