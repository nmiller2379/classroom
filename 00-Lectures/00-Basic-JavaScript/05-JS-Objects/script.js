// // Function to check if a number is even
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(4)); // Output: true
// console.log(isEven(7)); // Output: false

// // Function to calculate the absolute value
// function absoluteValue(number) {
//   if (number < 0) {
//     return -number;
//   }
//   return number;
// }

// console.log(absoluteValue(-5)); // Output: 5
// console.log(absoluteValue(3)); // Output: 3

// // Creating a person object literal
// let person = {
//   name: "John Doe",
//   age: 25,
//   gender: "male",
// };

// // Accessing properties using dot notation
// console.log(person.name); // Output: John Doe
// console.log(person.age); // Output: 25

// // Accessing properties using bracket notation
// console.log(person["name"]); // Output: John Doe
// console.log(person["age"]); // Output: 25

// // Using variables to access object properties
// let property = "name";
// console.log(person[property]); // Output: John Doe

// let anotherPerson = {
//   "first name": "John",
//   "last name": "Doe",
// };

// console.log(anotherPerson["first name"]); // Output: John

// function getProperty(obj, propertyName) {
//   return obj[propertyName];
// }

// const examplePerson = {
//   name: "John Doe",
//   age: 25,
// };

// const exampleProperty = "name";
// console.log(getProperty(examplePerson, exampleProperty)); // Output: John Doe

// // Adding a new property to the person object
// person.location = "New York";
// console.log(person.location); // Output: New York

// // Deleting the age property from the person object
// delete person.age;
// console.log(person.age); // Output: undefined

// // Using an object for lookups
// let grades = {
//   John: "A",
//   Jane: "B",
//   Doe: "C",
// };

// console.log(grades["John"]); // Output: A

// // Testing object for properties
// console.log(person.hasOwnProperty("age")); // Output: false
// console.log(person.hasOwnProperty("location")); // Output: true

// // A complex object with nested objects
// let school = {
//   name: "XYZ School",
//   students: [
//     { name: "Alice", grade: "A" },
//     { name: "Bob", grade: "B" },
//   ],
//   location: "Cityville",
// };

// console.log(school.students[0].name); // Output: Alice
// // Accessing properties of nested objects
// console.log(school.students[1]['grade']);  // Output: B


// ======================================

// Prompt: Given an array of integers, return the sum of all even numbers in the array.

// Restate the problem: Given an array of whole numbers, add up all the even numbers in the array. Return the result of the addition.

// Output: A number representing the sum of the even numbers in the array.

// Input: An array of whole numbers.

// Sample inputs and sample outputs:
// [1, 2, 3, 4, 5] => 6
// [1, 3, 5] => 0
// [2, 4, 6] => 12

function addEvenNums(arr) {
    // Steps:
    // 1. Initialize variable called sum to 0.
    let sum = 0;
    // 2. Loop through array.
    for (let i = 0; i < arr.length; i++) {
        // 3. Divide number in array by 2
        // 4. check for remainder after division.
        if (arr[i] % 2 === 0) {
              // a. If there is no remainder, add and assign number to sum
            sum += arr[i]
        }
    }    
    // 4.Return sum
    return sum
}

console.log(addEvenNums([1, 2, 3, 4, 5]))
console.log(addEvenNums([1, 3, 5]))
console.log(addEvenNums([2, 4, 6]))
console.log(addEvenNums([]))

// Prompt: Given an array of integers, return the an array of only even numbers in the passed array.

// Input: Array of whole numbers
// Output: An array of even numbers




