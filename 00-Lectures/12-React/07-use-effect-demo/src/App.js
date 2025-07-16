import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Timer from "./components/Timer/Timer";

import "./App.css";

function App() {
  // State to keep track of time, initialized to 5 minutes and 0 seconds
  const [time, setTime] = useState({ minutes: 5, seconds: "00" });
  // State to keep track of whether the timer is running
  const [timerRunning, setTimerRunning] = useState(false);

  // Function to start the timer
  const handleClick = () => {
    setTimerRunning(true);
  };

  // useEffect to handle the countdown logic
  useEffect(() => {
    if (timerRunning) {
      // The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
      
      const timerId = setTimeout(() => {
        if (time.minutes === 0 && time.seconds === "00") {
          // If the timer reaches 0:00, stop the timer
          console.log("Time is up");
          setTimerRunning(false);
        } else if (time.seconds === "00") {
          // If the seconds reach 0, decrement the minutes and reset seconds to 59
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          // Otherwise, decrement the seconds
          setTime({
            minutes: time.minutes,
            seconds:
              time.seconds - 1 < 10
                ? `0${time.seconds - 1}` // Ensure two digits for seconds
                : time.seconds - 1 || "00", // 0 is a falsey value so the value of 
          });
        }
        // In this case, the timer is set to 1 second (1000 milliseconds).
      }, 100);
      // Cleanup function to clear the timeout if the component unmounts or updates
      return () => clearTimeout(timerId);
    }
  }, [time, timerRunning]); // Dependencies array: re-run the effect if time or timerRunning changes

  return (
    <div className="App">
      <h1>Countdown</h1>
      <div>
        {/* Button component to start the timer */}
        <Button onClick={handleClick} />
      </div>
      <div>
        {/* Timer component to display the current time */}
        <Timer minutes={time.minutes} seconds={time.seconds} />
      </div>
    </div>
  );
}

export default App;
