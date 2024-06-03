import { useReducer, useState } from "react";

const ACTIONS = {
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  RESET_INPUT_VALUE: "RESET_INPUT_VALUE",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case ACTIONS.RESET_INPUT_VALUE:
      return { ...state, inputValue: "" };
    case ACTIONS.ADD_TODO:
      //   console.log(action);
      return { ...state, todos: [...state.todos, action.payload] };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((q) => q.id !== action.payload)],
      };
    default:
      break;
  }
};
const TodoApp = () => {
  //   const [todos, setTodos] = useState([]);
  //   const [inputValue, setInputValue] = useState("");

  const [state, dispatch] = useReducer(reducer, { todos: [], inputValue: "" });
  return (
    <div>
      <input
        type="text"
        placeholder="add todo here.."
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
        }
        value={state.inputValue}
      />
      <button
        onClick={() => {
          if (state.inputValue.trim()) {
            dispatch({
              type: "ADD_TODO",
              payload: { id: Date.now(), todoText: state.inputValue },
            });
            dispatch({ type: "RESET_INPUT_VALUE" });
          } else {
            window.alert("input is enpty!");
          }
        }}
      >
        Add
      </button>
      <hr />
      <ul>
        {state.todos.length > 0 &&
          state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.todoText}</span>
                <button
                  onClick={() => {
                    dispatch({ type: "DELETE_TODO", payload: todo.id });
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoApp;
