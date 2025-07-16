import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";

export default function Timer() {
  // State to keep track of time, initialized to 5 minutes and 0 seconds
  const [time, setTime] = useState({ minutes: 5, seconds: "00" });
  const [timerRunning, setTimerRunning] = useState(false);
  
  // Function to start the timer
  const handleClick = () => {
    setTimerRunning(true);
  };

  // useEffect to handle the countdown logic
  useEffect(() => {
    // This stops the code in the useEffect from running, which stops the dependencies from chaning. That, in tern, stops the useEffect from running.
    if (timerRunning) {
        // The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
      const timerId = setTimeout(() => {
        // When counter reaches 0, when time.minute === 0 and time.second === "00" setTimerRunning(false)
        if (time.minutes === 0 && time.seconds === "00") {
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
                : time.seconds - 1 || "00", // 0 is a falsey value so the value of time.seconds is truthy until it's 0. When it's truthy that value will be set for time.seconds. Once it's falsy, the or value will be set, which in our case is "00"
          });
        }
        // In this case, the timer is set to 1 second (1000 milliseconds).
      }, 1000);
      // Cleanup function to clear the timeout if the component unmounts or updates
      return () => clearTimeout(timerId);
    }
  }, [timerRunning, time]); // Dependencies array: re-run the effect if time or timerRunning changes

  return (
    <div>
      <Header />
      <Button id="start-button" message="Start" onClick={handleClick} />
      <h3>
        Time remaining: {time.minutes}:{time.seconds}
      </h3>
    </div>
  );
}
