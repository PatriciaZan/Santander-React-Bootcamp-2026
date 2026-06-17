import React, { useState } from "react";

export default function CounterFunctionalComponent({ message }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>Count: {count}</h2>
      <button className="button" onClick={increase}></button>
    </div>
  );
}
