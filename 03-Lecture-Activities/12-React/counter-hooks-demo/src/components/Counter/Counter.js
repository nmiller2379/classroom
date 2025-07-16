import React, { useState } from "react";
import Button from "../Button/Button";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [stop, setStop] = useState(false);
  const [amount, setAmount] = useState(1);

  function handleButtonClick(message) {
    if (message === "+") {
      setNumber(number + amount);
    } else if (message === "-") {
      if (stop && number <= 0) {
        return;
      }
      setNumber(number - amount);
    } else {
      setNumber(0);
      setAmount(1);
      setStop(false);
    }
  }

  const handleStop = () => {
    // Toggle stop
    setStop((prevStop) => !prevStop);
  };

  const handleChange = (e) => {
    if (e.target.value < 1) {
      setAmount(1);
    } else {
      setAmount(parseInt(e.target.value));
    }
  };

  return (
    <div>
      <h3>{number}</h3>
      <p>{stop ? "Count will stop at 0" : ""}</p>
      <Button
        id="increment-button"
        message="+"
        onClick={() => handleButtonClick("+")}
      />
      <Button
        id="decrement-button"
        message="-"
        onClick={() => handleButtonClick("-")}
      />
      <Button
        id="reset-button"
        message="Reset"
        onClick={() => handleButtonClick("Reset")}
      />
      <div>
        <h4>Stop Count at 0</h4>
        <p>To force the count to stop at 0, press the button.</p>
        <Button id="stop-btn" message="Stop" onClick={handleStop} />
      </div>
      <div>
        <h4>Decide how much to count by:</h4>
        <input type="number" value={amount} onChange={handleChange} min={1} />
      </div>
    </div>
  );
}
