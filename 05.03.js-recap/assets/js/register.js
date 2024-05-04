import { User } from "./classes.js";
import { addNewData, getAllData } from "./services.js";

const form = document.querySelector("#register-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let users = null;
const getUsers = async () => {
  const response = await getAllData("users");
  //   console.log(response.data);
  users = response.data;
};

getUsers();
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newUser = new User(
    username.value.trim(),
    email.value.trim(),
    password.value.trim()
  );

  const findUser = users.some(
    (user) =>
      user.username === username.value.trim() ||
      user.email === email.value.trim()
  );
  console.log(findUser);
  console.log(users);
  console.log(username.value);
  if (username.value && email.value && password.value) {
    if (!findUser) {
      await addNewData("users", newUser);

      resetInputFields();
      Toastify({
        text: "User registered succesfull!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else {
      Toastify({
        text: "username or email ha already used!",
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
  email.value = "";
  password.value = "";
}
