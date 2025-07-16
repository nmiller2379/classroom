let myString = "Hello, World!";
let firstCharacter = myString[0]; // Retrieves 'H'
let someCharacter = myString[myString.length-1]
console.log(someCharacter)

let greeting = "Hello"
greeting[0] = "J"
console.log(greeting)

let newString = "J"
for (let i = 1; i < greeting.length; i++) {
    newString += greeting[i] 
}
console.log(newString)

let fruits = ["apple", "banana", "orange"];

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2])

const firstFruit = fruits[0]; // Retrieves 'apple'


fruits[1] = "grape"; 
console.log(fruits)

fruits.push("kiwi"); // Adds 'kiwi' to the end of the array
let removedFruit = fruits.pop(); // Removes 'kiwi' and returns it
// Here, we're storing kiwi in removedFruit.

// Removes 'apple' and returns it.
// Here, we're storing apple in firstRemoved
let firstRemoved = fruits.shift(); 
// Adds 'pear' to the beginning of the array
fruits.unshift("pear"); 







// Even odd for integers only
function checkEvenOrOdd(number) {
    if (Number.isInteger(number)) {
        // Check for integer
        if (number % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    } else if (typeof number === 'number') {
        // Check for floating-point
        return "not an integer";
    } else {
        // Handle other types
        return "not a number";
    }
}

// Example usage:
console.log(checkEvenOrOdd(4));    // Output: "even"
console.log(checkEvenOrOdd(7));    // Output: "odd"
console.log(checkEvenOrOdd(2.2));  // Output: "not an integer"
console.log(checkEvenOrOdd("abc"));  // Output: "not a number"
