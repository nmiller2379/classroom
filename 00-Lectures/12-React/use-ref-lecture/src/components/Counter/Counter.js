import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
