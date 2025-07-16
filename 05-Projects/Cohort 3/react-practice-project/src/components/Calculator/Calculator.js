import React, { useState } from "react";
import * as math from "mathjs";
import Display from "../Display/Display";
import Button from "../Button/Button";
import buttonsData from "../../data/data";

export default function Calculator() {
  // State variables to manage the display value, the equation, whether an operator was used, and if the calculation is completed
  const [displayValue, setDisplayValue] = useState("0");
  const [equation, setEquation] = useState("");
  const [operatorUsed, setOperatorUsed] = useState(false);
  const [calculationCompleted, setCalculationCompleted] = useState(false);

  // Function to handle button clicks
  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case "=":
        calculate();
        break;
      case "CLEAR":
        clear();
        break;
      case ".":
        addDecimal();
        break;
      case "0":
        handleZero();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(value);
        break;
      default:
        handleNumber(value);
    }
  };

  // Function to handle number input
  const handleNumber = (value) => {
    // If displayValue is "0", an operator was just used, or a calculation was just completed, reset the display value
    if (displayValue === "0" || operatorUsed || calculationCompleted) {
      setDisplayValue(value);
      setCalculationCompleted(false);
      setOperatorUsed(false);
    } else {
      setDisplayValue(displayValue + value);
    }
    // Update the equation accordingly
    if (calculationCompleted) {
      setEquation(value);
      setCalculationCompleted(false);
    } else {
      setEquation(equation + value);
    }
  };

  // Function to calculate the result of the equation
  const calculate = () => {
    try {
      const result = math.evaluate(equation); // Evaluate the equation
      const formattedResult = math.format(result, { precision: 4 }); // Format the result with precision of 4
      setDisplayValue(formattedResult); // Update the display value with the result
      setEquation(equation + "=" + formattedResult); // Update the equation with the result
      setCalculationCompleted(true); // Mark the calculation as completed
    } catch (error) {
      setDisplayValue("Error"); // Show error if the equation is invalid
      setEquation("");
    }
  };

  // Function to clear the display and equation
  const clear = () => {
    setDisplayValue("0");
    setEquation("");
    setOperatorUsed(false);
    setCalculationCompleted(false);
  };

  // Function to add a decimal point
  const addDecimal = () => {
    if (operatorUsed || calculationCompleted) {
      setDisplayValue("0.");
      setEquation(equation + "0.");
      setOperatorUsed(false);
      setCalculationCompleted(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
      setEquation(equation + ".");
    } else {
      const lastNumber = displayValue.split(/[+\-*/]/).pop();
      if (!lastNumber.includes(".")) {
        setDisplayValue(displayValue + ".");
        setEquation(equation + ".");
      }
    }
  };

  // Function to handle zero input
  const handleZero = () => {
    const lastChar = equation.slice(-1);
    const operators = ["+", "-", "*", "/"];

    // Prevent multiple leading zeros at the start or after an operator
    if (equation === "" || operators.includes(lastChar)) {
      if (lastChar !== "0") {
        setDisplayValue("0");
        setEquation(equation + "0");
      }
      return;
    }

    // Allow zero if a decimal point is present or if the current displayValue isn't just "0"
    if (displayValue.includes(".") || displayValue !== "0") {
      setDisplayValue(displayValue + "0");
      setEquation(equation + "0");
    }
  };

  // Function to handle operator input
  const handleOperator = (value) => {
    if (calculationCompleted) {
      setEquation(displayValue + value);
      setDisplayValue(value);
      setCalculationCompleted(false);
    } else if (!operatorUsed) {
      setEquation(equation + value);
      setDisplayValue(value);
      setOperatorUsed(true);
    } else {
      setEquation(equation.slice(0, -1) + value);
      setDisplayValue(value);
    }
  };

  // Render the calculator component
  return (
    <div id="calculator">
      <div className="display-container">
        <Display displayValue={displayValue} equation={equation} />
      </div>
      <div id="buttons" className="button-container">
        {buttonsData.map((arr, index) => (
          <div key={index} className="button-row">
            {arr.map((button) => {
              return (
                <Button
                  key={button.id}
                  id={button.id}
                  value={button.value}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
