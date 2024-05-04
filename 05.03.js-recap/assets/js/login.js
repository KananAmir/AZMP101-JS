import { getAllData } from "./services.js";

const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

let users = null;
const getUsers = async () => {
  const response = await getAllData("users");
  //   console.log(response.data);
  users = response.data;
};

getUsers();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const findUser = users.find(
    (user) =>
      user.username === username.value.trim() &&
      user.password === password.value.trim()
  );

  if (username.value && password.value) {
    if (findUser) {
      setUserIdToLocalStorage(findUser.id);
      window.location = "index.html";
    } else {
      Toastify({
        text: "Username or password is incorrect!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  } else {
    Toastify({
      text: "All inputs should be filled!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});

function resetInputFields() {
  username.value = "";
  password.value = "";
}

function setUserIdToLocalStorage(id) {
  localStorage.setItem("userId", id);
}
