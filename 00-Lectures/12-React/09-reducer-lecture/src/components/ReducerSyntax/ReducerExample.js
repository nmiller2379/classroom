import React, { useReducer } from "react";

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state; // In case of an unknown action
  }
}

// Component
export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>Decrease</button>
    </div>
  );
}


