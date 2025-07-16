// ---------- Variable Declaration
// Declare variable with my age (or desired age)
const age = 25;
console.log(age);

// --------- String Manipulation
// Declare first name
const firstName = "John";
// Declare last name
const lastName = "Doe";
// concatenate first and last together and store in fullName variable
const fullName = firstName + " " + lastName;
console.log(fullName);

// ---------- Block scope
{
    // Declare variable inside block
    const blockVariable = "I am inside the block.";
    console.log(blockVariable);
}
// Accessing outside the block will result in an error
// console.log(blockVariable);

// ----------- Data Types
const num1 = "100"
const num2 = 100

console.log(typeof num1)
console.log(typeof num2)

// -------------- Updated Constant
const gravity = "9.8 m/s²";
// Attempting to reassign a new value will result in an error
// gravity = 0;

console.log("Gravity on Earth:", gravity + " m/s²");

let newGravity = 9.8;

newGravity = 0;



