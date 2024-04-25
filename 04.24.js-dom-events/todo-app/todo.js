const todoBtn = document.querySelector(".add");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-lists");
const errorMessage = document.querySelector(".error-message");
const clearBtn = document.querySelector(".clear-all");
// let allTodos = localStorage.getItem("todos") || [];
let allTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

renterTodos(allTodos);
class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.completed = false;
    this.id = Date.now();
    this.createdAt = new Date().toUTCString();
  }
}

function addTodo() {
  //   console.log(todoInput.value);

  if (todoInput.value != "") {
    const todo = new Todo(todoInput.value);

    allTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(allTodos));
    // console.log(allTodos);
    renterTodos(allTodos);
    errorMessage.classList.replace("d-block", "d-none");
    todoInput.classList.remove("error-border");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your todo added succesfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    // alert("input should be filled!");
    errorMessage.classList.replace("d-none", "d-block");
    todoInput.classList.add("error-border");
  }

  resetTodo();
}

todoBtn.addEventListener("click", addTodo);

function resetTodo() {
  todoInput.value = "";
}

function renterTodos(arr) {
  todoList.innerHTML = "";

  arr.forEach((todo) => {
    const liElem = document.createElement("li");

    liElem.className =
      "list-group-item list-group-item-success mb-3 d-flex justify-content-between align-items-center";
    liElem.innerHTML = `
        <div>
            <input type="checkbox" name="" class="mark-as-done" ${
              todo.completed && "checked"
            } data-id=${todo.id}>
            
            <span>${todo.todoText}</span>
        </div>
        <div>
            <button class="btn btn-success edit" data-id="${
              todo.id
            }"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn btn-danger delete" data-id="${
              todo.id
            }"><i class="fa-solid fa-trash"></i></button>   
        </div>
    `;

    todoList.append(liElem);
  });

  // <span>${todo.todoText}, <i>${todo.createdAt}</i></span>
  const allDeleteBtns = document.querySelectorAll(".delete");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.parentElement.remove();
      //   this.closest(".list-group-item").remove();

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        // console.log(result);

        if (result.isConfirmed) {
          const id = this.getAttribute("data-id");
          deleteTodo(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your todo has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  const allEditBtns = document.querySelectorAll(".edit");

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const editedTodo = allTodos.find((q) => q.id == id);
      console.log(editedTodo);
      Swal.fire({
        title: "Edit selected Todo",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Edit",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          editedTodo.todoText = document.querySelector("#swal2-input").value;
          console.log(allTodos);
          renterTodos(allTodos);
        },
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          Swal.fire({
            title: "Apdated!",
            text: "Your todo has been updated.",
            icon: "success",
          });
        }
      });

      console.log(allTodos);

      const alertInput = document.querySelector("#swal2-input");

      alertInput.value = editedTodo.todoText;
    });
  });

  const allTodoCheckBoxs = document.querySelectorAll(".mark-as-done");

  allTodoCheckBoxs.forEach((q) => {
    q.addEventListener("change", function () {
      const id = this.getAttribute("data-id");
      const checkTodo = allTodos.find((todo) => todo.id == id);
      // console.log(this.checked);

      if (checkTodo.completed) {
        checkTodo.completed = false;
      } else {
        checkTodo.completed = true;
      }

      console.log(allTodos);
    });
  });
}

clearBtn.addEventListener("click", function () {
  clearAllTodos();
});
function deleteTodo(id) {
  allTodos = allTodos.filter((q) => q.id != id);
  renterTodos(allTodos);
}

function clearAllTodos() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    // console.log(result);

    if (result.isConfirmed) {
      allTodos.length = 0;
      todoList.innerHTML = "";

      Swal.fire({
        title: "Deleted All Todos!",
        text: "Your todo has been deleted.",
        icon: "success",
      });
    }
  });
}
window.addEventListener("keyup", function (e) {
  //   console.log(e.code);
  if (e.code === "Enter") {
    addTodo();
  }
});

todoInput.addEventListener("input", function (e) {
  // console.log(e.target.value);
  if (e.target.value) {
    errorMessage.classList.replace("d-block", "d-none");
    todoInput.classList.remove("error-border");
  } else {
    errorMessage.classList.replace("d-none", "d-block");
    todoInput.classList.add("error-border");
  }
});
