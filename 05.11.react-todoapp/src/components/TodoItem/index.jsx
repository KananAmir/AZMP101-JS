import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TodoItem = ({ todo, todos, setTodos }) => {
  const [open, setOpen] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = (id) => {
    console.log(id);

    const updatedTodos = [...todos].filter((q) => q.id !== id);
    setTodos(updatedTodos);
  };
  const handleEdit = (id) => {
    const todo = todos.find((q) => q.id === id);

    setEditValue(todo.todoText);
    setEditId(id);
    handleOpen();
  };

  const edit = () => {
    const todo = todos.find((q) => q.id === editId);
    todo.todoText = editValue;
    setTodos([...todos]);
    setOpen(false);
  };
  return (
    <>
      <li
        key={todo.id}
        style={{
          display: "flex",
          gap: "1rem",
          margin: "1rem 0",
          alignItems: "center",
        }}
      >
        <span>{todo.todoText}</span>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleDelete(todo.id)}
        >
          delete
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => handleEdit(todo.id)}
        >
          edit
        </Button>
      </li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Todo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              value={editValue}
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
            />
            <Button variant="outlined" color="success" onClick={() => edit()}>
              edit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default TodoItem;
