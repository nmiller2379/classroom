// Global variable - accessible from anywhere in the code
let globalGreeting = "Hello";

// Function declaration with a parameter
function greet(name) {
  // This function just logs a message. It does not return anything.
  // 'name' is a parameter – it’s a placeholder for an input value.
  console.log(globalGreeting + ", " + name + "!");
}

// Calling the function with an argument
// greet("Alice"); // Output: Hello, Alice!
// greet("Frank"); // Output: Hello, Frank! This is an example of how a function is reusable. We can call it when we need it with different inputs (arguments) and it will produce different results.

// Function with a return value
function add(x, y) {
  // 'x' and 'y' are parameters.
  let sum = x + y;
  return sum; // This sends the result back to wherever the function was called.
}

let result = add(5, 3); // 5 and 3 are arguments.
console.log(result); // Output: 8

// Function demonstrating local scope
function localExample() {
  let localMessage = "I'm local!";
  console.log(localMessage); // This works!
}

// localExample();
// console.log(localMessage); // ❌ This would throw an error – localMessage is not defined outside the function

// Function that doesn't return anything
function logSum(a, b) {
  let total = a + b;
  console.log("The total is: " + total);
  // No return statement here
}

let loggedValue = logSum(10, 20); // Output: The total is: 30
// console.log(loggedValue); // Output: undefined (because the function didn't return anything)

// Function that ends early with return
function mysteriousFunction() {
  return "You found me!";
  console.log("Can you see me?"); // This line never runs
}
