import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoList from "../TodoList";

class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.id = nanoid();
    this.createdAt = new Date();
  }
}
const TodoApp = () => {
  const [todoText, setTodotext] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todoText) {
      const newTodo = new Todo(todoText);

      setTodos([...todos, newTodo]);
    }
    setTodotext("");
  };
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              id="outlined-basic"
              label="add todo here.."
              variant="outlined"
              onChange={(e) => setTodotext(e.target.value)}
              value={todoText}
            />
            <Button variant="contained" onClick={handleAddTodo}>
              ADD
            </Button>
          </Grid>
        </Grid>
        <hr />
      </Container>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
          <TodoList todos={todos} setTodos={setTodos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoApp;
