function findLongPasswords(arr) {
  return arr.filter((word) => word.length >= 9);
}

const passwords = [
  "123456",
  "password",
  "admin",
  "perseverecodecamp",
  "mypassword123",
];

const longPasswords = findLongPasswords(passwords);
console.log(longPasswords);

// const sayHello = function (name) {
//   return `Hello, ${name}!`;
// };

// const greet = sayHello;
// console.log(greet("Alice")); // Outputs: "Hello, Alice!"

const greet = name => `Hello, ${name}!`;
const yell = statement => statement.toUpperCase();
const yellGreeting = name => yell(greet(name));
console.log(yellGreeting('Alice')); // Outputs: "HELLO, ALICE!"

const add = (x, y) => x + y;
console.log(add(2, 3)); // Always returns 5 if it gets 2 and 3 as inupts


const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // [1, 2, 3, 4]

const compose = (f, g) => x => f(g(x));
const addTwo = x => x + 2;
const multiplyThree = x => x * 3;
const multiplyThenAdd = compose(addTwo, multiplyThree);
console.log(multiplyThenAdd(5)); // Outputs: 17

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]