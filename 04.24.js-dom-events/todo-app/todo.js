const todoBtn = document.querySelector(".add");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-lists");
let allTodos = [];
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
    console.log(allTodos);
    renterTodos(allTodos);
  } else {
    alert("input should be filled!");
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
            <input type="checkbox" name="" id="complete" />
            <span>${todo.todoText}, <i>${todo.createdAt}</i></span>
        </div>
        <div>
            <button class="btn btn-success edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn btn-danger delete" data-id="${todo.id}"><i class="fa-solid fa-trash"></i></button>   
        </div>
    `;

    todoList.append(liElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");

  //   console.log(allDeleteBtns);

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //   console.log(this);
      //   this.parentElement.parentElement.remove();
      //   this.closest(".list-group-item").remove();

      const id = this.getAttribute("data-id");
      //   console.log(id);
      deleteTodo(id);
    });
  });
}

function deleteTodo(id) {
  allTodos = allTodos.filter((q) => q.id != id);
  renterTodos(allTodos);
}

window.addEventListener("keyup", function (e) {
  //   console.log(e.code);
  if (e.code === "Enter") {
    addTodo();
  }
});
