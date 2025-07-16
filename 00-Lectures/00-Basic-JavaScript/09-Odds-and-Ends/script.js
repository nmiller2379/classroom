// === parseInt() Examples ===

// Basic use: Convert a numeric string to an integer
let numericString = "123";
let parsedNumber = parseInt(numericString);
console.log("Parsed number:", parsedNumber); // 123

// Invalid number: Returns NaN (Not a Number)
let invalidString = "abc";
let parsedInvalid = parseInt(invalidString);
console.log("Parsed invalid string:", parsedInvalid); // NaN

// With radix (base 2): Binary to decimal
let binaryString = "1101";
let decimalValue = parseInt(binaryString, 2); // 1*8 + 1*4 + 0*2 + 1*1 = 13
console.log("Binary '1101' as decimal:", decimalValue); // 13

// === .toString() Examples ===

// Convert a number to a string
let age = 35;
let ageAsString = age.toString();
console.log("Age as string:", ageAsString); // "35"

// Concatenating with a string forces conversion too
let message = "You are " + age + " years old.";
console.log(message); // "You are 35 years old."

// === ASCII with charCodeAt() and fromCharCode() ===

// Get the ASCII code of a character
let letter = "A";
let asciiCode = letter.charCodeAt(0);
console.log("ASCII code of 'A':", asciiCode); // 65

// Convert ASCII code back to a character
let code = 90;
let character = String.fromCharCode(code);
console.log("Character for ASCII 90:", character); // "Z"

// === Ternary Operator ===

// Basic usage
let isMember = true;
let discountMessage = isMember ? "You get a discount!" : "No discount for you.";
console.log(discountMessage); // "You get a discount!"

// As an if/else
if (isMember) {
  discountMessage = "You get a discount!";
} else {
  discountMessage = "No discount for you.";
}

// Nested ternary: categorize age
let userAge = 20;
let status =
  userAge < 18
    ? "You are a minor."
    : userAge < 21
    ? "You are not quite a legal adult."
    : "You are a legal adult.";
console.log(status); // "You are not quite a legal adult."
