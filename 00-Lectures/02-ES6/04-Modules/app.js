import { add as addition, subtract as subtraction } from './math.js';
import customLog from './logger.js';
import customSquare, { PI } from './utilities.js';

console.log(addition(5, 3)); // Output: 8
console.log(subtraction(7, 2)); // Output: 5

customLog('Hello, ES6 Modules!'); // Output: Hello, ES6 Modules!

console.log(PI); // Output: 3.14
console.log(customSquare(5)); // Output: 25

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// export { add as addition, subtract as subtraction };

