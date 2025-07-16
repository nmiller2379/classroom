// Exploring Memory Allocation for Objects and Arrays

// Objects
const person = {
  name: "John",
  age: 30,
};
// Behind the scenes, 'person' is a reference to the memory location where the object is stored.

// Arrays

const numbers = [1, 2, 3, 4, 5];

const subArray = numbers.slice(1, 3); // Copies elements from index 1 to 2 (exclusive)
console.log(subArray); // Output: [2, 3]

const originalArray = [1, 2, { a: 3 }];
const shallowCopyArray = originalArray.slice();

// Modify the nested object
originalArray[2].a = 5;

console.log(originalArray); // Output: [1, 2, { a: 5 }]
console.log(shallowCopyArray); // Output: [1, 2, { a: 5 }]


// Copying and Comparing Objects and Arrays

// Copying
const copiedPerson = person; // Creates a reference, not a new object
copiedPerson.age = 40; // Modifying 'copiedPerson' also modifies 'person'
console.log(person); // Output: { name: 'John', age: 40 }

const num = 7
let numCopy = num
numCopy++
console.log(numCopy) //Output: 8
console.log(num) //Output: 7

// Spread operator to copy (shallow)
const original = [1, 2, 3];
const copy = [...original];
copy.push(10)
console.log(original) // [1, 2, 3]
console.log(copy) // [1, 2, 3, 10]


// Structured clone
const arrWithObj = [1, 2, {a: 1, b: 2}]
const copiedArr = structuredClone(arrWithObj)
copiedArr[2].b = 17
console.log(arrWithObj) // [1, 2, {a: 1, b: 2}] 
console.log(copiedArr) // [1, 2, {a: 1, b: 17}]



// Comparing
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // Output: false (different references)

// Array Methods
console.log(typeof numbers); //object

// Array.isArray()
console.log(Array.isArray(numbers)); // Output: true

// split()
const sentence = "Hello, world!";
const words = sentence.split(" ");
console.log(words); // Output: ['Hello,', 'world!']

const moreWords = sentence.split(",")
console.log(moreWords) // Output: ['Hello', ' world!']

const letters = sentence.split("");
console.log(letters) // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']

// splice()
// const months = ["Jan", "Feb", "March", "April"];
// months.splice(2, 1, "May"); // Removes 'March' and adds 'May' at index 2
// console.log(months); // Output: ['Jan', 'Feb', 'May', 'April']



// indexOf()
const months = ["Jan", "Feb", "March", "April"];
console.log(months.indexOf("March")); // Output: 2

// includes()
const nums = [1, 2, 3];
numbers.includes(2); // true
numbers.includes(5); // false

// flat()
const nested = [1, [2, [3]]];
nested.flat(1);   // [1, 2, [3]]
nested.flat(2);   // [1, 2, 3]


// Object Methods

// Object.keys()
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age']

// Object.values()
const values = Object.values(person);
console.log(values); // Output: ['John', 40]

// Object.entries()
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 40]]

// Object.fromEntries()
const objEntries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(objEntries);
// { a: 1, b: 2 }

// Object.hasOwn()
const user = { name: "Alex" };
Object.hasOwn(user, 'name');   // true
Object.hasOwn(user, 'email');  // false



// String methods
// indexOf()
const str = 'hello world';

console.log(str.indexOf('w')); // Output: 6
console.log(str.indexOf('p')); // Output: -1 (not present in the string)

// includes()
const greeting = "hello world";
greeting.includes("world");     // true
greeting.includes("goodbye");   // false


// charAt()
let strChar = "Hello";
console.log(strChar.charAt(0)); // Output: "H"
console.log(strChar.charAt(1)); // Output: "e"

// charCodeAt()
let strCode = "Hello";
console.log(strCode.charCodeAt(0)); // Output: 72 (Unicode value of "H")
console.log(strCode.charCodeAt(1)); // Output: 101 (Unicode value of "e")

// OR assignment
let firstName = "";
firstName ||= "Anonymous";  
// "Anonymous"

// AND assignment
let isActive = true;
isActive &&= "User is active";  
// "User is active"

// Nullish assignment
let score = null;
score ??= 0;  // 0