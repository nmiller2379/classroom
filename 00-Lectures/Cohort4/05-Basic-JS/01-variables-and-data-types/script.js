// === VARIABLES & DATA TYPES WORKED EXAMPLE ===

// Declaring a variable using 'let'
let age = 25; // Number data type: stores a numeric value

// Reassigning the variable to a new value
age = 26; // Variables declared with 'let' can be reassigned

// Declaring a constant using 'const'
const name = "Jordan"; // String data type: stores text

// Uncommenting the next line would cause an error
// name = "Taylor"; // ❌ Error! Cannot reassign a const variable

// Declaring a boolean
let isStudent = true; // Boolean data type: true or false

// Using a variable that hasn’t been assigned a value yet
let notAssigned;
console.log(notAssigned); // Output: undefined

// Intentionally assigning a null value
let middleName = null; // Null = intentional absence of a value

// === STRING VS NUMBER ===

// This is a number
let numberValue = 49;

// This is a string (even though it looks like a number)
let stringValue = "49";

// Math operation with a number
console.log(numberValue + 1); // Output: 50

// Attempting math with a string
console.log(stringValue + 1); // Output: "491" — string concatenation, not math!

// === VARIABLE SCOPE EXAMPLES ===

// Global variable (not recommended without a keyword!)
myGlobal = "I’m global"; // Avoid doing this in real code

function demoScope() {
  var localVar = "I’m inside this function"; // Function-scoped
  let blockScoped = "I’m block-scoped"; // Block-scoped
  const alsoBlockScoped = "Me too!"; // Also block-scoped

  console.log(localVar);       // Accessible here
  console.log(blockScoped);    // Accessible here
  console.log(alsoBlockScoped);// Accessible here

  if (true) {
    let innerLet = "Inside the block";
    console.log(innerLet); // Accessible inside the block
  }

  // console.log(innerLet); // ❌ Error: innerLet is not defined outside the block
}

demoScope();

// console.log(localVar); // ❌ Error: localVar is not accessible outside the function

// === USING VARIABLES TO REPRESENT REAL THINGS ===

let favoriteColor = "blue";
let numberOfPets = 2;
let isLoggedIn = false;

console.log("Welcome, " + name + "!");
console.log("Your favorite color is " + favoriteColor);
console.log("You have " + numberOfPets + " pets.");
console.log("Logged in: " + isLoggedIn);
