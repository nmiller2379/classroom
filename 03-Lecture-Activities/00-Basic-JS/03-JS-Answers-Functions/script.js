// Output: Number that reprsents the total of two passed numbers
// Input: Input represents numbers passed into the function

const num1 = 2;
const num2 = 4;

function addNums(val1, val2) {
  return val1 + val2
}

console.log(addNums(num1,num2))
console.log(addNums(10, 10)) //return: 20


// 1. Calculate and return ==============================================================
// Define a function called calculateArea with parameters 'length' and 'width'
function calculateArea(length, width) {
  // Return the product of 'length' and 'width'
  return length * width;
}

// Call the calculateArea function with different values and log the results
let area1 = calculateArea(5, 10);
let area2 = calculateArea(8, 3);

console.log(area1); // Output: 50
console.log(area2); // Output: 24

console.log(calculateArea(50, 100))

// 2. Scope Exploration ==============================================================
// Declare a variable 'globalVar' outside any function
let globalVar = "I'm global";

// Define a function 'scopeExample'
function scopeExample() {
  // Access 'globalVar' inside the function
  console.log(globalVar); // Output: I'm global
  // Declare a local variable 'localVar'
  let localVar = "I'm local";
  // Log the local variable
  console.log(localVar); // Output: I'm local
}

// Call the scopeExample function and observe variable scope
scopeExample(); // Output: I'm global, I'm local
console.log(globalVar); // Output: I'm global
console.log(scopeExample())

// 3. ==============================================================
// Define a function 'noReturn' with no return statement
function noReturn() {
  "I'm a string"
}

// Call the function and assign the result to a variable
let result = noReturn();
// Log the result, which is 'undefined'
console.log(result); // Output: undefined

// 4. Assign and use return value ==============================================================
// Define a function 'calculateSquare' with a parameter 'x'
function calculateSquare(num) {
  // Return the square of the parameter
  return num * num;
}

// Call the function with a value, assign the result to a variable
let squaredValue = calculateSquare(7);

// Log the squared value
console.log(squaredValue); // Output: 59

// 5. Void vs. Returning Functions====================================================
// Define a void function 'voidFunction'
function voidFunction() {
  // Log a message directly within the function
  console.log("This is a void function.");
}

// Define a returning function 'returningFunction'
function returningFunction() {
  // Return a greeting message
  return "This is a returning function.";
}

// Call the void function and log a message
voidFunction(); // Output: This is a void function.
// Call the returning function, assign the result to a variable, and log it
let resultMessage = returningFunction();
console.log(resultMessage); // Output: This is a returning function.

// 6. Global vs. Local =========================================================================
// Declare a global variable 'sameName'
let sameName = "I'm global";

// Define a function 'nameChallenge'
function nameChallenge() {
  // Declare a local variable 'sameName' with a different value
  let sameName = "I'm local";
  // Log the local variable
  console.log(sameName); // Output: I'm local
}

// Call the function and observe the global and local variables
nameChallenge();
console.log(sameName); // Output: I'm global

// 7. Mixing it up ==============================================================
// Define a function 'multiplyNumbers' with parameters 'a' and 'b'
function multiplyNumbers(num1, num2) {
  // Return the product of 'a' and 'b'
  return num1 * num2;
}

// Call the function with numbers, assign the result to variables
let result1 = multiplyNumbers(3, 5);
let result2 = multiplyNumbers(result1, 2);

// Log the results
console.log(result1); // Output: 15
console.log(result2); // Output: 30
