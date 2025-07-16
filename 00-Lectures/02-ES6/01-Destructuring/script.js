const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Making a copy of the original array
console.log(copiedArray); // Output: [1, 2, 3]

// const arr = [1, 2]
// const [a, b] = arr;
// console.log(a); // Output: 1
// console.log(b); // Output: 2

const arr = [1, 2];
const a = arr[0];
const b = arr[1];
console.log(a); // Output: 1
console.log(b); // Output: 2

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

// const person = {
//     firstName: 'John',
//     age: 30
// };
// const { firstName, age } = person;
// console.log(firstName); // Output: John
// console.log(age); // Output: 30

// const person = {
//   firstName: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };
// const {
//   firstName,
//   address: { city },
// } = person;
// console.log(firstName); // Output: John
// console.log(city); // Output: New York

// const firstName = 'John';
// const age = 30;
// const person = { firstName, age }; // Shorthand notation
// console.log(person); // Output: { name: 'John', age: 30 }

const firstName = 'John';
const greeting = `Hello, ${firstName}!`;
console.log(greeting); // Output: Hello, John!

