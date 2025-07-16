// JavaScript Math Operators - Worked Example
// This file demonstrates each of the core math concepts discussed in the lecture.

// ===========================
// Basic Math Operators
// ===========================

let a = 10;
let b = 4;

console.log("Addition:", a + b);         // 10 + 4 = 14
console.log("Subtraction:", a - b);      // 10 - 4 = 6
console.log("Multiplication:", a * b);   // 10 * 4 = 40
console.log("Division:", a / b);         // 10 / 4 = 2.5

// ===========================
// Increment and Decrement
// ===========================

let score = 5;

score++;  // Adds 1 (now 6)
console.log("After increment:", score);

score--;  // Subtracts 1 (back to 5)
console.log("After decrement:", score);

// ===========================
// Modulo Operator (%)
// ===========================

let totalCandies = 23;
let candiesPerBag = 5;

let leftovers = totalCandies % candiesPerBag;  // 23 ÷ 5 = 4 remainder 3
console.log("Leftover candies:", leftovers);

// Use modulo to check if a number is even
let number = 10;
console.log("Is 10 even?", number % 2 === 0);  // true

// ===========================
// Order of Operations (PEMDAS)
// ===========================

let result = 6 + 3 * (2 + 1) - 4 / 2;
// 1. Parentheses: (2 + 1) = 3
// 2. Multiplication: 3 * 3 = 9
// 3. Division: 4 / 2 = 2
// 4. Addition and subtraction: 6 + 9 - 2 = 13

console.log("Order of operations result:", result);

// ===========================
// Math Object Methods
// ===========================

// Math.round() - rounds to nearest integer
console.log("Math.round(4.6):", Math.round(4.6));  // 5

// Math.floor() - rounds down
console.log("Math.floor(4.9):", Math.floor(4.9));  // 4

// Math.pow() - exponentiation
console.log("Math.pow(2, 3):", Math.pow(2, 3));    // 8

// Math.abs() - absolute value
console.log("Math.abs(-10):", Math.abs(-10));      // 10

// Math.random() - random number between 0 and 1
console.log("Random number between 0 and 1:", Math.random());

// Generate random whole number between 1 and 10
let randomBetween1and10 = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10:", randomBetween1and10);

// Math.max() and Math.min()
console.log("Max of (5, 12, 8):", Math.max(5, 12, 8));  // 12
console.log("Min of (5, 12, 8):", Math.min(5, 12, 8));  // 5

// ===========================
// Real World Example: Area of a Circle
// ===========================

let radius = 5;
let area = Math.PI * Math.pow(radius, 2);  // A = πr²

console.log("Area of a circle with radius 5:", area.toFixed(2));  // Rounded to 2 decimals
