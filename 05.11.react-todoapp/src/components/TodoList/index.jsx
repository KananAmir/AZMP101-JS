import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import TodoItem from "../TodoItem";

export default function CheckboxList({ todos, setTodos }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log("aaa");
  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
    </ul>
  );
}
