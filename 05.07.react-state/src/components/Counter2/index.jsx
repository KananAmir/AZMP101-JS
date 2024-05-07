import React, { useState } from "react";
import IncrementButton from "../IncrementButton";
import DecrementButton from "../DecrementButton";
import Result from "../Result";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <IncrementButton count={count} setCount={setCount} />
      <Result count={count} />
      <DecrementButton count={count} setCount={setCount} />
    </div>
  );
};

export default Counter2;
