import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>inc</button>
      <button onClick={() => setCount((c) => c - 1)}>dec</button>
      <button
        onClick={() => {
          setCount(0);
          setInputValue(0);
        }}
      >
        reset
      </button>
      <input
        type="number"
        onChange={(e) => setInputValue(e.target.valueAsNumber)}
        value={inputValue}
      />
      <span>{inputValue}</span>
      <button onClick={() => setCount((c) => c + inputValue)}>
        inc by input value
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
