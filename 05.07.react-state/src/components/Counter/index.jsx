import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   let count = 0;

  const handleIncrement = () => {
    // count++;
    // setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    // count--;
    // setCount((prevCount) => prevCount - 1);
    setCount(count - 1);
  };
  return (
    <div style={{ border: "1px solid teal" }}>
      <button onClick={() => handleIncrement()}>INCREMENT</button>
      <span>{count}</span>
      <button onClick={() => handleDecrement()}>DECREMENT</button>
    </div>
  );
};

export default Counter;
