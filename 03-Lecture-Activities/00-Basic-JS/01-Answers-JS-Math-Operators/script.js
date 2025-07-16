// JavaScript Math Operators Exercises - Answer Key

// ===========================
// Exercise 0: Basic Arithmetic Practice
// ===========================

let x = 8;
let y = 3;

console.log("Addition:", x + y);         // 8 + 3 = 11
console.log("Subtraction:", x - y);      // 8 - 3 = 5
console.log("Multiplication:", x * y);   // 8 * 3 = 24
console.log("Division:", x / y);         // 8 / 3 ≈ 2.666...

// ===========================
// Exercise 1: Increment and Decrement
// ===========================

let counter = 0;

counter++;  // counter becomes 1
counter++;  // counter becomes 2
counter--;  // counter becomes 1 again

console.log("Final counter value:", counter);  // Should print 1

// ===========================
// Exercise 2: Modulo Mystery
// ===========================

let totalItems = 17;
let itemsPerRow = 5;

// The modulo operator gives the remainder after division
let leftovers = totalItems % itemsPerRow;

console.log("Items that don't fit evenly:", leftovers);  // Should print 2

// ===========================
// Exercise 3: Order of Operations
// ===========================

// Combined expression using PEMDAS
let result = 8 + 2 * (3 + 1) / 2 - 5;
console.log("PEMDAS result:", result);  // Expected result: 8 + 2 * 4 / 2 - 5 = 8 + 8/2 - 5 = 8 + 4 - 5 = 7

// Step-by-step breakdown
let step1 = 3 + 1;  // 4
let step2 = 2 * step1;  // 8
let step3 = step2 / 2;  // 4
let step4 = 8 + step3;  // 12
let finalResult = step4 - 5;  // 7

console.log("Step-by-step PEMDAS:", finalResult);  // 7

// ===========================
// Exercise 4: Random Number Generator
// ===========================

// Math.random() gives a number between 0 (inclusive) and 1 (exclusive)
// Multiplying it by 10 gives us a number between 0 and 9.999...
// Math.floor() then rounds it down to a whole number between 0 and 9
// Adding 1 shifts the range to 1 through 10

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Random number between 1 and 10:", randomNumber);

const smallerRandom = Math.floor(Math.random() * 5) + 1
