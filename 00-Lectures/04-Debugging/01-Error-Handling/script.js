// let message = "Hello world"
// console.log(message

function greet() {
  console.log("Hello!");
}

// greetUser(); // ReferenceError: greetUser is not defined

function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}

console.log(calculateTotal(100, 0.07)); // Returns 107

try {
  // code that might throw an error
} catch (error) {
  console.error("Something went wrong:", error.message);
}

try {
  performAction(); // ❌ not defined anywhere
} catch (err) {
  console.error("Error:", err.message);
}

console.log("I'm the rest of the program");

// performAction()

try {
  let result = undefinedVar * 2;
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // undefinedVar is not defined
  console.log(err.stack); // Call trace (optional)
}

console.log("5" == 5);   // true 😬
console.log("5" === 5);  // false ✅

console.log(NaN === NaN);        // false
console.log(Number.isNaN(NaN));  // true ✅

console.log(isNaN(NaN))

console.log(typeof null); // "object"

let myValue = null

if (myValue === null) {
    // Whatever code we want to run if the value is null
} 

console.log(myVar); // undefined ✅
var myVar = 5;

console.log(myVariable); // ReferenceError ❌
let myVariable = 10;


