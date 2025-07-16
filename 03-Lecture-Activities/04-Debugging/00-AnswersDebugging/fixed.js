// Completed ES6 version of calculator.js with bug fixes
const calculate = () => {
  // Use const for variables that don't change and retrieve values from input fields
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.getElementById("operation").value;
  let result;

  // Convert string inputs to numbers to ensure correct arithmetic operations
  const parsedNum1 = Number(num1);
  const parsedNum2 = Number(num2);

  // Switch statement to handle the operation selection
  switch (operation) {
    case "add":
      result = parsedNum1 + parsedNum2;
      break;
    case "subtract":
      result = parsedNum1 - parsedNum2;
      break;
    case "multiply":
      result = parsedNum1 * parsedNum2;
      break;
    case "divide":
      // Bug fix: Check for division by zero
      if (parsedNum2 === 0) {
        result = "Error: Cannot divide by zero";
      } else {
        result = parsedNum1 / parsedNum2;
      }
      break;
    default:
      result = "Invalid operation";
  }

  // Use template literals for output and ensure result is displayed correctly
  document.getElementById("result").innerText = `Result: ${result}`;
};

// Note: The HTML 'onclick' attribute calls calculate() without issues.
