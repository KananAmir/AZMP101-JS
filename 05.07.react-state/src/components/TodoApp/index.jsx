import React, { useState } from "react";
import { nanoid } from "nanoid";
class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.id = nanoid();
    this.createdAt = new Date().toDateString();
  }
}
const TodoApp = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodo = new Todo(todoText);
    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  function handleDeleteTodo(id) {
    setTodos([...todos].filter((q) => q.id !== id));
  }
  return (
    <div>
      <input
        type="text"
        placeholder="type here.."
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={() => handleAddTodo()}>add</button>
      <hr />
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id} onClick={() => handleDeleteTodo(todo.id)}>
                {todo.todoText}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoApp;
