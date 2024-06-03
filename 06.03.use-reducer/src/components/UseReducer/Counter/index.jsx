import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  INCREMENT_BY_INPUT_VALUE: "INCREMENT_BY_INPUT_VALUE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.RESET:
      return { ...state, count: 0 };
    case ACTIONS.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case ACTIONS.INCREMENT_BY_INPUT_VALUE:
      console.log(state);
      console.log(action);
      return { ...state, count: state.count + +action.payload };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, inputValue: 0 });
  console.log(state);
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>dec</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>reset</button>
      <hr />
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", payload: e.target.valueAsNumber })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT_BY_INPUT_VALUE",
            payload: state.inputValue,
          })
        }
      >
        inc by input value
      </button>
      <h1>{state.count}</h1>
    </div>
  );
};

export default Counter;
