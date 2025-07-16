// ------- Decimal operations
// Declare variables with decimal values
let num1 = 5.2;
let num2 = 2.8;

// Store result of multiplication
let product = num1 * num2;
// Store result of division
let quotient = num1 / num2;

// Log results to the console
console.log("Product: ", product.toFixed(2));
console.log("Quotient: ", quotient.toFixed(2));

// ----------Compound assignment
// Initialize variable to 10
let counter = 10;

// Practice compound assignment
counter += 5; // counter = counter + 5
console.log("Compound addition", counter)
counter -= 2;
console.log("Compound subtraction", counter)
counter *= 3;
counter /= 2;

// Log final result to the console
console.log("Final value: ", counter);

// -------- String Length
// Initialize variable with string
let message = "Hello, JavaScript!";
console.log(message.length)
console.log(message[0])
console.log(message[17])

// Log length of string to console.
console.log("Length of message: ", message.length);

// Add to the string with another string
message += " Have a great day!"; // message = message + " Have a greate day!"
console.log(message[message.length-1])
// Log new result to the console
console.log("Updated Length: ", message.length);

// -------- Precision handling
// Initialize variables with decimals
const numA = 0.1;
const numB = 0.2;

// Add them together without toFixed()
let resultWithoutPrecision = numA + numB;
// Add them together with toFixed()
let resultWithPrecision = (numA + numB).toFixed(2);

// Log results to the console.
console.log("Result without precision: ", resultWithoutPrecision);
console.log("Result with precision: ", resultWithPrecision);

// --------- String Reveral
// Declare a variable and assign it a string
const originalString = "Hello, World!";

// Write a function called reverseString that takes a string as an argument and returns the reverse of that string
function reverseString(str) {
  let reversedString = "";
  // Iterate over each character in the parameter in reverse order.
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the reversedString variable.
    reversedString += str[i];
  }
    // Return the reversed string
  return reversedString
}

// Call it with original string
// const result = reverseString(originalString)
// console.log(result)

console.log(originalString)
console.log(reverseString(originalString))

// Call it with another string
console.log(reverseString("I'm antother string"))

for (let i = 0; i < 300; i++) {
  console.log("Hello world!")
}

