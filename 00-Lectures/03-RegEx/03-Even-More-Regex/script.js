// const pattern = /end$/;
// const text = "match me at the end";
// console.log(pattern.test(text)); // Output: true

// const pattern = /[a-zA-Z0-9]/g;
// const text = "Hello123";
// console.log(text.match(pattern)); // Output: ["H", "e", "l", "l", "o", "1", "2", "3"]

// const pattern = /\w/g;
// const text = "Hello123";
// console.log(text.match(pattern)); // Output: ["H", "e", "l", "l", "o", "1", "2", "3"]


// const pattern = /[^a-zA-Z0-9]/g;
// const text = "Hello123!";
// console.log(text.match(pattern)); // Output: ["!"]

// const pattern = /\W/g;
// const text = "Hello123!";
// console.log(text.match(pattern)); // Output: ["!"]

// const pattern = /\d/g;
// const text = "Hello123";
// console.log(text.match(pattern)); // Output: ["1", "2", "3"]

// const pattern = /\D/g;
// const text = "Hello123";
// console.log(text.match(pattern)); // Output: ["H", "e", "l", "l", "o"]

// const pattern = /\s/g;
// const text = "Hello World";
// console.log(text.match(pattern)); // Output: [" "]

const pattern = /\S/g;
const text = "Hello World";
console.log(text.match(pattern)); // Output: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]










