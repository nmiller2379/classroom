// === STRING BASICS ===

// Let's start with a string
let message = "Hello, world!";

// Accessing characters with bracket notation
console.log("First character:", message[0]); // H
console.log("Last character:", message[message.length - 1]); // !

// Trying to change a character directly (This won't work!)
message[0] = "h";
console.log("After attempted change:", message); // Still "Hello, world!" — strings are immutable

// To "change" the string, we create a new one
let newMessage = "h" + message.slice(1);
console.log("New message:", newMessage); // "hello, world!"

// === STRING TO ARRAY AND BACK ===

// Split the string into an array of characters
let charArray = newMessage.split("");
console.log("Character Array:", charArray);

// Change a character in the array
charArray[7] = "W"; // Change 'w' to 'W'

// Join the array back into a string
let updatedMessage = charArray.join("");
console.log("Updated message:", updatedMessage); // "hello, World!"

// === ARRAY BASICS ===

// Create an array of fruits
let fruits = ["apple", "banana", "cherry"];
console.log("Original fruits:", fruits);

// Access elements by index
console.log("First fruit:", fruits[0]); // apple

// Modify an element (arrays are mutable!)
fruits[1] = "blueberry";
console.log("Updated fruits:", fruits); // ["apple", "blueberry", "cherry"]

// === NESTED ARRAYS ===

let groceryList = [
  ["milk", "eggs"],
  ["bread", "butter", "jam"]
];

// Accessing an item in a nested array
console.log("Item:", groceryList[1][2]); // "jam"

// === ARRAY METHODS ===

let numbers = [1, 2, 3];

// Add item to end
numbers.push(4); 
console.log("After push:", numbers); // [1, 2, 3, 4]

// Remove last item
numbers.pop();
console.log("After pop:", numbers); // [1, 2, 3]

// Add item to beginning
numbers.unshift(0);
console.log("After unshift:", numbers); // [0, 1, 2, 3]

// Remove first item
numbers.shift();
console.log("After shift:", numbers); // [1, 2, 3]

// === FINDING LENGTH AND INDEX ===

console.log("Length of fruits array:", fruits.length); // 3
console.log("Last fruit:", fruits[fruits.length - 1]); // "cherry"

// Use indexOf to find the position of an item
console.log("Index of 'blueberry':", fruits.indexOf("blueberry")); // 1
console.log("Index of 'grape':", fruits.indexOf("grape")); // -1 (not found)

// indexOf also works on strings!
let sentence = "Where is the letter e?";
console.log("First 'e' at index:", sentence.indexOf("e")); // 2
